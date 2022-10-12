const config = require('config');
const jwt = require('jsonwebtoken');

async function auth(req, res, next) {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, '123');
        const user = await User.findOne({
          _id: decoded.id,
        });
        if (!user) throw new Error();
        req.token = token;
        req.user = user;
        next();
      } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' });
      }
}

module.exports = auth;
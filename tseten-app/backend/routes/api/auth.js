const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

//User Model
const User = require("../../models/User");

// @route POST api/auth
// @desc Authenticate the user
// @access Public
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: "Kindly fill all the required fields" });
    }

    User.findOne({ email }).then(user => {
        if (!user) return res.status(400).json({ msg: "User does not exist" });

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.compare(password, user.password) //validate password
                .then(isMatch => {
                    if (!isMatch) return res.status(400).json({ msg: "Incorrect password" });

                    jwt.sign(
                        { id: user.id }, //payload {}
                        config.get('jwtSecret'), //api key from key handling module
                        {}, //options {}
                        (err, token) => { //callback
                            if (err) throw err;
                            res.json({
                                user: {
                                    id: user.id,
                                    email: user.email
                                },
                                token
                            })
                        }
                    )
                });
        });
    });
});


module.exports = router;
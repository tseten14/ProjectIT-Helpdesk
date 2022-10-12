const express = require("express");
const router = express.Router();

const User = require('./../../models/User');

router.get('/seedAdmin', async (req, res)=>{
    try{
        await User.create({
            name: 'Admin',
            email: 'admin@admin.com',
            password: 'admin@123'
        });
        res.status(200).send({'message': "Seed Completed"});
    }catch(e){
        res.status(400).send(e);
    }
});

module.exports = router;
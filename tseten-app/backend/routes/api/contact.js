const express = require("express");
const auth = require('../../middleware/auth');
const router = express.Router();

//contact model
const Contact =  require('../../models/Contact');

// @route POST api/contact
// @desc Creates the message
// @access Public
router.post('/contacts', async (req, res)=>{
    const contact = new Contact(req.body);
    try{
        await contact.save();
        return res.status(200).send({'message':'Message Sent Successfully!'});
    }catch(e)
    {
        return res.status(400).send(e);
    }
});

// @route GET api/contact
// @desc Get all message
// @access Admin
router.get('/contact',auth, async (req, res)=>{
    try{
        const contacts = await Contact.find({});
        res.status(200).send(contacts);
    }catch(e)
    {
        res.status(400).send(e);
    }
});

// @route GET api/contact
// @desc Get message by id
// @access Admin
router.get('/contact/:id',auth, async (req, res)=>{
    const _id = req.params.id;
    try{
        const contact = await Contact.findById(_id);
        if(!contact){
            return res.sendStatus(404);
        }
        return res.status(200).send(contact);
    }catch(e)
    {
        return res.status(400).send(e);
    }
});

// @route DELETE api/contact
// @desc Delete message 
// @access Admin
router.delete('/contact/:id',auth, async (req, res)=>{
    const _id = req.params.id;
    try{
        const contact = await Contact.findByIdAndDelete(_id);
        if(!contact){
            return res.status(404);
        }
        return res.send(contact);

    }catch(e)
    {
        return res.status(400).send(e);
    }
});

module.exports = router;

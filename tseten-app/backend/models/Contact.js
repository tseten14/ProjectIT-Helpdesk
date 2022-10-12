const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    isRCNJStudent:{
        type: Boolean,
        required: false
    }
});

//uniqueness validators


module.exports = Contact = mongoose.model('contact', ContactSchema);
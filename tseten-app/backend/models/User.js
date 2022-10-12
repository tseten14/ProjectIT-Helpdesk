const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        validate: [{
            validator:  (value) => value.replace(/ /g) === value,
            msg: 'Username cannot contain whitespaces'
        }]
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

//uniqueness validators
UserSchema.path('email').validate(async (value) => {
    const emailCount = await mongoose.models.user.countDocuments({ email: value });
    return !emailCount;
}, 'Email already exists');

UserSchema.path('name').validate(async (value) => {
    const nameCount = await mongoose.models.user.countDocuments({ name: value });
    return (!nameCount);
}, 'Username already exists');

// Hash the plain text password before save
UserSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8);
    }
    next();
  });

module.exports = User = mongoose.model('user', UserSchema);
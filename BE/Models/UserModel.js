const mongoose = require('mongoose');

const PredefinedUserRoles = ['Author', 'Reviewer', 'Editor', 'Admin'];

const UserSchema = new mongoose.Schema({
    Name: {type: String, required: true},
    ProfilePictureUrl: {type: String, required: false},
    Role: {type: String, required: true, enum: PredefinedUserRoles},
    Description: {type: String, required: false},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
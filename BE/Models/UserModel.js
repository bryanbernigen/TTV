const mongoose = require('mongoose');

const PredefinedUserRoles = ['Author', 'Reviewer', 'Editor', 'Admin'];

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    profilePictureUrl: {type: String, required: false},
    role: {type: String, required: true, enum: PredefinedUserRoles},
    description: {type: String, required: false},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
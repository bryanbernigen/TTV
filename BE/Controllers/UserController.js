const User = require("../Models/UserModel");

const addUser = async (req, res) => {
    const { name, profilePictureUrl, role, description } = req.body;

    const newUser = new User({
        name: name,
        profilePictureUrl: profilePictureUrl,
        role: role,
        description: description,
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json({
            status: "success",
            message: "User added"
        });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};

const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        res.status(200).json({
            status: "success",
            user: user,
        });
    } catch (error) {
        res.status(400).json({ status: "error", message: error.message });
    }
};

module.exports = {
    addUser,
    getUser,
};

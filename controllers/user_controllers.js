const User = require("../models/User.js")
const bcrypt = require('bcryptjs');
module.exports.getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if (!users) {
        return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json({ users });
};

module.exports.signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    if (
        !name &&
        name.trim() === "" &&
        !email &&
        email.trim() === "" &&
        !password &&
        password.trim() === ""
    ) {
        return res.status(422).json({ message: "Invalid Inputs" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    let user;
    try {
        user = new User({ name, email, password:hashedPassword });
        user = await user.save();
    } catch (err) {
        return console.log(err);
    }
    if (!user) {
        return res.status(500).json({ message: "Unexpected Error Occured" });
    }
    return res.status(201).json({ user });
};
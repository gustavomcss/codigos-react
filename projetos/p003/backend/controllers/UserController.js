const User = require("../models/User");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const mongoose = require("mongoose");

const jwtSecret = process.env.JWT_SECRET;

// Generate User Token
const generateToken = (id) => {
    return jwt.sign({ id }, jwtSecret, {
        expiresIn: "7d"
    });
};

// Register User and Sign In
const register = async (req, res) => {
    const { name, email, password } = req.body;

    // Check if User Exists
    const user = await User.findOne({ email });;

    if (user) {
        res.status(422).json({ errors: ["User already exists!"] });
        return;
    }

    // Generate Password Hash
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Create User
    const newUser = await User.create({
        name,
        email,
        password: passwordHash
    });

    // If User Was Create Sucessfully, Return Token
    if (!newUser) {
        res.status(422).json({ errors: ["Unexpected error. Please try again later"] });
        return;
    }

    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser._id)
    });
};

// Sign User In
const login = async (req, res) => {
    const { email, password } = req.body;

    // Check if User Exists
    const user = await User.findOne({ email });

    if (!user) {
        res.status(404).json({ errors: ["User not found!"] });
        return;
    }

    // Check if Password Matches
    if (!(await bcrypt.compare(password, user.password))) {
        res.status(422).json({ errors: ["Invalid password!"] });
        return;
    }

    // Return User with Token
    res.status(201).json({
        _id: user._id,
        profileImage: user.profileImage,
        token: generateToken(user._id)
    });
};

// Get Current Logged In User
const getCurrentUser = async (req, res) => {
    const user = req.user;

    res.status(200).json(user);
};

// Update an User
const update = async (req, res) => {
    const { name, password, bio } = req.body;

    let profileImage = null;

    if (req.file) {
        profileImage = req.file.filename;
    }

    const reqUser = req.user;

    const user = await User.findById(reqUser._id).select("-password");

    if (name) {
        user.name = name;
    }

    if (password) {
        // Generate Password Hash
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        user.password = passwordHash;
    }

    if (profileImage) {
        user.profileImage = profileImage;
    }

    if (bio) {
        user.bio = bio;
    }

    await user.save();

    res.status(200).json(user);
};

// Get User by ID
const getUserById = async (req, res) => {
    const { id } = req.params;

    // Check if User Exists
    try {
        const user = await User.findById(id).select("-password");

        if (!user) {
            // Check if ID is Valid
            res.status(404).json({ errors: ["User not found!"] });
            return;
        }

        res.status(200).json(user);
    } catch (error) {
        // Check if ID is in Valid Format
        res.status(404).json({ errors: ["User not found!"] });
        return;
    }
};

module.exports = {
    register,
    login,
    getCurrentUser,
    update,
    getUserById
};
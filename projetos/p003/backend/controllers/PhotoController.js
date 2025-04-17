const Photo = require("../models/Photo");
const User = require("../models/User");

const fs = require("fs");
const path = require("path");

// Insert a New Photo with an User Related to it
const insertPhoto = async (req, res) => {
    const { title } = req.body;
    const image = req.file.filename;

    const reqUser = req.user;

    const user = await User.findById(reqUser._id);

    // Create a Photo
    const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name
    });

    // If Photo was Create Sucessfully, Return Data
    if (!newPhoto) {
        res.status(422).json({ errors: ["Unexpected error. Please try again later"] });
        return;
    }

    res.status(201).json(newPhoto);
};

// Helper function to delete an image file
const deleteImageFile = (imagePath) => {
    const fullPath = path.join(__dirname, "..", "uploads", "photos", imagePath);
    fs.unlink(fullPath, (err) => {
        if (err) {
            console.error(`Error deleting file: ${fullPath}`, err);
        }
    });
};

// Remove a Photo from DB
const deletePhoto = async (req, res) => {
    const { id } = req.params;
    const reqUser = req.user;

    try {
        // Check if Photo Exists
        const photo = await Photo.findById(id);

        if (!photo) {
            res.status(404).json({ errors: ["Photo not found"] });
            return;
        }

        // Check if Photo Belongs to User
        if (!photo.userId.equals(reqUser._id)) {
            res.status(422).json({ errors: ["Unexpected error. Please try again later"] });
            return;
        }

        // Delete the Image File
        deleteImageFile(photo.image);

        await Photo.findByIdAndDelete(photo._id);

        res.status(200).json({ id: photo._id, message: "Photo deleted successfully!" });
    } catch (error) {
        res.status(404).json({ errors: ["Photo not found"] });
        return;
    }
};

// Get All Photos from DB
const getAllPhotos = async (req, res) => {
    const photos = await Photo.find({}).sort([["createdAt", -1]]).exec();

    res.status(200).json(photos);
};

// Get User Photos
const getUserPhotos = async (req, res) => {
    const { id } = req.params;

    const photos = await Photo.find({ userId: id }).sort([["createdAt", -1]]).exec();

    res.status(200).json(photos);
};

// Get Photo by ID
const getPhotoById = async (req, res) => {
    const { id } = req.params;

    // Check if Photo Exists
    const photo = await Photo.findById(id);

    if (!photo) {
        res.status(404).json({ errors: ["Photo not found"] });
        return;
    }

    res.status(200).json(photo);
};

// Update Photo by ID
const updatePhotoById = async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const reqUser = req.user;

    // Check if Photo Exists
    const photo = await Photo.findById(id);

    if (!photo) {
        res.status(404).json({ errors: ["Photo not found"] });
        return;
    }

    // Check if Photo Belongs to User
    if (!photo.userId.equals(reqUser._id)) {
        res.status(422).json({ errors: ["Unexpected error. Please try again later"] });
        return;
    }

    if (title) {
        photo.title = title;
    }

    await photo.save();

    res.status(200).json({ photo, message: "Photo updated successfully!" });
};

// Like Functionality
const likePhoto = async (req, res) => {
    const { id } = req.params;

    const reqUser = req.user;

    // Check if Photo Exists
    const photo = await Photo.findById(id);

    if (!photo) {
        res.status(404).json({ errors: ["Photo not found"] });
        return;
    }

    // Check if User Already Liked the Photo
    if (photo.likes.includes(reqUser._id)) {
        res.status(422).json({ errors: ["You already liked this photo"] });
        return;
    }

    photo.likes.push(reqUser._id);

    await photo.save();

    res.status(200).json({ photoId: id, userId: reqUser._id, message: "Photo liked successfully!" });
};

// Comment Functionality
const commentPhoto = async (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;

    const reqUser = req.user;

    const user = await User.findById(reqUser._id);

    // Check if Photo Exists
    const photo = await Photo.findById(id);

    if (!photo) {
        res.status(404).json({ errors: ["Photo not found"] });
        return;
    }

    // Put Comment in Array Comments
    const userComment = {
        comment,
        userName: user.name,
        userImage: user.profileImage,
        userId: user._id
    };

    photo.comments.push(userComment);

    await photo.save();

    res.status(200).json({ comment: userComment, message: "Comment added successfully!" });
};

// Search Photos by Title
const searchPhotos = async (req, res) => {
    const { q } = req.query;

    const photos = await Photo.find({ title: new RegExp(q, "i") }).exec();

    res.status(200).json(photos);
};

module.exports = {
    insertPhoto,
    deletePhoto,
    getAllPhotos,
    getUserPhotos,
    getPhotoById,
    updatePhotoById,
    likePhoto,
    commentPhoto,
    searchPhotos
}
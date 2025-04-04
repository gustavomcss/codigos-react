const express = require("express");
const router = express.Router();

// Controller
const { insertPhoto } = require("../controllers/PhotoController");
const { deletePhoto } = require("../controllers/PhotoController");
const { getAllPhotos } = require("../controllers/PhotoController");
const { getUserPhotos } = require("../controllers/PhotoController");
const { getPhotoById } = require("../controllers/PhotoController");
const { updatePhotoById } = require("../controllers/PhotoController");
const { searchPhotos } = require("../controllers/PhotoController");

const { likePhoto } = require("../controllers/PhotoController");
const { commentPhoto } = require("../controllers/PhotoController");

// Middlewares
const validate = require("../middlewares/handleValidation");
const authGuard = require("../middlewares/authGuard");
const { photoInsertValidation } = require("../middlewares/photoValidation");
const { photoUpdateValidation } = require("../middlewares/photoValidation");
const { commentValidation } = require("../middlewares/photoValidation");
const { imageUpload } = require("../middlewares/imageUpload");

// Routes
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto);
router.delete("/:id", authGuard, deletePhoto);
router.get("/", authGuard, getAllPhotos);
router.get("/user/:id", authGuard, getUserPhotos);
router.get("/search", authGuard, searchPhotos);

router.get("/:id", authGuard, getPhotoById);
router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhotoById);

router.put("/like/:id", authGuard, likePhoto);
router.put("/comment/:id", authGuard, commentValidation(), validate, commentPhoto);

module.exports = router;
const express = require("express");
const router = express.Router();

// Controller 
const { register } = require("../controllers/UserController");
const { login } = require("../controllers/UserController");
const { update } = require("../controllers/UserController");
const { getCurrentUser } = require("../controllers/UserController");
const { getUserById } = require("../controllers/UserController");

// Middlewares
const validate = require("../middlewares/handleValidation");
const authGuard = require("../middlewares/authGuard");
const { userCreateValidation } = require("../middlewares/userValidations");
const { userLoginValidation } = require("../middlewares/userValidations");
const { userUpdateValidation } = require("../middlewares/userValidations");
const { imageUpload } = require("../middlewares/imageUpload");

// Routes
router.post("/register", userCreateValidation(), validate, register);
router.post("/login", userLoginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);
router.put("/", authGuard, userUpdateValidation(), validate, imageUpload.single("profileImage"), update);
router.get("/:id", getUserById)

module.exports = router;
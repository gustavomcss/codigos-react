const multer = require("multer");
const path = require("path");

// Destination to Store Image
const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = "";

        if (req.baseUrl.includes("users")) {
            folder = "users";
        } else if (req.baseUrl.includes("photos")) {
            folder = "photos";
        }

        cb(null, `uploads/${folder}/`);
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            // Upload Only png and jpg Formats
            return cb(new Error("Please upload a PNG or JPG image"));
        }

        // Continue with Upload
        cb(undefined, true);
    }
});

module.exports = { imageUpload };
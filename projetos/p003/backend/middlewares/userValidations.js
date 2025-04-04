const { body } = require("express-validator");

const userCreateValidation = () => {
    return [
        body("name")
            .isString().withMessage("The name is required")
            .isLength({ min: 3 }).withMessage("The name must be at least 3 characters long"),

        body("email")
            .isString().withMessage("The email is required")
            .isEmail().withMessage("The email is invalid"),

        body("password")
            .isString().withMessage("The password is required")
            .isLength({ min: 6 }).withMessage("The password must be at least 6 characters long"),

        body("confirmPassword")
            .isString().withMessage("The confirm password is required")
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error("The passwords do not match");
                }
                return true;
            }),
    ];
};

const userLoginValidation = () => {
    return [
        body("email")
            .isString().withMessage("The email is required")
            .isEmail().withMessage("The email is invalid"),

        body("password")
            .isString().withMessage("The password is required")
    ];
};

const userUpdateValidation = () => {
    return [
        body("name")
            .optional()
            .isLength({ min: 3 }).withMessage("The name must be at least 3 characters long"),

        body("password")
            .optional()
            .isLength({ min: 6 }).withMessage("The password must be at least 6 characters long"),
    ]
};

module.exports = {
    userCreateValidation,
    userLoginValidation,
    userUpdateValidation
};
const { body, validationResult } = require("express-validator");

const contactValidation = [
  body("name")
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters.")
    .escape(),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email address.")
    .normalizeEmail(),
  body("company")
    .optional({ values: "falsy" })
    .trim()
    .isLength({ max: 120 })
    .withMessage("Company name is too long.")
    .escape(),
  body("service")
    .trim()
    .isIn(["webentwicklung", "seo", "social-media", "full-service"])
    .withMessage("Please select a valid service."),
  body("message")
    .trim()
    .isLength({ min: 20, max: 2000 })
    .withMessage("Message must be between 20 and 2000 characters.")
    .escape(),
  body("website")
    .optional({ values: "falsy" })
    .isEmpty()
    .withMessage("Invalid request.")
];

function handleValidationErrors(req, res, next) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: "Invalid request payload.",
      details: errors.array({ onlyFirstError: true })
    });
  }

  return next();
}

module.exports = {
  contactValidation,
  handleValidationErrors
};

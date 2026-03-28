const express = require("express");

const { contactLimiter } = require("../middlewares/rateLimiters");
const { contactValidation, handleValidationErrors } = require("../middlewares/validators");

const router = express.Router();

router.post("/", contactLimiter, contactValidation, handleValidationErrors, async (req, res) => {
  const { name, email, company, service, message } = req.body;

  // Replace this with secure DB or email provider integration in production.
  const lead = {
    name,
    email,
    company: company || "",
    service,
    message,
    receivedAt: new Date().toISOString(),
    ip: req.ip
  };

  // Log only non-sensitive metadata in production-grade systems.
  console.info("New lead received", {
    emailDomain: email.split("@")[1] || "unknown",
    service,
    receivedAt: lead.receivedAt
  });

  return res.status(201).json({
    success: true,
    message: "Danke! Deine Anfrage wurde sicher uebermittelt.",
    data: {
      service,
      receivedAt: lead.receivedAt
    }
  });
});

module.exports = router;

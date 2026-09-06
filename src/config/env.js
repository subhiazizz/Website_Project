const dotenv = require("dotenv");
const Joi = require("joi");

dotenv.config();

const schema = Joi.object({
  NODE_ENV: Joi.string().valid("development", "production", "test").default("development"),
  PORT: Joi.number().port().default(3000),
  TRUST_PROXY: Joi.string().valid("true", "false").default("false"),
  ALLOWED_ORIGINS: Joi.string().default("http://localhost:3000,http://127.0.0.1:3000"),
  PUBLIC_URL: Joi.string().uri({ scheme: ["http", "https"] }).default("http://localhost:3000"),
  CONTACT_RECEIVER_EMAIL: Joi.string().email().allow("").optional()
}).unknown(true);

const { error, value } = schema.validate(process.env, { abortEarly: false });

if (error) {
  throw new Error(`Environment validation failed: ${error.message}`);
}

const allowedOrigins = value.ALLOWED_ORIGINS.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

module.exports = {
  nodeEnv: value.NODE_ENV,
  port: value.PORT,
  trustProxy: value.TRUST_PROXY === "true",
  allowedOrigins,
  publicUrl: value.PUBLIC_URL.replace(/\/$/, ""),
  contactReceiverEmail: value.CONTACT_RECEIVER_EMAIL || ""
};

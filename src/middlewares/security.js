const compression = require("compression");
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const hpp = require("hpp");

function applySecurity(app, env) {
  app.disable("x-powered-by");

  if (env.trustProxy) {
    app.set("trust proxy", 1);
  }

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'"],
          styleSrc: ["'self'"],
          fontSrc: ["'self'", "data:"],
          imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
          connectSrc: ["'self'"],
          objectSrc: ["'none'"],
          frameAncestors: ["'none'"],
          baseUri: ["'self'"],
          formAction: ["'self'"],
          upgradeInsecureRequests: []
        }
      },
      crossOriginEmbedderPolicy: false,
      referrerPolicy: { policy: "strict-origin-when-cross-origin" }
    })
  );

  // Permissions-Policy: default-deny for sensitive browser capabilities the
  // site never uses. Helmet exposes this via a separate module; the header
  // fits in one line here.
  app.use((req, res, next) => {
    res.setHeader(
      "Permissions-Policy",
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()"
    );
    next();
  });

  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || env.allowedOrigins.includes(origin)) {
          return callback(null, true);
        }

        return callback(new Error("Origin not allowed by CORS"));
      },
      methods: ["GET", "POST"],
      optionsSuccessStatus: 204
    })
  );

  app.use(compression());
  app.use(hpp());
  app.use(express.json({ limit: "10kb" }));
  app.use(express.urlencoded({ extended: false, limit: "10kb" }));
}

module.exports = { applySecurity };

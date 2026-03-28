const path = require("path");
const express = require("express");

const env = require("./config/env");
const { applySecurity } = require("./middlewares/security");
const { apiLimiter } = require("./middlewares/rateLimiters");
const { notFoundHandler, errorHandler } = require("./middlewares/errorHandler");

const healthRoutes = require("./routes/healthRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const publicDir = path.resolve(__dirname, "..", "public");

applySecurity(app, env);

app.use("/api", apiLimiter);
app.use("/api/health", healthRoutes);
app.use("/api/contact", contactRoutes);

app.use(
  express.static(publicDir, {
    maxAge: env.nodeEnv === "production" ? "1h" : 0,
    etag: true,
    lastModified: true
  })
);

app.get("*", (req, res) => {
  if (req.path.startsWith("/api/")) {
    return notFoundHandler(req, res);
  }

  return res.sendFile(path.join(publicDir, "index.html"));
});

app.use(notFoundHandler);
app.use(errorHandler);

if (require.main === module) {
  app.listen(env.port, () => {
    console.log(`Server running on http://localhost:${env.port}`);
  });
}

module.exports = app;

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
const seoPages = ["/", "/about", "/services", "/process", "/contact"];
const pageRoutes = {
  "/": "index.html",
  "/about": "about.html",
  "/services": "services.html",
  "/process": "process.html",
  "/contact": "contact.html",
  "/privacy": "privacy.html",
  "/datenschutz": "privacy.html",
  "/imprint": "imprint.html",
  "/impressum": "imprint.html"
};

applySecurity(app, env);

app.use("/api", apiLimiter);
app.use("/api/health", healthRoutes);
app.use("/api/contact", contactRoutes);

app.get("/robots.txt", (req, res) => {
  const protocol = req.secure ? "https" : "http";
  const host = req.get("host");
  const baseUrl = `${protocol}://${host}`;

  res.type("text/plain");
  res.send(`User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`);
});

app.get("/sitemap.xml", (req, res) => {
  const protocol = req.secure ? "https" : "http";
  const host = req.get("host");
  const baseUrl = `${protocol}://${host}`;
  const currentDate = new Date().toISOString().split("T")[0];

  const urlEntries = seoPages
    .map(
      (route) =>
        `<url><loc>${baseUrl}${route}</loc><changefreq>weekly</changefreq><priority>${
          route === "/" ? "1.0" : "0.8"
        }</priority><lastmod>${currentDate}</lastmod></url>`
    )
    .join("");

  res.type("application/xml");
  res.send(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}</urlset>`
  );
});

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

  const normalizedPath = req.path.replace(/\/+$/, "") || "/";
  const pageFile = pageRoutes[normalizedPath];

  if (pageFile) {
    return res.sendFile(path.join(publicDir, pageFile));
  }

  return notFoundHandler(req, res);
});

app.use(notFoundHandler);
app.use(errorHandler);

if (require.main === module) {
  app.listen(env.port, () => {
    console.log(`Server running on http://localhost:${env.port}`);
  });
}

module.exports = app;

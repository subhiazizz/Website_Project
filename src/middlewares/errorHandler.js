function notFoundHandler(req, res) {
  res.status(404).json({ error: "Resource not found." });
}

function errorHandler(err, req, res, next) {
  const isProduction = process.env.NODE_ENV === "production";
  const status = err.statusCode || 500;

  if (!isProduction) {
    // Keep stack traces out of production responses.
    console.error(err);
  }

  res.status(status).json({
    error: isProduction ? "An unexpected error occurred." : err.message || "Unexpected error.",
    ...(isProduction ? {} : { stack: err.stack })
  });
}

module.exports = {
  notFoundHandler,
  errorHandler
};

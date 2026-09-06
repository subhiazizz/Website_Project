function notFoundHandler(req, res) {
  res.status(404).json({ error: "Resource not found." });
}

function errorHandler(err, req, res, next) {
  const isProduction = process.env.NODE_ENV === "production";
  const status = err.statusCode || 500;

  // Log in every environment. The check earlier gated logging behind
  // !isProduction, which silently dropped every 5xx in prod, breaking
  // observability. The response body is what has to stay redacted, not
  // the server-side log.
  console.error(err);

  res.status(status).json({
    error: isProduction ? "An unexpected error occurred." : err.message || "Unexpected error.",
    ...(isProduction ? {} : { stack: err.stack })
  });
}

module.exports = {
  notFoundHandler,
  errorHandler
};

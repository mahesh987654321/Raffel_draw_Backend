const firstError = (_req, _res, next) => {
  const error = new Error("This is a new error");
  error.status = 404;
  next(error);
};

const secondError = (error, req, res, next) => {
  if (error.status) {
    return res.status(error.status).json({
      message: error.message,
    });
  }
  res.status(500).json({ message: "Something went wrong" });
};
module.exports = { firstError, secondError };

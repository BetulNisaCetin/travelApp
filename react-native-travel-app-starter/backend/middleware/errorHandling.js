const errorHandler = (error, req, res, next) => {
  return res.status(500).json({ status: false, message: "something went wrong" });
}

module.exports = errorHandler;

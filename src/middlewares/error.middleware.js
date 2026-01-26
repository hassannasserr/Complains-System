const errorHandler = (err, req, res, next) => {
  let message = err.message;

  if (err.name === 'ValidationError') {
    message = Object.values(err.errors)
      .map(val => val.message)
      .join(', ');
  }

  res.status(400).json({ message });
};
module.exports = errorHandler;
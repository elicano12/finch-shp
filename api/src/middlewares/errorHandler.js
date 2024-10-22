const errorHandlerMiddleware = (err, req, res, next) => {
  console.error(err);

  if (
    err.name === 'SequelizeEmptyResultError' ||
    err.name === 'NotFoundError'
  ) {
    return res.status(404).json({ message: err.message });
  }

  if(err.name === 'SequelizeUniqueConstraintError'){
    return res.status(400).json({ message: 'Este recurso ya existe en la base de datos' });

  }

  res.status(err.status || 500).json({
    message: err.message || 'An error occurred in the server',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = errorHandlerMiddleware;
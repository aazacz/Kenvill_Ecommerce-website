

const cacheControlMiddleware = (req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    next();
  };
  
  module.exports = cacheControlMiddleware;
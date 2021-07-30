const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  console.log(method, url);
  console.log("Logger Middleware Called");
  //res.end();
  next();
};

module.exports = logger;

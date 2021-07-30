const authorize = (req, res, next) => {
  console.log(req.query);
  console.log("Authorize Middleware Called");

  const { user } = req.query;
  if (user === "aptech") {
    req.user = { name: "aptech", id: 1 };
    next();
  } else {
    res.status(401).send("Un-anthorized");
  }
};

module.exports = authorize;

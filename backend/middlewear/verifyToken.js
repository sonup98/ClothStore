const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.token || req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(403).json("No token provided");

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(401).json("Invalid token");

    req.user = user;
    next();
  });
};

const verifyAdmin = (req, res, next) => {
  if (req.user?.isAdmin) return next();
  return res.status(403).json("Admin access required");
};

// ✅ Correct export
module.exports = { verifyToken, verifyAdmin };

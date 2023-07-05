const jwt = require('jsonwebtoken');
const User = require('../models/user');

const requireLogin = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(400).json({ msg: "Invalid Authorization" });

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!decoded) return res.status(400).json({ msg: "Invalid Authorization" });

    const user = await User.findOne({ _id: decoded.id });
    if (!user) return res.status(400).json({ msg: "User not found" });

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ msg: "Token expired. Please login again" });
    }
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = requireLogin;

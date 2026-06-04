const jwt = require("jsonwebtoken");

require("dotenv").config();

const authMiddleware = (req, res, next) => {

  try {

    const token = req.header("Authorization");

    if (!token) {

      return res.status(401).json({
        message: "No Token Provided",
      });

    }

    const actualToken = token.split(" ")[1];

    const verified = jwt.verify(
      actualToken,
      process.env.JWT_SECRET
    );

    req.user = verified;

    next();

  } catch (error) {

    console.log(error);

    res.status(401).json({
      message: "Invalid Token",
    });

  }

};

module.exports = authMiddleware;
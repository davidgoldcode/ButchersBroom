const express = require("express");
const db = require("./user-model.js");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../api/config.js");
const { isValid } = require("../users/users-service.js");

// login
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (isValid(req.body)) {
    dbGetBy({ username })
      .then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = getJwt(user);

          res.status(200).json({ message: "welcome to our api", token });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message:
        "please provide username & password. Password should be alphanumeric.",
    });
  }
});

// register
router.post("/register", (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = Number(process.env.HASH_ROUNDS) || 6;
    const hash = bcryptjs.hashSync(credentials.password, rounds);
    credentials.password = hash;
    db.add(credentials)
      .then((user) => {
        res.status(201).json({ data: user });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  } else {
    res.status(400).json({
      message:
        "please provide username & password. Password should be alphanumeric.",
    });
  }
});

// logout & destroy session ??

function getJwt(user) {
  const payload = {
    username: user.username,
    role: user.role,
  };

  const jwtOptions = {
    expiresIn: "8h",
  };

  return jwt.sign(payload, config.jwtSecret, jwtOptions);
}

module.exports = router;

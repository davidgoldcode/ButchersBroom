const express = require("express");
const db = require("./user-model.js");
const router = express.Router();
const bcryptjs = require("bcryptjs");

// get all users
router.get("/", (req, res) => {
  db.getAll()
    .then((users) => {
      res.status(200).json({ data: users });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// logout & destroy session
router.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({
          message: "Could not log out at this time. Please try again later.",
        });
      } else {
        res.status(204).end();
      }
    });
  } else {
    res.status(204).end();
  }
});

// get user by id
router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.getById(id)
    .then((user) => {
      if (user) {
        res.json({ user });
      } else {
        res.status(404).json({ message: "user not found. Check id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// login
router.post("/login", (req, res) => {
  const credentials = req.body;

  db.getBy({ username: credentials.username })
    .then((users) => {
      const user = users[0];
      if (user && bcryptjs.compareSync(credentials.password, user.password)) {
        req.session.username = user.username;
        res
          .status(200)
          .json({ message: "welcome", username: req.body.username });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// register
router.post("/register", (req, res) => {
  const credentials = req.body;
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
});

// edit user info
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db.edit(id, changes)
    .then((user) => {
      if (user) {
        res.status(200).json({ user });
      } else {
        res.status(404).json({ message: "Could not find user. Check id. " });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// delete user
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.remove(id)
    .then((user) => {
      if (user) {
        res.status(200).json({ removed: user });
      } else {
        res.status(404).json({ message: "Could not find user. Check id. " });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;

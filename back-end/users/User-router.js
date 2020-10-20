const express = require("express");
const db = require("../users/user-model.js");
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

// edit user info
router.put("/user/:id", (req, res) => {
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
router.delete("/user/:id", (req, res) => {
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

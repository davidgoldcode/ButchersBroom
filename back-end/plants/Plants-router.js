const express = require("express");
const db = require("./plants-model.js");
const router = express.Router();
const bcryptjs = require("bcryptjs");

// get all plants
router.get("/", (req, res) => {
  db.getAll()
    .then((plants) => {
      res.status(200).json({ data: plants });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// get plant by id
router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.getById(id)
    .then((plant) => {
      if (plant) {
        res.json({ plant });
      } else {
        res.status(404).json({ message: "plant not found. Check id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// edit plant info
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db.edit(id, changes)
    .then((plant) => {
      if (plant) {
        res.status(200).json({ plant });
      } else {
        res.status(404).json({ message: "Could not find plant. Check id. " });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// delete plant
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  db.remove(id)
    .then((plant) => {
      if (plant) {
        res.status(200).json({ removed: plant });
      } else {
        res.status(404).json({ message: "Could not find plant. Check id. " });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;

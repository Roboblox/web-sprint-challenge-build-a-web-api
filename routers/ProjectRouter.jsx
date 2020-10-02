const express = require("express");
const db = require("../data/helpers/projectModel");
const router = express.Router();

const express = require("express");
const db = require("../data/helpers/projectModel");
const router = express.Router();

router.get("/", (req, res) => {
  db.get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json("cant retrieve projects", err);
    });
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.get(id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch((err) => {
      res.status(500).json("cant retrieve project", err);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.remove(id)
    .then((num) => {
      res.status(200).json({ message: `successfuly deleted, ${num}` });
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: `could not delete project`, err });
    });
});

module.exports = router;

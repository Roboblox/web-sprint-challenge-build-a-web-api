const express = require("express");
const db = require("../data/helpers/actionModel");
const projectDb = require("../data/helpers/projectModel");
const router = express.Router();

router.get("/", (req, res) => {
  db.get()
    .then((actions) => {
      res.json(actions);
    })
    .catch((err) => {
      res.status(500).json("cant retrieve actions");
    });
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.get(id)
    .then((actions) => {
      res.json(actions);
    })
    .catch((err) => {
      res.status(500).json("cant retrieve actions", err);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.remove(id)
    .then((num) => {
      res.status(200).json("successfuly deleted");
    })
    .catch((err) => {
      res.status(500).json("could not delete project");
    });
});

router.post("/", validateProjectId(), (req, res) => {
  db.insert(req.body)
    .then((action) => {
      res.json(action);
    })
    .catch((err) => {
      res.status(500).json("Could not process new action");
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  if (body.notes && body.description && body.project_id) {
    db.update(id, body)
      .then((updateRes) => {
        updateRes !== null
          ? res.status(200).json("Successfully Updated")
          : res.status(400).json("Could not update user");
      })
      .catch((err) => {
        res.status(500).json("unable to process update");
      });
  } else res.status(400).json("Please Provide Name, Description, Project ID");
});

module.exports = router;

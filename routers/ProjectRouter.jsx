const express = require("express");
const db = require("../data/helpers/projectModel");
const router = express.Router();

router.get("/", (req, res) => {
  db.get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(() => {
      res.status(500).json("cant retrieve projects");
    });
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  db.get(id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch(() => {
      res.status(500).json("cant retrieve project", err);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.remove(id)
    .then(() => {
      res.status(200).json("successfuly deleted");
    })
    .catch(() => {
      res.status(500).json("could not delete project");
    });
});
router.post("/", (req, res) => {
  db.insert(req.body)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(() => {
      res.status(500).json("Could not process new project");
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  if (body.name && body.description) {
    db.update(id, body)
      .then((updateRes) => {
        updateRes !== null
          ? res.status(200).json("Successfully Updated")
          : res.status(400).json("Could not update user");
      })
      .catch(() => {
        res.status(500).json("unable to process update");
      });
  } else res.status(400).json("Please Provide Name and description");
});

module.exports = router;

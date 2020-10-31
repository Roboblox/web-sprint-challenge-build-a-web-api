const express = require('express');

const actions = require("../data/helpers/actionModel"); // USE LATER

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req) 
    actions.get()
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      // log error to database
      console.log(error);
      res.status(500).json(
          { error: "The projects could not be retrieved." }
      );
    });
  });
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    actions.get(id)
    .then(action => {
      res.status(200).json(action)
    })
    .catch(err => {
      res.status(500).json('cannot retrieve data', err)
    })
  });
  router.post('/', (req, res) => {
    actions.insert(req.body)
    .then(user =>{
      res.status(200).json(user)
    })
    .catch(err =>{
      res.status(500).json({message: "Could not make new user", err})
    })
  });
  router.delete('/:id', (req, res) => {
    const id = req.params.id
    projects.remove(id)
      .then(pId => {
        res.status(200).json({ message: `successfuly deleted action with id, ${id}`})
      })
      .catch(err => {
        res.status(500).json({ errorMessage: `could not delete action`, err })
      })
  });
  router.put('/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    if (!body.name || !body.description) {
      res.status(400).json({ errorMessage: "Please Provide Name and description" })
    } else {
      projects.update(id, body)
      .then(update => {
        if(update !== null){
          res.status(200).json({ message: `Action with id ${id} has been updated.` })
        } else {
          res.status(400).json({ message: "Could not update action" })
        }
      })
      .catch(err => {
        res.status(500).json({ errorMessage: "unable to process update", err })
      })
    }
      });
  module.exports = router;
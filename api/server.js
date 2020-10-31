const express = require('express');
const projectsRouter = require('../routes/projects-router');
const actionsRouter = require('../routes/actions-router');

const server = express();
// are where we configure the app/server
server.use(express.json()); // gives Express the ability to parse the req.body
server.use('/api/projects', projectsRouter);
// server.use('/api/actions', actionsRouter);

  
  module.exports = server;
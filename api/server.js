const express = require('express');
const projectsRouter = require('../projects/projects-router');
const projectsRouter = require('../actionss/actions-router');

const server = express();

// are where we configure the app/server
server.use(express.json()); // gives Express the ability to parse the req.body
server.use(postsRouter)
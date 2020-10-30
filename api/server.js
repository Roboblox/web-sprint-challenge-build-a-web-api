const express = require('express');
const postsRouter = require('../posts/posts-router')

const server = express();

// are where we configure the app/server
server.use(express.json()); // gives Express the ability to parse the req.body
server.use(postsRouter)
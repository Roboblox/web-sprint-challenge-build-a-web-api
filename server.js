const express = require("express");
const helmet = require("helmet");
const server = express();
const projectRouter = require("./Routers/Projects");
const actionsRouter = require("./Routers/actions");

//global Middleware
server.use(express.json());
server.use(helmet());
server.use("/api/projects", projectRouter);
server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => {
  res.send("Its Working!");
});

module.exports = server;

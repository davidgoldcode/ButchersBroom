const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

const connection = require("../database/connection.js");
const PlantsRouter = require("../plants/Plants-router.js");
const UserRouter = require("./users/User-router.js");

const server = express();

const sessionConfiguration = {
  name: "Butchers Broom Cookie",
  secret: process.env.SESSION_SECRET || "Our secret!",
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 10, // expires after 10 mins
    secure: process.env.SECURE_COOKIES || false,
  },
  resave: false,
  saveUninitialized: true,
  store: new KnexSessionStore({
    knex: connection,
    tablename: "sessions",
    sidfieldname: "sid",
    createtable: true,
    clearInterval: 1000 * 60 * 60,
  }),
};

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfiguration));

server.use("/api/plants", PlantsRouter);
server.use("/api/users", UserRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;

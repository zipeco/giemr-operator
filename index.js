const express = require("express");
const bodyParser = require("body-parser");

const instanceRoute = require("./src/routes/instance");

const server = express();

server.use(bodyParser.json({ limit: "20mb" }));
server.use(
  bodyParser.urlencoded({
    limit: "20mb",
    parameterLimit: 10000,
    extended: true,
  })
);
server.use(bodyParser.text({ limit: "20mb" }));

server.use("/", instanceRoute);

server.listen(process.env.PORT || 9000, function () {
  console.info("program running");
});

const express = require("express");
const router = express.Router();
const instanceController = require("../controller/instance");

router.get("/instances", instanceController.getInstances);

module.exports = router;

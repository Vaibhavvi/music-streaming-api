const express = require("express");
const musicController = require("../controllers/music.controller");

const router = express.Router();

router.post("/create" , musicController.createMusic);


module.exports = router;
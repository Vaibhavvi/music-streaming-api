const express = require("express");
const musicController = require("../controllers/music.controller");

const router = express.Router();

router.post("/create" , musicController.createMusic);

router.post("/create/album", musicController.artistAlbum);

router.get("/", musicController.getMusic);

router.get("/album/", musicController.getAlbum);




module.exports = router;
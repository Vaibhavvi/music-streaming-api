require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes")
const musicRoutes = require("./routes/music.routes");
const multer = require("multer");


const app = express();


app.use(express.json());
app.use(cookieParser());


const upload = multer({
    storage : multer.memoryStorage()
})


// Create Register API
app.use("/auth/api",authRoutes);

//Create Music API
app.use("/music/api",upload.single("music"),musicRoutes);


app.get("/", (req , res) => {
    res.send("Welcome to the Music Streaming API");
})

module.exports = app;
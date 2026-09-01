const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes")


const app = express();


app.use(express.json());
app.use(cookieParser());

// Create Register API
app.use("/auth/api",authRoutes);

app.get("/", (req , res) => {
    res.send("Welcome to the Music Streaming API");
})

module.exports = app;
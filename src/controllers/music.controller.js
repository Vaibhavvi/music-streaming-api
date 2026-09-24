const musicModel = require("../models/music.model");
const jwt = require("jsonwebtoken");
const uploadFile = require("../services/storage.service");

async function createMusic(req, res) {
    const token = req.cookies?.token;

    if (!token) {
        return res.status(401).json({
            message: "Token not found"
        });
    }

    let decode;

    // Verify token using JWT Verification
    try {
        decode = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded JWT:", decode);
    } catch (err) {
        console.error("JWT ERROR:", err);

        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }

    // Chcek which user are created music (user or artist)
    if (decode.role !== "artist") {
        return res.status(403).json({
            message: "You don't have permission to create music"
        });
    }

    try {
        const { title } = req.body;
        const file = req.file;

        // Check File uploaded or not 
        if (!file) {
            return res.status(400).json({
                message: "Audio file is required"
            });
        }

        // Upload musicFile to ImageKit
        const result = await uploadFile(
            file.buffer.toString("base64")
        );

        console.log("ImageKit result:", result);

        // Use to save in Database
        const music = await musicModel.create({
            url: result.url,
            title,
            artist: decode.id
        });

        // Music Created Sucessfully (When artist upload music and sucessfully uploaded)
        return res.status(201).json({
            message: "Music Created Successfully",
            music: {
                id: music._id,
                url: music.url,
                title: music.title,
                artist: music.artist
            }
        });

    } catch (err) {
        console.error("CREATE MUSIC ERROR:", err);

        return res.status(500).json({
            message: "Failed to create music",
            error: err.message
        });
    }
}

module.exports = {createMusic};
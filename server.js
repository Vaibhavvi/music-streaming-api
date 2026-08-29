const dotenv = require("dotenv");
const app = require("./src/app");
const connectDB = require("./db/db");

dotenv.config();

// MongoDB connection Call
connectDB();

// Used to Running Server 
app.listen(3000,() => {
    console.log("Server running on port 3000");
})
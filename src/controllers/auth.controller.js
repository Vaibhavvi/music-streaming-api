const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.model");

// Register user function
async function registerUser(req, res) {
    try {
        // Get user details from request body
        const { username, email, password , role="user" } = req.body;

        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({
                message: "Username, email and password are required"
            });
        }

        // Check if user already exists
        const isUserAlreadyExist = await userModel.findOne({
            $or: [
                { username },
                { email }
            ]
        });

        // If user already exists
        if (isUserAlreadyExist) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        // Hash password before saving
        const hash = await bcrypt.hash(password, 10);

        // Create new user
        const user = await userModel.create({
            username,
            email,
            password: hash,
            role
        });

        // Generate JWT token
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET
        );

        // Store JWT in cookie
        res.cookie("token", token);

        // Send response
        return res.status(201).json({
            message: "User created successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}


// Login user function
async function loginUser(req, res) {
    try {
        // Destructuring the request body to get user details
        const { username, email, password } = req.body;

        // Check if user exists or not
        const ifUserValid = await userModel.findOne({
            $or: [
                { username },
                { email }
            ]
        });

        // If user does not exist
        if (!ifUserValid) {
            return res.status(401).json({
                message: "Invalid username/email or password"
            });
        }

        // Compare password with hashed password
        const isPasswordValid = await bcrypt.compare(
            password,
            ifUserValid.password
        );

        // If password is invalid
        if (!isPasswordValid) {
            return res.status(401).json({
                message: "Invalid username/email or password"
            });
        }

        // Generate JWT token
        jwt.sign(
            {
                id: ifUserValid._id,
                role: ifUserValid.role
            },
            process.env.JWT_SECRET,
            (err, token) => {
                if (err) {
                    return res.status(500).json({
                        message: "Internal server error"
                    });
                }

                res.cookie("token", token);

                return res.status(200).json({
                    message: "User logged in successfully",
                    user: {
                        id: ifUserValid._id,
                        username: ifUserValid.username,
                        email: ifUserValid.email,
                        role: ifUserValid.role
                    }
                });
            }
        );

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}



module.exports = {registerUser , loginUser};
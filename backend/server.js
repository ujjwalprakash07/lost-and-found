const { Pool } = require("pg");

require("dotenv").config();
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "lost_and_found",
    password: process.env.DB_PASSWORD,
    port: 5432
});

pool.query("SELECT 1", (error, result) => {
    if (error) {
        console.log("Registration failed");
        console.log(error);
    }
    else {
        console.log(result.rows);
        console.log("Registration Successful");
    }
});




const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const bcrypt = require("bcrypt");



const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post("/register", async (req, res) => {

    const { username, email, password } = req.body;


    if (username === "") {
        return res.status(400).json({
            message: "Username cannot be empty"
        });
    }

    if (email === "") {
        return res.status(400).json({
            message: "Email cannot be empty"
        });
    }

    if (!emailPattern.test(email)) {
        return res.status(400).json({
            message: "Email pattern is wrong"
        });
    }

    if (password === "") {
        return res.status(400).json({
            message: "Password cannot be empty"
        });
    }

    if (password.length < 8) {
        return res.status(400).json({
            message: "Password must be at least 8 characters"
        });
    }


    const hashedpassword = await bcrypt.hash(password, 10);

    pool.query(
        "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)",
        [username, email, hashedpassword],
        (error, result) => {
            if (error) {
                if (error.code === "23505") {
                    console.log("duplicate data");
                    return res.status(409).json({
                        message: "Username or email already exists"
                    });
                }
                else {
                    console.log("Registration failed");
                    console.log(error);
                }
            }
            else {
                console.log(result.rows);
                res.status(201).json({
                    message: "Registration successful"
                });
                console.log("Registraton Successful");

            }
        }
    );
})



app.listen(3000);
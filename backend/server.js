const express = require("express");
const app = express();

app.use(express.json());

const cors= require("cors");
app.use(cors());

const bcrypt = require("bcrypt");



const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

app.post("/register",async(req,res) => {
    
    const {username, email, password} = req.body;
    bcrypt.hash(password,10);
    const hashedpassword = await bcrypt.hash(password,10);
    if(username === ""){
        return res.status(400).json({
        message: "Username cannot be empty"
        });
    }

    if (email === "") {
        return res.status(400).json({
            message: "Email cannot be empty"
        });
    }

    if(!emailPattern.test(email)){
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
    

    console.log(req.body);
    res.send("Registration data received");
    console.log(hashedpassword)
})



app.listen(3000);
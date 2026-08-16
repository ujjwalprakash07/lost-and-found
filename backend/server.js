const express = require("express");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const app = express();
app.use(express.json());

app.post("/register",(req,res) => {
    const {username, email, password} = req.body;
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
})



app.listen(3000);
const express = require("express");

const app = express();
app.use(express.json());

app.post("/register",(req,res) => {
    console.log(req.body);
    res.send("Registration data received");
})



app.listen(3000);
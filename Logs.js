const express = require("express");
const app = express();


function authMiddlewar(req , res, next){
    //const isLoggedIn = true;
    const user = req.query.user;
    const isLoggedIn = user === "admin";

    if(isLoggedIn){
        next();
    }else{
        res.status(401).send("Not authorized");
    }
};

app.get("/dashboard" ,authMiddlewar, function(req, res){
    res.json({
        msg : "Your Welcome to Dashboard"
    });
})

app.listen(3000);
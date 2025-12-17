const express = require ("express");
const app = express();

function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if(age >= 14){
        next();
    }else{
        res.json({
            msg: "Sorry you are not of age yet",
        })
    }
}

app.get("/ride2", isOldEnoughMiddleware, function(req, res){
        res.json({
        msg: "You have sucessfully riden the ride 2"
    }) 
})

app.get("/ride1",isOldEnoughMiddleware, function(req, res){
        res.json({
        msg: "You have sucessfully riden the ride 1"
    })
})

app.listen(3000);


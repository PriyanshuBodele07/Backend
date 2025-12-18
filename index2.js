const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.post("/sum", function(req, res){
    const a = req.body.a;
    const b = req.body.b;

    res.json({
        ans : a + b
    });
});
app.listen(3000);

//for post we use external library like express.json() or 
//body-parser to post json data in postman body which handles post request
// if we dont use express.json() Middleware req.body shows undifined
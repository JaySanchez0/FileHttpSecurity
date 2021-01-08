const express = require("express");
const fs = require("fs");
const server = express();

server.get("/",(req,res)=>{
    res.type("text/html");
    const stream = fs.readFileSync("static/index.html");
    res.send(stream);
})

server.get("/test",(req,res)=>{
    if(req.headers.authorization==null){
        res.status(404);
        res.send();
        return;
    }
    const f = fs.readFileSync("static/test.pdf");
    res.set("Content-Type","application/pdf");
    res.send(f);
});

server.get("/fail",(req,res)=>{
    if(req.headers.authorization==null){
        res.status(404);
        res.send();
        return;
    }
    const f = fs.readFileSync("static/fail.PNG");
    res.set("Content-Type","image/png");
    res.send(f);
});

server.listen(80,"0.0.0.0",()=>console.log("Listen"));
const { Router } = require("express");

const newMessages = Router();

newMessages.get("/",(req,res)=>{
    res.send("Message form under construction");
});

module.exports = newMessages;
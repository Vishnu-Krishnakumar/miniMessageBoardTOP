const { Router } = require("express");

const allMessages = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
  allMessages.get("/",(req , res)=> {
    res.render("index", { title: "Mini Messageboard", messages: messages });
  })
  allMessages.get("/new",(req,res)=>{
    res.render("form");
  });

  allMessages.post("/new",(req,res)=>{
    messageText = req.body;
    console.log(req.body);
    messages.push({text: messageText.message, user: messageText.userName, added: new Date()});
    res.redirect("/");
  })

  allMessages.post("/details",(req,res)=>{
    console.log(req);
    let details = {text:req.body.text, user:req.body.user, added:req.body.added};
    console.log(details);
    res.render("messageDetails",{ details: details});
  })
  module.exports = allMessages;
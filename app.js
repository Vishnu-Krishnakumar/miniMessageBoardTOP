const express = require("express");
const path = require("node:path");
const allMessages = require("./routes/allMessages")
const newMessages = require("./routes/newMessages")
const app = express();
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/new", newMessages)
app.use("/", allMessages)
// app.get("/", (req, res) => {
//     res.render("index",{ title: "Mini Messageboard", allMessages });
// });

app.listen(PORT, () => {
  
});
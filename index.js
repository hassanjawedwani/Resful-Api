const express = require('express');
const app = express();
const port = 8080;
const path = require("path");
app.listen(port, () => {
  console.log("Server is running...");
})

app.use(express.urlencoded({extended: true}));
  
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")));


const posts = [
  {
    username: "hassan", 
    content: "blah blah blah"
  },
  {
    username: "numan",
    content: "blah blah blah blah blah"
  },
  {
    username: "sohail",
    content: "blah blah blah blah blah blah blah"
  },
]


app.get("/posts", (req, res) => {
  res.render("index", {posts});
});

app.get("/posts/new", (req, res) => {
  res.render("new");
})

app.post("/posts", (req, res) => {
  // res.send("New Post Created Successfully");
  posts.push(req.body);
  res.redirect("/posts");

})
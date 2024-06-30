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


const {v4: uuidv4 } = require('uuid');

const posts = [
  {
    id: uuidv4(),
    username: "hassan", 
    content: "blah blah blah"
  },
  {
    id: uuidv4(),
    username: "numan",
    content: "blah blah blah blah blah"
  },
  {
    id: uuidv4(),
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
  const {username, content} = req.body;
  const id = uuidv4();

  posts.push({id, username, content});

  res.redirect("/posts");

})

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find(post => post.id === id);
  console.log(post);
  res.render("show.ejs", {post})
})
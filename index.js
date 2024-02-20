import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({ extended: true }));

//
let blogPosts = [
  {
    title: "why do we sleep",
    content: "to have dreams. to have dreams. to have dreams. to have dreams"
  }, 

  {
    title: "when you are sad",
    content: "loooooooook aaaaaat the sky"
  }, 

  {
    title: "when someone bothers you",
    content: "bother someone. bother someone. bother someone"
  }
]


app.use(express.static("public"));

app.get("/", (req, res) => { 

  res.render("main.ejs");

  }); 

app.get("/view-posts", (req, res) => { 

  res.render("view-posts.ejs", {blogPosts: blogPosts});

  }); 

app.get("/add-posts", (req, res) => { 

  res.render("add-posts.ejs");

  }); 

app.post("/add-posts", (req, res) => {
  const {title, blogContent } = req.body;
  blogPosts.push({ title: title, content: blogContent});
  res.redirect("/view-posts");

})


app.listen(port, () => { 

console.log(`Listening on port ${port}`); 

}); 
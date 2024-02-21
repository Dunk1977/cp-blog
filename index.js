import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;
app.use(bodyParser.urlencoded({ extended: true }));

//
let blogPosts = []


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
  const { title, blogContent } = req.body;

  //find max value in blogPosts
  let max = 0;
  for(let i=0; i < blogPosts.length; i++) {
    if (blogPosts[i].postId > max) {
      max = blogPosts[i].postId;
    }
  }
  const newId = max + 1;
  blogPosts.push({ postId: newId, title: title, blogContent: blogContent});

  res.render("view-posts.ejs", { blogPosts: blogPosts });
})


app.get("/edit-posts", (req, res) => { 
  const { postId, title, blogContent } = req.body;
  const index = blogPosts.findIndex(post => post.postId === postId);
  console.log("open post " + postId);

  if (index !== -1) {
    res.render("edit-posts.ejs", { blogPosts: blogPosts[index] });
  }

  }); 

app.post("/edit-posts", (req, res) => { 

  const { postId, title, blogContent } = req.body;
  console.log("editing post " + postId);
  const index = blogPosts.findIndex(post => post.postId === postId);
    if (index !== -1) {
      // provide code to edit / update the values in this position of the array. 
      res.render("view-posts.ejs", { blogPosts: blogPosts[index] });
    }
  }); 

app.listen(port, () => { 

console.log(`Listening on port ${port}`); 

}); 
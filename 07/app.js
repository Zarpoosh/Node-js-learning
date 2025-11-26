const express = require("express");

// express app

const app = express();

// register view engin
app.set("view engine", "ejs");
// app.set("views", "minicode");

// listen for requesr
app.listen(3000);

app.get("/", (req, res) => {
  // res.sendFile("./view/index.html", { root: __dirname });
  res.render("index");
});

app.get("/about", (req, res) => {
  // res.sendFile("./view/about.html", { root: __dirname });
  res.render("about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create");
});

// redirect
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

// 404 page  : دقیقا مثل
app.use((req, res) => {
  // res.sendFile("./view/404.html", { root: __dirname });
  res.status(404).render("404");
});

const express = require("express");

// express app

const app = express();

// register view engin
app.set("view engine", "ejs");
// app.set("views", "minicode");

// listen for requesr
app.listen(3000);

app.use((req, res, next) => {
  console.log("--------------------------------------");
  console.log("new req was made :");
  console.log("host:", req.host);
  console.log("path", req.path);
  console.log("method : ", req.method);
  next();
});

app.get("/", (req, res) => {
  // res.sendFile("./view/index.html", { root: __dirname });

  const blogs = [
    {
      title: "minoo in jurnay",
      snippet: " Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "romina in jurnay",
      snippet: " Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "kimia in jurnay",
      snippet: " Lorem ipsum dolor sit amet consectetur",
    },
  ];

  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  // res.sendFile("./view/about.html", { root: __dirname });
  res.render("about", { title: "about" });
});

app.use((req, res, next) => {
  console.log("-----------------minicode---------------------");
  next(); // با استفاده از این متد میتونیم میدل ورهامونو کنترل کنیم
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "create" });
});

// redirect
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

// 404 page  : دقیقا مثل
// برا درست کردن میدلور کاستوم
app.use((req, res) => {
  // res.sendFile("./view/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});

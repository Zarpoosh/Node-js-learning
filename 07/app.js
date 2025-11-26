const express = require("express");

// express app

const app = express();
// listen for requesr
app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./view/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./view/about.html", { root: __dirname });
});

// redirect
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page  : دقیقا مثل 
app.use((req, res) => {
  res.sendFile("./view/404.html", { root: __dirname });
});

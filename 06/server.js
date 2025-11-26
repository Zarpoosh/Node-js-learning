const http = require("http");
const fs = require("fs");
const _ = require("lodash");
// const { url } = require('inspector')

// req=با ساتفاده از این میتونیم به اون ریکوست دسترسی داشته باشیم  که دوتا لز مهم ترین هاش get , post هستن
const server = http.createServer((req, res) => {
  console.log("request made");
  // console.log(req.url, req.method)         // به جا اینکه اینا رو تو کنسول نشون بدیم
  const num=_.random(0,20)
  console.log(num);
  res.setHeader("Cntent-Type", "text/html");

  // res.write("<h1>hello minicode</h1>")
  // res.write("<p>hello world</p>")
  // res.write('<head><link rel="stylesheet" href="#"></head>')

  let path = "./view/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) console.log(err);
    else {
      //  res.write(data)  // اگه فقط یه بار داری از اینمخط استفاده میکنی میتونی دیتا رو پایین بنویسی
      res.end(data);
    }
  });

  // res.write()
  // res.end
});

server.listen(3000, "localhost", () => {
  console.log("listening for req on port 3000 :)");
});

// localhost = 127.0.0.1 = own computer
// port number = channel = gate = portcd

const http = require("http");
const fs = require("fs");
const _ = require("lodash");

// req=با ساتفاده از این میتونیم به اون ریکوست دسترسی داشته باشیم  که دوتا لز مهم ترین هاش get , post هستن
const server = http.createServer((req, res) => {
  console.log("request made");
  const num = _.random(0, 20);
  console.log(num);
  res.setHeader("Cntent-Type", "text/html");

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
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for req on port 3000 :)");
});

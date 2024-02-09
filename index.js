const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const path = req.url;
  if (path === "/") {
    fs.readFile("index.html", "utf-8", (err, data) => {
      res.write(data);
      return res.end();
    });
  }

  if (path === "/about") {
    {
      fs.readFile("about.html", "utf-8", (err, data) => {
        res.write(data);
        return res.end();
      });
    }
  }

  if (path === "/about") {
    {
      fs.readFile("about.html", "utf-8", (err, data) => {
        res.write(data);
        return res.end();
      });
    }
  }

  if (path === "/contact-me") {
    {
      fs.readFile("contact-me.html", "utf-8", (err, data) => {
        res.write(data);
        return res.end();
      });
    }
  }

  fs.readFile("404.html", "utf-8", (err, data) => {
    res.write(data);

    return res.end();
  });
});


server.listen(8080);

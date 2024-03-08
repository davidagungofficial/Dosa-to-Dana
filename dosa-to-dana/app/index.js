// index.js

const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const server = http.createServer((req, res) => {
  const urlPath = url.parse(req.url).pathname;

  if (urlPath === "/") {
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (urlPath === "/calculate") {
    const query = url.parse(req.url, true).query;
    const number = parseFloat(query.number) || 0;
    const result = (number * 14).toLocaleString();

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(result);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Nomor Terkonfirmasi");
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}/`);
});

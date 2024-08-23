const http = require("http");
const fs = require("fs");
const server = http.createServer(async (req, res) => {
  // set the response headers to handle plain text
  res.setHeader("Content-Type", "text/plain");

  //   route handling
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("This is the Home page");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("This is the About page");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end("This is the Contact page");
  } else if (req.url === "/file-write") {
    res.statusCode = 200;
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (err) {
        res.statusCode = 500;
      } else {
        res.statusCode = 200;
        res.end("File write success");
      }
    });
  } else {
    // Handle 404 Not Found
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});
const port = 5500;
server.listen(port, async () => {
  console.log("Server is listening on port " + port);
});

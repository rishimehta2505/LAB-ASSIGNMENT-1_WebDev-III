// server.js
// A basic HTTP server using the core http module

const http = require("http");
const log = require("./modules/logger");

const PORT = 3000;

const server = http.createServer((req, res) => {
  log(`Request received for: ${req.url}`);

  res.setHeader("Content-Type", "text/plain");

  if (req.url === "/") {
    res.statusCode = 200;
    res.end("Welcome to Node Server");
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end("About Page");
  } else if (req.url === "/contact") {
    res.statusCode = 200;
    res.end("Contact Page");
  } else {
    res.statusCode = 404;
    res.end("404 Error: Page Not Found");
  }
});

server.listen(PORT, () => {
  log(`Server is running at http://localhost:${PORT}/`);
});

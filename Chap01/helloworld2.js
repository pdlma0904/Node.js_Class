var http = require("http");

http
  .createServer(function (request, respense) {
    respense.writeHead(200, { "Content-Type": "text/html" });
    respense.end("<h1>Hello World</h1>");
  })
  .listen(3000);

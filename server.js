// import http module
const http = require('http');

// configure HTTP server to respond with simple message to all requests
// start by making our server:
const server = http.createServer((request, response) => {
    // build response that we're sending back to client (request coming from client)
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello this is our first node.js application");
    response.end();
})

// Listen on port 8080 on localhost
const port = 8080;
server.listen(port);

// display a message on the terminal
console.log("Server running at port=" + port);
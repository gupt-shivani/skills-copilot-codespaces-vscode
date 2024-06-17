// Create web server
// Create a web server that listens to incoming requests on port 3000
// When a request is received, the server should respond with a JSON object that represents the comments data
// The server should respond with a status code of 200

const http = require('http');

const comments = [
  { username: 'Alice', comment: 'I am so happy' },
  { username: 'Bob', comment: 'This is great!' },
];

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(comments));
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
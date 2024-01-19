import http from 'node:http';
import * as logger from '../logger/index.js';

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(port, hostname, () => {
  logger.http(`Server running at http://${hostname}:${port}/`);
});

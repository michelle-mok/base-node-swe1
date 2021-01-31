import { createServer } from 'http';
import { readFile } from 'fs';

const PORT = process.argv[2];

createServer((request, response) => {
  console.log('request url', request.url);
  if (request.method === 'GET') {
    const filePath = `.${request.url}`;

    readFile(filePath, 'utf8', (error, content) => {
      if (error) {
        response.writeHead(404, {});
        response.end('sorry, we couldn\'t find your file');
      }
      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end(content);
    });
  } else {
    response.writeHead(405, {});
    response.end('Method not allowed');
  }
}).listen(PORT);
console.log('listening on port');

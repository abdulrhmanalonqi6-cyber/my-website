const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('public/index.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('✅ السيرفر يعمل على http://localhost:3000');
});

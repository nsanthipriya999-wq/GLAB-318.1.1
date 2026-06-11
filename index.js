//const http=require('http');
import http from 'http';
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  switch(res.url)
  {
      case "/":
        res.write("Hello World");
        break;
      case "/test":
        res.write("Test");
        break;
      case  "/cat":
        res.write("http://cat.com/cat1");
        break;
      case "/dog":
        res.write("http://dog.com/dog1");
        break;
      default:
        res.statusCode=404;
        res.write("Error: 404 Not Found");
        break;
  }
  res.end('Hello World!\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
const http=require('http');
//import http from 'http';
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  switch(req.url)
  {
      case "/":
        res.statusCode=200;
        res.write('<h1 style="color: red">Hello World!</h1>');
        res.write('<p>I wonder what else we can send...</p>');
        break;
      case "/test":
        res.write(`<h1>My Test page</h1>`);
        break;
      case  "/cat":
        res.write(`<h1 style="color: blue"> Hi,I'm Timmy!</h1>`);
        res.write('<p>Welcome to my Home Page</p>');
        res.write(`<a href="http://cat.com/cat1">My web page</a>`);

        break;
      case "/dog":
        res.write(`<h1 style="color:brown"> Hi,I'm Tommy!</h1>`);
        res.write('<p>Welcome to my Home Page</p>');
        res.write(`<a href="http://dog.com/dog1">My web page</a>`);
        break;
      default:
        res.statusCode=404;
        res.write(`<h1>Error: 404 Not Found</h1>`);
        res.write(`<p>That route doesn't exist</p>`);

        break;
  }
  res.end();
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
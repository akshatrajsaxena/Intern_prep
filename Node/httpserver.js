const http = require('http');

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    console.log('request received');
    
    if (req.url === '/about') {
        res.statusCode = 202; // Set status code 202 for /about
        res.setHeader('Content-Type', 'text/plain');
        res.end('About page\n');
    } else if (req.url === '/') {
        res.statusCode = 200; // Set status code 200 for /
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    } else {
        res.statusCode = 404; // Set status code 404 for other routes
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not found\n');
    }
});

server.listen(port, () => { 
    console.log(`Server running at ${port}`);
});
var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200);
	res.end('Hello World!');
}).listen(80);
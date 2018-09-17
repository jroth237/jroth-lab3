var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (request, response) {
	response.writeHead(200, {
		'Content-Type': 'text/html',
		'Access-Control-Allow-Origin' : '*'
	});
	var q = url.parse(request.url, true);
	var filename = "." + q.pathname;
	fs.readFile(filename, function(err, data) {
		if (err){
			response.writeHead(404, {'Content-Type': 'text/html'});
			return response.end("404 Not Found");
		}
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(data);
		return response.end();
	});
}).listen(1337);
console.log("Server running on port 1337!");
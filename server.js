/*var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");
  response.end();
}).listen(8888);*/

var http = require("http");
var url = require("url");

function iniciar () {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Petición para " + pathname + " recibida.");
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write("<h2>Hola Mundo</h2>");
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Servidor Iniciado.");
}

exports.iniciar = iniciar;
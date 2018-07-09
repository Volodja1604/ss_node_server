var http = require('http');
var fs = require('fs');
var config=require('./config.js');
var port=config.port;
var hostname=config.hostname;

function server(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(server).listen(port,hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);

});
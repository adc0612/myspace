var http = require('http');
var fs = require('fs');
var url = require('url');
var app = http.createServer(function(request, response) {
    var _url = request.url;
    var querydata = url.parse(_url,true).query;
    console.log(querydata.id);
    if (_url == '/') {
        _url = '/index.html';
    }
    if (_url == '/favicon.ico') {
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    response.end(fs.readFileSync(querydata.id));

});
app.listen(3000);

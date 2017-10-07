var http = require('http');
var fs = require('fs');
var path = require('path');

require('zone.js/dist/zone-node');
require('reflect-metadata');
var renderModuleFactory = require('@angular/platform-server').renderModuleFactory;

var AppServerModuleNgFactory = require('../dist-server/main.bundle').AppServerModuleNgFactory;

// Load the index.html file.
var index = require('fs').readFileSync(path.join(__dirname, '..', 'dist', 'index.html'), 'utf8');

var server = http.createServer(function (request, response) {
    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';
    var extname = path.extname(filePath);

    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;      
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
    }

    fs.readFile(path.join(__dirname, '..', 'dist', filePath), function(error, content) {
        if (error || filePath.endsWith('index.html')) {
            // only to be worked, if server side rendering is required
            // renderModuleFactory(AppServerModuleNgFactory, {document: index, url: request.url}).then(html => {
            //     response.writeHead(200, { 'Content-Type': contentType });
            //     response.end(html, 'utf-8');
            // });
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(index, 'utf-8');
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
});

server.listen(80);

console.log("Server is running");
const http = require('http');
const fs = require('fs');
const fetch = require('node-fetch');
const Mustache = require('mustache');

const file = 'index.html.tmpl';


const hostname = '127.0.0.1';
const port = 3000;

// https://teamtreehouse.com/community/cant-get-the-css-to-load-in-the-nodejs-server
//function css(request, response) {
//  if (request.url === '/styles.css') {
//    response.writeHead(200, {'Content-type' : 'text/css'});
//    var fileContents = fs.readFileSync('./css/styles.css', {encoding: 'utf8'});
//    response.write(fileContents);
//  }
//} 

// https://stackoverflow.com/questions/8552446
var object_to_render = {
                "component-name": "Bar",
                "statuses": [
                    {"status-color": "status-green"},
                    {"status-color": "status-green"},
                    {"status-color": "status-yellow"},
                    {"status-color": "status-green"},
                    {"status-color": "status-green"},
                    {"status-color": "status-green"},
                    {"status-color": "status-red"},
                    {"status-color": "status-red"},
                    {"status-color": "status-green"},
                    {"status-color": "status-green"},
                    {"status-color": "status-green"},
                    {"status-color": "status-green"}
                ]
    };

var output = "";

fs.readFile(file, function (err, data) {
    if (err) throw err;
    output = Mustache.render(data.toString(), object_to_render);
});


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // https://stackoverflow.com/questions/12134554
  res.end(output);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

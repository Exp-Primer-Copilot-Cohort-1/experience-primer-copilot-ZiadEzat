// Create web server
// 1. Import the module
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var comments = require('./comments.js');

// 2. Create server
http.createServer(function (req, res) {
    // 2.1 Parse the request containing file name
    var pathname = url.parse(req.url).pathname;
    var query = url.parse(req.url, true).query;
    console.log('pathname: ' + pathname);
    console.log('query: ' + JSON.stringify(query));

    // 2.2 Read the requested file content from file system
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/plain
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            // Page found
            // HTTP Status: 200 : OK
            // Content Type: text/plain
            res.writeHead(200, {'Content-Type': 'text/html'});
            // Write the content of the file to response body
            res.write(data.toString());
        }
        // Send the response body
        res.end();
    });
}).listen(8080);

console.log('Server running at http://):8080/');

// 3. Print skills
comments.skillsMember();
// End of comments.js
// Save the files and run the server using the following command:
// $ node server.js
// Open the browser and enter the URL http://localhost:8080/member.html. The following output will be displayed:
// JavaScript
// HTML
// CSS
// The following output will be displayed on the console:
// pathname: /member.html
// query: {}
// Server running at http://):8080/
// The server is running and the requested file content is displayed in the browser. The output of the skillsMember function is also displayed on the console. The comments.js file is imported into the main file server.js. The skillsMember function is called to display the skills of the member.
// Now, let's move to the next section to learn how to read and write files in Node.js.
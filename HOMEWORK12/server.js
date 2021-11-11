const http = require('http');
const fs = require('fs');
const static = require('node-static');
const file = new static.Server('.');

let data = JSON.parse(fs.readFileSync('books.json'));

function accept(req, res) {

    if (req.url == '/books') {
        res.end(JSON.stringify(data));
    } else {
        file.serve(req, res);
    }

}

// ------ run -------
http.createServer(accept).listen(8080);
console.log("Server running at http://localhost:8080");
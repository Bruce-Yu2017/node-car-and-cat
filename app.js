var http = require("http")
var fs = require("fs")
var server = http.createServer(function(request, response) {
    console.log("client request URL: ", request.url);
    if(request.url === "/cars") {
        fs.readFile("./views/car.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/stylesheets/car.css'){
        fs.readFile('./stylesheets/car.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        })
    }
    else if(request.url === "/car.jpeg") {
        fs.readFile("./images/car.jpeg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpeg"});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/cats") {
        fs.readFile("./views/cat.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/cats.jpeg'){
        // notice we won't include the utf8 encoding
        fs.readFile('./images/cat.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/cars/new") {
        fs.readFile("./views/new.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        })
    }


    else {
        response.writeHead(404);
        response.end("File not found!");
    }
});
server.listen(7077);
console.log("Runing in localhost at port 7077");
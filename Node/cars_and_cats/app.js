var http = require ('http');
var fs = require ('fs');
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    if(request.url === '/'){
        // append views to direct into your views folder
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === "/cars"){
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cats'){
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars/new'){
        fs.readFile('views/new.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    //append your css folders to grab 'jpg' files
    else if (request.url === '/css/cars.css'){
        fs.readFile('stylesheets/cars.css', function (errors, contents){
            //instead of 'text/html' here you need 'text/css'
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/car1.jpg'){
        fs.readFile('images/car1.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/css/cats.css'){
        fs.readFile('stylesheets/cats.css', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/css'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/images/cat1.jpg'){
        fs.readFile('images/cat1.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else {
        response.end('file not found');
    }
});
server.listen(7077);
console.log('running in localhost @ port:7077');
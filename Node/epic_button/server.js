var express = require('express');
var app = express();
var port = 8800;

app.use (express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function(req,res) {
    res.render('index');
});

var server = app.listen(port, function(){
    console.log('listening:8800');
});
var io = require('socket.io').listen(server);
var count = 0;
io.sockets.on('connection',function(socket){
    console.log('client/socket connected');
    console.log('client/socket id is: ',socket.id);
    socket.emit('newuser', {count});
    socket.on('button_clicked', function(){
        count +=1;
        io.sockets.emit('count_add', {count});
    });
    socket.on('reset', function(){
        count = 0;
        io.sockets.emit('reset_count', {count});
    });
});
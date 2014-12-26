//Creamos los objetos
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var cont = 0;

app..listen(process.env.PORT || 5000)

//Le pasamos el indice a la aplicación
app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});

//Al conectar a la aplicación...
io.on('connection', function(socket){

//Conexión y desconexión de usuarios
cont++;
console.log('Usuario conectado');
console.log('Conectados:'+ cont);
socket.on('disconnect', function(){
console.log('Usuario desconectado');
cont--;
console.log('Conectados:'+ cont);
});

socket.on('chat message', function(msg){
//console.log(msg);
io.emit('chat message', msg);
});
});

/* LISTEN VIEJO
http.listen(3000, function(){
console.log('listening on *:3000');
});
*/


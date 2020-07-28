// Realiza o require do express, http, e socketio
var app = require('express')();
// passa o express para o http-server
var http = require('http').Server(app);
// passa o http-server par ao socketio
var io = require('socket.io')(http);

var database_model = require('./Models/database_model');

const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bd_dom_pedro_interview',
    multipleStatements: true
});

database_model.connect(function (err_connect) {

});

// cria uma rota para fornecer o arquivo index.html
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//Pesquisa todas as informações cadastradas no bd
app.get('/informacao', (req, res) => {
    mysqlConnection.query('SELECT * FROM informacao', (err, rows, fields) => {
        if (!err){
			//
				console.log(rows);
				res.send(rows);
			
			
		}
        else
            console.log(err);
    })
});

// sempre que o socketio receber uma conexão vai devoltar realizar o broadcast dela
io.on('connection', function(socket){
	console.log('Socket.ID: '+socket.id);
  socket.on('chat message', function(msg){
	  console.log('msg: '+msg.name);
	  console.log('msg: '+msg.email);
	  console.log('msg: '+msg.data_hora);
	  
	  database_model.addInformacao("", msg.name, msg.email, msg.data_hora, function (err, rows) {
		console.log('Cadastro de nova informação no BD!');
	});
	
	 mysqlConnection.query('SELECT * FROM informacao', (err, rows, fields) => {
        if (!err){
			//
				console.log(rows);
				//res.send(rows);
		}
        else
            console.log(err);
    });
	
	  
    io.emit('chat message', msg);
  });
});



// inicia o servidor na porta informada, no caso vamo iniciar na porta 3000
http.listen(3000, function(){
  console.log('Servidor rodando em: http://localhost:3000');
});
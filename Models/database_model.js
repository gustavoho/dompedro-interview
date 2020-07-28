function database_model() {

    this.version = '0.0.1';
    var db = null;
    var mysql = require('mysql');
    var config = {
        host : '127.0.0.1',
        user : 'root',
        passwoed : '',
        database : 'bd_dom_pedro_interview',
    }

    this.connect = function (callback){
        
        db = mysql.createConnection(config);
        db.connect(function (err) {
            
           if (err) 
		   {
            console.error('error connecting myslq :' + err);
            return;
           }
            
           console.log('Connected as database ' + config.database);
		   //verify();

            callback(err);
        });

    };
	
	//função para adicionar nova informação no bd_dom_pedro_interview
	this.addInformacao = function (id, name, email, createdAt) {
	//NULL, 'Sophia Cristiano de Oliveira', '27/07/2020 as 19:40
		db.query("INSERT INTO informacao (`id`, `name`, `email`,`createdAt`) VALUES (?,?,?,?)",[id, name, email, createdAt], function (err, data) {
		if (err) { console.error(err); }
				
				//callback(err, data);
			});

    };  
	

}
module.exports = new database_model;
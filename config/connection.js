const mysql = require('mysql');

var connection;

if (process.env.JAWDB_URL) {
    connection = mysql.createConnection(process.env.JAWDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'password',
        database: 'burgers_db'
    });
};

// Make connection with database
connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});
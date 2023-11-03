var express = require ("express");
var mysql = require("mysql");
var app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

var con = mysql.createConnection({
host:'localhost',
user:'ronal',
password:'ronal2023'
});

con.connect(function(err) {
    if (err) {
        console.error('Error al conectar a la base de datos: ' + err.message);
    } else {
        console.log('Connected!');
        // Continúa con el código de acceso a la base de datos aquí
    }
});


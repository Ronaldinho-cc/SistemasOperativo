var mysql = require('mysql');
var express = require('express');

var conexion = mysql.createConnection({
   host:'52.71.220.163'
   database:'sakila'
   user:'ronal'
   password:'2023'
}) 

conexion.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('CONEXION EXITOSA');   
   }
});
conexion.end();


var mysql = require('mysql');

var conexion = mysql.createConnection({
   host:'localhost',
   database:'sakila',
   user:'ronal',
   password:'2023'
}) 

conexion.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('CONEXION EXITOSA');   
   }
});

conexion.query('SELECT * FROM actor',function(error,results,fields){
  if(error)
    throw error;

 results.forEach(result =>{
	console.log(result);
});
})

/*Insertar datos a mysql
conexion.query('INSERT INTO actor (first_name , last_name)VALUES("Adam","Sanchez")',function (error,results){
  if(error) throw error;
      console.log("Registro Agregado",results)   
});*/
//Actualizar datos mysql
conexion.query('UPDATE actor SET first_name = "Josue", last_name = "Rodriguez" WHERE actor_id=2 ', function (error,results){
if(error) throw error;
	console.log('Registro Actualizado',results);
});
//Eliminar 
conexion.query('DELETE FROM actor WHERE actor_id=202',function (error,results){
if(error) throw error;
        console.log('Registro Eliminado',results);
});
conexion.end();
	

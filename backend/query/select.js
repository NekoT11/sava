import mysql from 'mysql2'

export function select(){

 connection.query("SELECT * FROM users",
  function(err, results, fields) {
    console.log(err);
    console.log(results); // собственно данные
    console.log(fields); // мета-данные полей 
});
connection.end();
}
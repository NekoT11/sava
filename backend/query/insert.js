import mysql from 'mysql2'

export function insert(){

const user = ["Tom", 29];
const sql = "INSERT INTO users(name, age) VALUES(?, ?)";
 
connection.query(sql, user, function(err, results) {
    if(err) console.log(err);
    else console.log("Данные добавлены");
});
 
connection.end();
}
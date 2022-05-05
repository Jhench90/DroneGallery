//require arango, create connection
var arangojs = require('arangojs');
var db = new arangojs.Database('http://127.0.0.1:8529')

//create database if not exists
db.listDatabases().then((names) => {
  if (names.indexOf('sportradardb') > -1){
    db.useDatabase('sportradardb');
  } else {
    db.createDatabase('sportradardb').then(
     ()=> console.log("Database created successfully: sportradardb"),
      error=> console.error("Error creating database: " + error)
    )}
  }).then (() => {
    db.get().then(
      ()=> console.log('Using database "sportradardb"'),
      error=> console.error("Error connecting to database: " + error)
    );
  });

//use database
db.useDatabase('sportradardb')

module.exports = {
  db: db
}
//require arango, create connection
var arangojs = require('arangojs');
var db = new arangojs.Database('http://127.0.0.1:8529')

//create database if not exists
db.listDatabases().then((names) => {
  if (names.indexOf('jayandthesky') > -1){
    db.useDatabase('jayandthesky');
  } else {
    db.createDatabase('jayandthesky').then(
     ()=> console.log("Database created successfully: jayandthesky"),
      error=> console.error("Error creating database: " + error)
    )}
  }).then (() => {
    db.get().then(
      ()=> console.log('Using database "jayandthesky"'),
      error=> console.error("Error connecting to database: " + error)
    );
  });

//use database
db.useDatabase('jayandthesky')

module.exports = {
  db: db
}
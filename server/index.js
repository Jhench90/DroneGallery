const express = require('express');
// const {db} = require('./Arangodb.js');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
// db.useDatabase('sportradardb');

app.get('/nba/schedule', (req, res) => {
  //check Arango for info
  db.query({
    query: `FOR doc IN @@c RETURN {doc}`,
    bindVars: { "@c": "nbaschedule" },
  })
  .then(function (cursor) {
    return cursor.map((product)=>{
      return product
    })
  })
  .catch(function (err) {
    console.error(err.message);
  })
  .then(function (data) {
    console.log(data)
    res.status(201).send(data)
  })
  //if not exists, check sportradarapi for info
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
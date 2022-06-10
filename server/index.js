const express = require('express');
const {db} = require('./Arangodb.js');
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('client/dist'));
app.use(express.json())
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

app.post('/blogs', (req, res) => {
  console.log(req.body)
  let b = req.body
  if (req.body.password !== 'chunky') {
    res.send('Incorrect password')
    return
  }
  db.useDatabase('blogs');
  // db.blogs.save({title: b.title, shorttitle: b.shorttitle, author: b.author, banner: b.banner, time: b.time, content: b.content})

  db.query({
    query: `INSERT {"title": ${b.title}, "shorttitle": ${b.shorttitle}, "author": ${b.author}, "banner": ${b.banner}, "time": ${b.time}, "content": ${b.content}} INTO blogs`,
    bindVars: { "@b": "blogs" },
  })
  .then(function (cursor) {
    console.log('yahaha!')
  })
  .catch(function (err) {
    console.error(err.message);
  })
  // .then(function (data) {
  //   console.log(data)
  //   res.status(201).send(data)
  // })
})

app.listen(PORT, () => {
  console.log(new Date().toString().slice(0, 24), `| Server listening on port: ${PORT}`);
})
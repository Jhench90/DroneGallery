const express = require('express');
const {db} = require('./Arangodb.js');
const aqlQuery = require('arangojs').aqlQuery
const app = express();
const PORT = 3000 || process.env.PORT;

var bodyParser = require('body-parser');

app.use(express.static('client/dist'));
app.use(bodyParser.json())

app.get('/flashcards', (req, res)=>{
  let collection = db.collection('flashcards');

  //code to add new document
  // let collection = db.collection('flashcards');
  // let doc = {
  //   _key: 'secondDocument',
  //   a: 'foo',
  //   b: 'bar'
  // }
  // collection.save(doc).then(
  //   meta => console.log('Document saved: ', meta._rev)
  // )

  // retrieve entire collection
  collection.all().then(
    cursor => cursor.map(doc => doc)
  ).then(
    keys => res.send(keys)
  )
})

app.patch('/flashcards', (req, res)=>{
  console.log(req.body)
  let newDocument = {
    word: req.body.word,
    definition: req.body.definition,
    studyCount: req.body.studyCount
  }
  console.log(`FOR doc in flashcards Replace "${req.body._key}" with {word: ${req.body.word},
  definition: ${req.body.definition}, studyCount: ${req.body.studyCount}} in flashcards`)

  db.query(`FOR doc in flashcards Replace "${req.body._key}" with {word: "${req.body.word}",
    definition: "${req.body.definition}", studyCount: ${req.body.studyCount}} in flashcards`)
    .then(()=>{
      let collection = db.collection('flashcards');
      collection.all().then(
        cursor => cursor.map(doc => doc)
      ).then(
        keys => res.send(keys)
      )
    })
})

app.post('/flashcards', (req, res)=>{
  console.log(req.body)
  //code to add new document
  let collection = db.collection('flashcards');
  let doc = {
    ...req.body
  }
  collection.save(doc).then(
    meta => console.log('Document saved: ', meta._rev)
  )
})

// app.get('/nba/schedule', (req, res) => {
//   //check Arango for info
//   db.query({
//     query: `FOR doc IN @@c RETURN {doc}`,
//     bindVars: { "@c": "nbaschedule" },
//   })
//   .then(function (cursor) {
//     return cursor.map((product)=>{
//       return product
//     })
//   })
//   .catch(function (err) {
//     console.error(err.message);
//   })
//   .then(function (data) {
//     console.log(data)
//     res.status(201).send(data)
//   })
//   //if not exists, check sportradarapi for info
// })

// app.post('/blogs', (req, res) => {
//   console.log(req.body)
//   let b = req.body
//   if (req.body.password !== 'chunky') {
//     res.send('Incorrect password')
//     return
//   }
//   db.useDatabase('blogs');
//   // db.blogs.save({title: b.title, shorttitle: b.shorttitle, author: b.author, banner: b.banner, time: b.time, content: b.content})

//   db.query({
//     query: `INSERT {"title": ${b.title}, "shorttitle": ${b.shorttitle}, "author": ${b.author}, "banner": ${b.banner}, "time": ${b.time}, "content": ${b.content}} INTO blogs`,
//     bindVars: { "@b": "blogs" },
//   })
//   .then(function (cursor) {
//     console.log('yahaha!')
//   })
//   .catch(function (err) {
//     console.error(err.message);
//   })
  // .then(function (data) {
  //   console.log(data)
  //   res.status(201).send(data)
  // })
// })

app.listen(PORT, () => {
  console.log(new Date().toString().slice(0, 24), `| Server listening on port: ${PORT}`);
})
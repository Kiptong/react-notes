const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const Knex = require('knex')
const knex = Knex({
  dialect: 'pg',
  connection: 'postgres://localhost:5432/notes'
})

const app = express()
const publicPath = path.join(__dirname, 'public')
const staticMiddleware = express.static(publicPath)

app.use(staticMiddleware)
app.use(bodyParser.json())

app.post('/generate', (req, res) => {
  const note = req.body

  console.log(note)
  
  // const query = knex
  //   .insert(note)
  //   .into('notes')
  //   .returning('*')
  //
  // console.log(query)
  // query
  //   .then((data) => res.json(data))
  //   .catch((error) => console.log(error))
})

app.get('/notes', (req, res) => {
  const noteQuery = knex.select().table('notes')

  noteQuery
    .then((data) => res.json(data))
    .catch(() => res.status(500).json({error: 'Error in fetching notes'}))
})

app.listen(3000, () => console.log('Listening on 3000'))

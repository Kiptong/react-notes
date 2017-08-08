require('dotenv/config')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const Knex = require('knex')
const knex = Knex({
  dialect: 'pg',
  connection: process.env.DATABASE_URL
})

const app = express()
const publicPath = path.join(__dirname, 'public')
const staticMiddleware = express.static(publicPath)

app.use(staticMiddleware)
app.use(bodyParser.json())

app.post('/notes', (req, res) => {
  const note = req.body
  
  const query = knex
      .insert(note)
      .into('notes')
      .returning('*')

  query
    .then((data) => res.json(data[0]))
    .catch((error) => console.log(error))
})

app.get('/notes', (req, res) => {
  const noteQuery = knex.select('*').from('notes')

  noteQuery
    .then((data) => res.json(data))
    .catch((err) => {
      res.status(500).json({error: 'Error in fetching notes'})
      console.log(err)
    })
})

app.listen(process.env.PORT, () => console.log('Listening on 3000'))

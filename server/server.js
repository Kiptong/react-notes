require('dotenv/config')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const knex = require('knex')({
  dialect: 'pg',
  connection: process.env.DATABASE_URL
})

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

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




app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})

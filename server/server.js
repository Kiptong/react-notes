require('dotenv/config')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const knex = require('knex')({
  dialect: 'pg',
  connection: process.env.DATABASE_URL
})

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())

app.get('/notes', async (req, res) => {
  const notes = await knex
    .select('*')
    .from('notes')
    .orderBy('created_at', 'desc')
  res.json(notes)
})

app.post('/notes', async (req, res) => {
  const [ note ] = await knex
    .insert(req.body)
    .into('notes')
    .returning('*')
  res.status(201).json(note)
})

app.delete('/notes/:id', async (req, res) => {
  await knex
    .delete()
    .from('notes')
    .where({ id: req.params.id })
    .returning('*')
  res.sendStatus(204)
})

app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT)
})

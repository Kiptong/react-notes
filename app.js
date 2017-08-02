import React, { Component } from 'react'
import Notes from './components/notes-list'
import CreateNote from './components/create-note'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { notes: [] }
    this.saveNote = this.saveNote.bind(this)
  }
  async componentDidMount() {
    const res = await fetch('/notes')
    const notes = await res.json()
    this.setState({ notes })
  }
  async saveNote(note) {
    const res = await fetch('/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: note
    })
    const newNote = await res.json()
    console.log(newNote)
    this.setState({ notes: [newNote].concat(this.state.notes)})
  }
  render() {
    return (
      <div className="container">
        <CreateNote saveNote= { this.saveNote } />
        <Notes notes = { this.state.notes }/>
      </div>
    )
  }
}

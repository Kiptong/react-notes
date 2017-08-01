import React, { Component } from 'react'

function Note(props) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
      <div className="card">
          <div className="card-block">
            <h5 className="text-bold">{ props.note.title }</h5>
            <ul>
              {
                props.note.notes.map((_notes, i) => {
                  return <li key={ i }>{ _notes }</li>
                })
              }
            </ul>
          </div>
      </div>
    </div>
  )
}

export default class Notes extends Component {
  constructor(props) {
    super(props)
    this.state = { notes: [] }
  }
  async componentDidMount() {
    const response = await fetch('/notes')
    const notes = await response.json()
    console.log(notes)
    this.setState({ notes })
  }
  render() {
    return (
      <div className="container">
        <div className="row inline-block">
            {
              this.state.notes.map((note, i) => {
                return <Note key= { i } note= { note }/>
              })
            }
        </div>
      </div>
    )
  }
}

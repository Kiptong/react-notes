import React, { Component } from 'react'

function handleSubmit(event) {
  event.preventDefault()
  const data = new FormData(event.target)
  const json = JSON.stringify({
    title: data.get('title'),
    notes: data.get('notes')
  })
  fetch('/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: json
  })
}

export default class CreateNote extends Component {
  constructor(props) {
    super(props)
    this.state = {  notes: [] }
  }
  render() {
    return (
      <div className="container">
        <div className="row align-center">
          <div className="col-md-4">
            <div className="form-main">
              <h4 className="heading"><strong>Create a New Note</strong></h4>
              <hr/>
              <form className="form-group" onSubmit= { handleSubmit }>
                <input className="form-control" id="title" type="text" placeholder="Note Title" name="title"/>
                <hr/>
                <textarea className="form-control" id="notes" type="text" placeholder="Note" name="notes"/>
                <hr/>
                <button className="form-control" type="submit" className="btn btn-primary btn-block text-center">Create New Note</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )}
}

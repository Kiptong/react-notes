import React, { Component } from 'react'



export default class CreateNote extends Component {
  handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target)
    const note = JSON.stringify({
      title: data.get('title'),
      notes: data.get('notes')
    })
    this.props.saveNote(note)
  }
  render() {
    return (
      <div className="row align-center">
        <div className="col-md-4">
          <div className="form-main">
            <h4 className="heading"><strong>Create a New Note</strong></h4>
            <hr/>
            <form className="form-group" onSubmit= { (event) => this.handleSubmit(event) }>
              <input className="form-control" id="title" type="text" placeholder="Note Title" name="title"/>
              <hr/>
              <textarea className="form-control" id="notes" type="text" placeholder="Note" name="notes"/>
              <hr/>
              <button type="submit" className="form-control btn btn-primary btn-block text-center">Create New Note</button>
            </form>
          </div>
        </div>
      </div>
    )}
}

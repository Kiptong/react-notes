import React, { Component } from 'react'

export default class Note extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const userData = {
      note: formData.get('note')
    }
    this.props.saveNote(userData)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-inline">
          <input
            className="form-control"
            autoFocus
            placeholder="Enter Note Here"
            name="note"
            type="text"/>
          <button className="btn btn-default" type="submit">
            Add Note
          </button>
        </div>
      </form>
    )
  }
}

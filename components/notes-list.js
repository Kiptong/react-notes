import React, { Component } from 'react'

function Note(props) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
      <div className="card">
          <div className="card-block">
            <p>{ props.note.note }</p>
          </div>
      </div>
    </div>
  )
}

export default class Notes extends Component {
  render() {
    return (
        <div className="row inline-block">
            {
              this.props.notes.map((note, i) => {
                return <Note key= { i } note= { note }/>
              })
            }
        </div>
    )
  }
}

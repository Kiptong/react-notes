import React from 'react'
import { connect } from 'react-redux'

function Notification(props) {
  return (
    <div className="notification">
      <span className="message-count">{ props.count }</span>
      <i className="fa fa-2x fa-envelope-o"></i>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state.length
  }
}

const Connected = connect(mapStateToProps)(Notification)

export default Connected

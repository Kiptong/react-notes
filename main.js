import ReactDOM from 'react-dom'
import React from 'react'
import Notes from './components/notes-list'
import CreateNote from './components/create-note'

function App() {
  return(
    <div>
      <CreateNote />
      <Notes />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)

import { createStore } from 'redux'

function reducer(state, action) {
  switch (action.type) {
    case 'MESSAGE_RECEIVED':
      return [...state, action.payload.text]
    default:
      return state
  }
}

const initialState = ['All Code.', 'All Day.']
const store = createStore(reducer, initialState)

export default store

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Notification from './components/notification'

ReactDOM.render(
  <Provider store={ store }>
    <Notification/>
  </Provider>,
  document.querySelector('#app')
)

setInterval(function () {
  store.dispatch({
    type: 'MESSAGE_RECEIVED',
    payload: { text: 'Orange County Code School' }
  })
}, 2000)

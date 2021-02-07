import '~/src/scss/index.scss'
import App from '~/src/components/app/App'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { resetContext, getContext } from 'kea'
import { Provider } from 'react-redux'

resetContext({
  // 👈 add this
  createStore: {
    // options for redux (e.g. middleware, reducers, ...)
  },
  plugins: [
    // additional kea plugins
  ],
})

const mountNode = document.getElementById('app')

let appComponent = <App />

console.log(
  '🚀 ~ file: index.js ~ line 24 ~ window.mobileCheck()',
  window.mobileCheck()
)
if (window.mobileCheck()) {
  appComponent = (
    <div
      style={{
        fontSize: '3rem',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        top: '50vh',
        position: 'relative',
        transform: 'translateY(-50%)',
        padding: '3rem',
        color: '#e87a90',
        lineHeight: 1.5,
      }}
    >
      请使用电脑端打开本页面以提升展示效果
    </div>
  )
}

const mainContent = (
  <Provider store={getContext().store}>
    <Router>{appComponent}</Router>
  </Provider>
)

ReactDOM.render(mainContent, mountNode)

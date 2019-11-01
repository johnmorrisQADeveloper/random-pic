import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Audio from './components/Audio'
import Image from './components/Image'
import './App.css'
import Timer from './components/Timer'

function App() {
  return (
    <Provider store={store}>
      <div className="ui grid">
        <div className="one wide row">
          <div className="one column row">
            <Image />
          </div>
          <div className="two column row">
            <Timer />
            <br />
            <br />
            <Audio />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App

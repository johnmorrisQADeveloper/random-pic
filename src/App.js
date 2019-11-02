import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Control from './components/Control'
import Image from './components/Image'
import './App.css'
import Timer from './components/Timer'
import YoutubeVideos from './components/YoutubeVideos'

function App() {
  
  return (
    <Provider store={store}>
      <div className='ui'>
      <br/>
        <div className="ui three column grid">
          <div className="row">
            <div className='column'><Timer /></div>
            <div className='column'><Control /></div>
            <div className='column'><YoutubeVideos/></div>
          </div>
        </div>
        <div className='column'><Image /></div>
      </div>
    </Provider>
  )
}

export default App

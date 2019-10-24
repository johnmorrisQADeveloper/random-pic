import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Audio from './components/Audio';
import Image from './components/Image';
import './App.css'
import Timer from './components/Timer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Timer/>
        <Audio />
        <Image />
      </div>
    </Provider>
  )
}

export default App;

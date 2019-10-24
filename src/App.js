import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Audio from './components/Audio';
import Image from './components/Image';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Audio/>
        <Image/>
      </div>
    </Provider>
  );
}

export default App;

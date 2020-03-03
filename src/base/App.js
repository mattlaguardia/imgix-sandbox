import React from 'react';
import LazyImage from '../components/lazy-image'
import imageArray from '../images/images'
import './App.css';

const App = () => {
  return (
    <div className="App">
      Hello React Sandbox
      { imageArray.map((item, key) =>
        <LazyImage src={item} key={key} />
      )}
    </div>
  );
}

export default App;

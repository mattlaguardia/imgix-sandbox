import React from 'react';
import LazyLoadImage from '../components/lazy-load'
import imageArray from '../images/images'
import './App.css';

function App() {
  const images = imageArray.map((item, key) => (
    <LazyLoadImage
      key={key}
      src={item}
      style={{
        display: 'block',
        margin: 'auto',
        marginBottom: '15px'
      }}
    />
  ))

  return (
    <div className="App">
      Hello React Sandbox
      {images}
    </div>
  );
}

export default App;

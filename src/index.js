import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './base/App';

const element = document.getElementById('root');

element.hasChildNodes() ? ReactDOM.hydrate(<App />, element) : ReactDOM.render(<App />, element);

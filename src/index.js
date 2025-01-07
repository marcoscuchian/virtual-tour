import React from 'react';
import ReactDOM from 'react-dom/client';
import Widget from './components/Widget';
import './index.css';
import 'pannellum/build/pannellum.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Widget />
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
// import App from './App'
import MreApp from './components/Application/MreApp';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MreApp />
    </BrowserRouter>
  </React.StrictMode>
);

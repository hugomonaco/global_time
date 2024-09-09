import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from 'src/App';
import reportWebVitals from './reportWebVitals.js';
import { TimeZonesProvider } from './providers/TimeZones';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TimeZonesProvider>
      <App />
    </TimeZonesProvider>
  </React.StrictMode>
);

reportWebVitals();

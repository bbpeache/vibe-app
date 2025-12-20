import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Tailwind CSS is now injected in index.html to prevent loading delays (Black Screen fix)

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
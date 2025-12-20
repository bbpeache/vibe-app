import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Tailwind CSS injection for Vite environment
const style = document.createElement('style');
style.innerHTML = `
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
`;
document.head.appendChild(style);

// Inject Tailwind Script
const script = document.createElement('script');
script.src = "https://cdn.tailwindcss.com";
document.head.appendChild(script);
script.onload = () => {
    // @ts-ignore
    tailwind.config = {
        theme: {
            extend: {
                colors: {
                    primary: 'var(--primary)',
                    surface: 'var(--surface-color)',
                    accent: 'var(--accent)',
                },
                boxShadow: {
                    'neon': '0 0 15px var(--primary-glow)',
                }
            }
        }
    };
};

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
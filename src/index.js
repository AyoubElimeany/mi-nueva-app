import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root'; // Cambia aquí para importar Root

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root /> {/* Cambia aquí para usar Root en lugar de App */}
  </React.StrictMode>
);

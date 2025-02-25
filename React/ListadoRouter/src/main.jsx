// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';  // Importa BrowserRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Envolvemos App en BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);

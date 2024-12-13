import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

// Initialize AOS globally
AOS.init({
  duration: 1000, // Animation duration
  offset: 100,    // Offset for triggering animations
  easing: 'ease-in-out', // Easing style
  once: true,     // Animation happens only once
});

// Render the React app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Lenis from 'lenis';
import App from './App.jsx';
import './index.css';
import { CartProvider } from './context/CartContext.jsx';

// Initialize Lenis smooth scroll - slower for cinematic snap effect
const lenis = new Lenis({
  duration: 2.0,
  easing: (t) => 1 - Math.pow(1 - t, 4), // Smooth ease-out quartic
  orientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 0.8,
  touchMultiplier: 1.5,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
);


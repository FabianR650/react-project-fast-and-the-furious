import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- use 'client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faSpinner, faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';



library.add(
  faBars,
  faTimes,
  faBolt,
  faBookOpen,
  faTags,
  faStar,
  faStarHalfAlt,
  faSpinner,
  faArrowLeft,
  faShoppingCart
);


const root = ReactDOM.createRoot(document.getElementById('root')); // <-- new API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
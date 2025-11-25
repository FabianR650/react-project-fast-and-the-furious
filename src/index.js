import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- use 'client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes, faBolt, faBookOpen, faTags, faStar, faStarHalfAlt, faSpinner, faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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
  faShoppingCart,
  faCar
);

const element = <FontAwesomeIcon icon={faCar} />

const root = ReactDOM.createRoot(document.getElementById('root')); // <-- new API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
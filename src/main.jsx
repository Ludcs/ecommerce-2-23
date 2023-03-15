import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {EcommerceProvider} from './context/EcommerceContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <EcommerceProvider>
    <App />
  </EcommerceProvider>
);

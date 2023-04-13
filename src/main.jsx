import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {EcommerceProvider} from './context/EcommerceContext';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import {LoginPage} from './pages/LoginPage';
import {RegisterPage} from './pages/RegisterPage';
import {ProtectedRoutes} from './components/ProtectedRoutes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <EcommerceProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <App />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </EcommerceProvider>
  </BrowserRouter>
);

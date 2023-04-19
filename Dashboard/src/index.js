import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import AuthContext from './context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
  <AuthContext>
    <App />
  </AuthContext>
    </ChakraProvider>,
);

reportWebVitals();

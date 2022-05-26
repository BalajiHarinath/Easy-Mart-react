import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';

import { makeServer } from "./server";
import { AuthProvider, ProductProvider, WishlistProvider, CartProvider, AddressProvider } from "./Context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <AddressProvider>
          <ProductProvider>
            <CartProvider>  
              <WishlistProvider>
                <App />
              </WishlistProvider>  
            </CartProvider>   
          </ProductProvider> 
        </AddressProvider>
      </Router> 
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

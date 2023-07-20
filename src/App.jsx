// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/cart"
          element={<CartPage cartItems={cartItems} />}
        />
        <Route
          path="/product"
          element={<ProductPage setCartItems={setCartItems} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

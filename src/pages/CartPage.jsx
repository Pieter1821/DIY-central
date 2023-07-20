// pages/CartPage.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/CartPage.css';

export default function CartPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cartItemsString = searchParams.get('cartItems');
  const parsedCartItems = cartItemsString ? JSON.parse(decodeURIComponent(cartItemsString)) : [];

  return (
    <div className="cart-container">
      <h1>CartPage</h1>
      {parsedCartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h2>Cart Items:</h2>
          {parsedCartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.title}</p>
              <p>Price: R{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

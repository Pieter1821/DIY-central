// pages/ProductPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductPage.css';

export default function ProductPage() {
  const [products, setProducts] = useState([
    { id: 1, title: 'Product 1', price: 100 },
    { id: 2, title: 'Product 2', price: 150 },
    // Add more product items as needed
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemToRemove.id)
    );
  };

  const cartItemsString = encodeURIComponent(JSON.stringify(cartItems));

  return (
    <div className="product-container">
      <h1>Product Page</h1>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <p>{product.title}</p>
          <p>Price: R{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <Link to={`/cart?cartItems=${cartItemsString}`}>
            <button>Go to Cart</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

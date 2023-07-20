// pages/homepage.js

import React from 'react';
import '../styles/HomePage.css';
// Import Link from react-router-dom to create a link for the button
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="homepage-container">
      <h1 className="homepage-title">DIY CENTRAL</h1>
      <p className="homepage-description">
        Welcome to DIY Central! Here you can find all your favorite DIY items.
      </p>
      {/* Add a button with a link to a specific page (e.g., CartPage) */}
      <Link to="/cart" className="homepage-button">
        Go to Cart
      </Link>
    </div>
  );
}

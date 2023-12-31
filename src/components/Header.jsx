// components/Header.js

import React from "react";
import { Link } from "react-router-dom";
import '../styles/Header.css';
import shoppingcart from '../assets/shopping-cart.png';

export default function Header() {
  return (
    <div className="container-navbar">
      <Link to="/">Home</Link>
      <Link to="/product">Products</Link>
      <Link to="/cart">
        <img src={shoppingcart} alt="shoppingcartlogo" />
      </Link>
    </div>
  );
}

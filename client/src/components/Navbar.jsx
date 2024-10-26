// Navbar.jsx
import React from 'react';
import { FaBoxOpen, FaPlus } from "react-icons/fa";
import AvdAssetsIcon from "../assets/images/AvdAssetsIcon.png";
import { Link } from "react-router-dom";
import "../components/cssComponents/Navbar.css";

const Navbar = () => {
  return (
    <div className='navbar-dash'>
      <img src={AvdAssetsIcon} className="banner-image" alt="Logo" />
      <div className="navbar-buttons">
        <Link to="/dashboard/" className="navbar-all-product">
          <FaBoxOpen /> All Products
        </Link>
        <Link to="/dashboard/" className="navbar-add-product">
          <FaPlus /> Add Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

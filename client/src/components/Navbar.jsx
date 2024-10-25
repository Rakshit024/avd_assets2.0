import { useState } from 'react';
import { FaAlignLeft, FaSearch, FaTimes, FaBoxOpen, FaPlus } from "react-icons/fa";
import AvdAssetsIcon from "../assets/images/AvdAssetsIcon.png";
import { Form, useSubmit, Link } from "react-router-dom";
import "../components/cssComponents/Navbar.css";


const Navbar = () => {

  return (
    <div className='navbar-main'>
      <div className="navbar-center">
          <img src={AvdAssetsIcon}/>
          <div className="navbar-column">
            <div className='navbar-container'>
              <div className="navbar-buttons">
              <Link to="/dashboard/" className="navbar-all-product">
                <FaBoxOpen /> All Products
              </Link>
              <Link to="/dashboard/" className="navbar-add-product">
                <FaPlus /> Add Product
              </Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navbar;

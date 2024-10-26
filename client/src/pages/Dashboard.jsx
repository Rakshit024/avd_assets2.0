import React from 'react';
import HeaderAction from "../components/HeaderAction";
import Navbar from "../components/Navbar";
import ProductContainer from "../components/ProductContainer";
import SearchContainer from "../components/SearchContainer";
import "../pages/cssPages/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <Navbar />
      <HeaderAction />
      <div className="content-main">
        <div className="search-container-dash">
          <SearchContainer />
        </div>
        <div className="product-container-dash">
          <ProductContainer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

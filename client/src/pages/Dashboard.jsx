// client/src/pages/Dashboard.jsx
import React from 'react';
import HeaderAction from "../components/HeaderAction";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className='dashboard-main'>
    <div className='header-action-dash'>
      <HeaderAction />
    </div>
    <div className='navbar-action-dash'>
      <Navbar />
    </div>
    </div>
  );
};

export default Dashboard;
import React, { useState } from "react";
import LogOut from "./LogoutContainer";
import "../components/cssComponents/HeaderAction.css";


const ActionBar = () => {
  return (
      <div className="main-container">
        <div className="logout-container">
        <LogOut className="logout-btn"/>
        </div>
      </div>
  );
};
export default ActionBar;
// client/src/pages/HomeLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;

// client/src/App.jsx
import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true, // Default route
        element: <Login />,
      },
      {
        path: "dashboard", 
        element: <Dashboard />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

import React from "react";
// components
import Navbar from "./Components/Shared/Navbar";
import ComposeMail from "./Components/Shared/ComposeMail";
import Sidebar from "./Components/Shared/Sidebar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
      <ComposeMail />
    </div>
  );
};

export default App;

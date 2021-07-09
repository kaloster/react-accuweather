import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import DashboardState from "./context/dashboard/DashboardState";

const App = () => {
  return (
    <DashboardState>
      <Dashboard />
    </DashboardState>
  );
};

export default App;

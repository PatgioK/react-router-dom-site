import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> henlo</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/profile">Profiles</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

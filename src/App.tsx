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
        <Link className="Link" to="/">home</Link>
        <Link className='Link' to="/invoices">Invoices</Link>
        <Link className='Link' to="/profile">Profiles</Link>
        <Link className='Link' to="/unidirectionflow">unidirectionflow</Link>
        <Link className='Link' to="/pvs">PvS</Link>
        <Link className='Link' to="/test">test</Link>
        <Link className='Link' to='/liftUp'>liftUp</Link>
        <Link className='Link' to='/control'>control</Link>
        <Link className='Link' to='/key'>Key</Link>
        <Link className='Link' to='/context'>Context</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;

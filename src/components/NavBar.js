import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <h1>
        <NavLink className="tran-button" to="/transactions">Transactions</NavLink>
      </h1>
      <button>
        <NavLink className="new-tran-button" to="/transactions/new">New Transactions</NavLink>
      </button>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <h1>
        <Link className="tran-button" to="/transactions">Transactions</Link>
      </h1>
      <button>
        <Link className="new-tran-button" to="/transactions/new">New Transactions</Link>
      </button>
    </nav>
  );
};

export default NavBar;

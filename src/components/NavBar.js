import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>
        <Link to="/transactions">Transactions</Link>
      </h1>
      <button>
        <Link to="/transactions/new">New Transactions</Link>
      </button>
    </nav>
  );
};

export default NavBar;

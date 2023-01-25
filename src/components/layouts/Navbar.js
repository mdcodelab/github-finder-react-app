import React from 'react';
import {Link} from "react-router-dom";
import {FaGithub} from "react-icons/fa"

function Navbar() {
  return (
    <nav>
        <div className="navbar-container">
          <div className="navbar-logo">
          <FaGithub className="icon-logo"></FaGithub>
          <Link to="/" className="nav-link">Github Finder</Link>
          </div>

          <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>
        </div>

    </nav>
  );
}

export default Navbar;

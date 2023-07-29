import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">elyasbelkhir.me</span>
        <div className="links">
          <Link className="navbar-brand" to="/" > Home</Link>
          <Link className="navbar-brand" to="/about"> About</Link>
          <Link className="navbar-brand" to="/contact"> Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
      <span style = {{fontFamily: "Edu SA Beginner", fontSize:"25px"}}>.me</span>
        <div className="links">
          <Link className="navbar-brand" to="/" > Home</Link>
          <Link className="navbar-brand" to="/projects"> Projects</Link>
          <Link className="navbar-brand" to="/experience"> Experience</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

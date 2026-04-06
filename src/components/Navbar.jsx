import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (
        <nav className= "navbar">
      <div className= "logo">
        <Link to="/">Bit-Dash</Link>
      </div>

      {/* Middle Links */}
      <div className= "links">
        <p>bit-dash, the go-to dashboard for real-time Bitcoin analytics.</p>
        </div>

      {/* Right Side */}
      <div className= "navLinks">
            <button className= "dash">
              <Link to="/dashboard">Go to Dashboard</Link>
            </button>
      </div>
    </nav>

    );
}

export default Navbar;
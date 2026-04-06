import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar({ hideLinks = false, authMode = "buttons", customText }) {
    return (
        <nav className= "navbar">
      <div className= "logo">
        <Link to="/">Bit-Dash</Link>
      </div>

      {/* Middle Links */}
      <div className= "links">
        {!hideLinks && (
          <>
            <Link to="/features">Features</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
          </>
        )}
        </div>

      {/* Right Side */}
      <div className= "navLinks">
        {!hideLinks && (
            <button className= "dash">
              <Link to="/dashboard">Go to Dashboard</Link>
            </button>
        )}
      </div>
    </nav>

    );
}

export default Navbar;
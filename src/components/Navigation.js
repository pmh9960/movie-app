import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="Nav">
      <Link to="/" className="Home">
        Home
      </Link>
      <Link to="/about" className="About">
        About
      </Link>
    </div>
  );
}

export default Navigation;

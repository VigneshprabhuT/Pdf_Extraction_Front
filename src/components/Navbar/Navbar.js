import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        <div className="dropdown">
          <div
            className="dropdown-title"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            401(k) & Pension
          </div>

          <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
            <NavLink to="/retirement-plan-design">
              Retirement Plan Design
            </NavLink>

            <NavLink to="/retirement-plan-compliance">
              Retirement Plan Compliance
            </NavLink>

            <NavLink to="/combined-services">
              401(k) Combined Services
            </NavLink>

            <NavLink to="/advisor-partnership">
              Advisor Partnership
            </NavLink>
          </div>
        </div>

        <NavLink to="/insights">Insights</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
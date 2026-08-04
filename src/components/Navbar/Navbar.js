import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/FinalLogoo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [retirementOpen, setRetirementOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const closeAll = () => {
  setMenuOpen(false);
  setRetirementOpen(false);
  setAboutOpen(false);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="Company Logo" className="logo-img" />
      </NavLink>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>

        {/* 401(k) & Pension dropdown */}
        <div className="dropdown">
          <button
            type="button"
            className="dropdown-title"
            aria-haspopup="true"
            aria-expanded={retirementOpen}
            onClick={() => setRetirementOpen(!retirementOpen)}
          >
            401(k) & Pension
          </button>

          <div className={`dropdown-content ${retirementOpen ? "show" : ""}`}>
            <div className="dropdown-column">
              <NavLink to="/retirement-plan-design" onClick={closeAll}>Retirement Plan Design</NavLink>
              <NavLink to="/retirement-plan-compliance" onClick={closeAll}>Retirement Plan Compliance</NavLink>
              <NavLink to="/combined-services" onClick={closeAll}>401(k) Combined Services</NavLink>
              <NavLink to="/advisor-partnership" onClick={closeAll}>Advisor Partnership</NavLink>
            </div>
          </div>
        </div>

        {/* About Us mega dropdown */}
        <div className="dropdown">
          <button
            type="button"
            className="dropdown-title"
            aria-haspopup="true"
            aria-expanded={aboutOpen}
            onClick={() => setAboutOpen(!aboutOpen)}
          >
            About Us
          </button>

          <div className={`dropdown-content mega ${aboutOpen ? "show" : ""}`}>
            <div className="dropdown-column">
              <h4>Meet Us</h4>
              <NavLink to="/about-us" onClick={closeAll}>About Us</NavLink>
              <NavLink to="/executive-team" onClick={closeAll}>Executive Team</NavLink>
              <NavLink to="/delivery-model" onClick={closeAll}>Our Delivery Model</NavLink>
            </div>
            <div className="dropdown-column">
              <h4>Connect</h4>
              <NavLink to="/support" onClick={closeAll}>Get Support</NavLink>
              <NavLink to="/Careers" onClick={closeAll}>Careers</NavLink>
              <NavLink to="/contact-us" onClick={closeAll}>Contact Us</NavLink>
            </div>
          </div>
        </div>

        <NavLink to="/insights" onClick={closeAll}>Insights</NavLink>
        <NavLink to="/contact-us" onClick={closeAll}>Contact</NavLink>
      </div>


      <button
        type="button"
        className="menu-icon"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
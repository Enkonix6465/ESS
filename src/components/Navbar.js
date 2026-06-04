import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { FaUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const services = [
  { label: "AI Service", path: "/services/ai-service" },
  {
    label: "Application Development",
    path: "/services/application-development",
  },
  { label: "Cloud Solutions", path: "/services/cloud-solutions" },
  {
    label: "Cognitive Business Operations",
    path: "/services/cognitive-operations",
  },
  { label: "Data & Analytics", path: "/services/data-analytics" },
  { label: "IT Consulting", path: "/services/it-consulting" },
  {
    label: "Network Solutions & Services",
    path: "/services/network-solutions",
  },
];

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false); // NEW STATE
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const dropdownTimeout = React.useRef();
  const userDropdownTimeout = React.useRef();

  // Set dark theme by default
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  // Toggle dropdown on click (desktop and mobile)
  const handleServicesClick = (e) => {
    if (window.innerWidth > 768) {
      // Desktop: navigate to /services and open dropdown
      if (!showDropdown) {
        navigate("/services");
        setShowDropdown(true);
      } else {
        setShowDropdown(false);
      }
    } else {
      // Mobile: just toggle dropdown
      e.preventDefault();
      setShowDropdown((prev) => !prev);
    }
  };

  // Close dropdown on double click
  const handleServicesDoubleClick = (e) => {
    e.preventDefault();
    setShowDropdown(false);
  };

  // Dropdown hover handlers with delay
  const handleDropdownMouseEnter = () => {
    if (window.innerWidth > 768) {
      clearTimeout(dropdownTimeout.current);
      setShowDropdown(true);
    }
  };
  const handleDropdownMouseLeave = () => {
    if (window.innerWidth > 768) {
      dropdownTimeout.current = setTimeout(() => setShowDropdown(false), 6000); // 6 seconds
    }
  };
  const handleUserDropdownMouseEnter = () => {
    if (window.innerWidth > 768) {
      clearTimeout(userDropdownTimeout.current);
      setShowUserDropdown(true);
    }
  };
  const handleUserDropdownMouseLeave = () => {
    if (window.innerWidth > 768) {
      userDropdownTimeout.current = setTimeout(
        () => setShowUserDropdown(false),
        6000,
      ); // 6 seconds
    }
  };

  // Close user dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (!event.target.closest(".navbar-user-dropdown")) {
        setShowUserDropdown(false);
      }
    }
    if (showUserDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showUserDropdown]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-img-left">
          <Link to="/" className="navbar-logo-link">
            <img
              src="/assets/Screenshot 2025-07-15 160316.png"
              alt="Enkonix Logo"
            />
            {/* Replace text with ESS logo image */}
            <img
              src="\assets\ESS_logo.png"
              alt="ESS Logo"
              className="navbar-ess-logo"
              style={{ height: "85px", marginLeft: "5px" }}
            />
          </Link>
        </div>
        <button
          className="navbar-toggle"
          onClick={() => setMobileMenu((m) => !m)}
        >
          <span className="navbar-toggle-icon">☰</span>
        </button>
        <div className={`navbar-links${mobileMenu ? " active" : ""}`}>
          <NavLink to="/" onClick={() => setMobileMenu(false)}>
            Home
          </NavLink>
          <NavLink to="/aboutus" onClick={() => setMobileMenu(false)}>
            About Us
          </NavLink>
          <div
            className="navbar-dropdown"
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
          >
            <button
              className="navbar-link services-link"
              onClick={handleServicesClick}
              onDoubleClick={handleServicesDoubleClick}
              aria-haspopup="true"
              aria-expanded={showDropdown}
              tabIndex={0}
              type="button"
            >
              Services ▾
            </button>
            <div className={`dropdown-menu${showDropdown ? " show" : ""}`}>
              {services.map((service) => (
                <NavLink
                  key={service.path}
                  to={service.path}
                  onClick={() => {
                    setMobileMenu(false);
                    setShowDropdown(false);
                  }}
                >
                  {service.label}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/industries" onClick={() => setMobileMenu(false)}>
            Industries
          </NavLink>
          <NavLink to="/careers" onClick={() => setMobileMenu(false)}>
            Careers
          </NavLink>
          <NavLink to="/contactus" onClick={() => setMobileMenu(false)}>
            Contact Us
          </NavLink>
          <div className="navbar-dropdown">
            <span
              className="navbar-link navbar-user-dropdown"
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                color: "#00bfff",
                fontSize: "0.9rem",
                padding: "0.2rem 0.5rem",
              }}
              onClick={() => setShowUserDropdown((prev) => !prev)}
              onMouseEnter={handleUserDropdownMouseEnter}
              onMouseLeave={handleUserDropdownMouseLeave}
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={showUserDropdown}
            >
              <FaUser
                style={{
                  marginRight: "0.3rem",
                  color: "#00bfff",
                  fontSize: "0.85rem",
                }}
              />
              <span
                style={{
                  marginRight: "0.2rem",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  color: "#00bfff",
                }}
              >
                Login
              </span>
              <FaChevronDown
                style={{
                  marginLeft: "0.15rem",
                  color: "#00bfff",
                  fontSize: "0.85rem",
                }}
              />
            </span>
            <ul
              className={`dropdown-menu${showUserDropdown ? " show" : ""}`}
              style={{ minWidth: "120px" }}
            >
              <li>
                <a
                  href="https://hr.ems.enkonix.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowUserDropdown(false)}
                >
                  HR
                </a>
              </li>
              <li>
                <a
                  href="https://ems.enkonix.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowUserDropdown(false)}
                >
                  Employee
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

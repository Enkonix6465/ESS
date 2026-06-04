import React, { useState } from "react";
import "./Footer.css";

const locations = [
  {
    country: "India",
    flag: "https://flagcdn.com/in.svg",

    address: [
      "1st Floor, MSR Tech Park, Novel Office, Marathahalli, Bangalore, Karnataka, 560036",
      "3rd Floor, Evolve - Coworking Space, Whitefield, Bengaluru, Karnataka 560048",
    ],
  },
  {
    country: "USA",
    flag: "https://flagcdn.com/us.svg",
    address: ["250 Vesey St, New York, NY 10281"],
  },
  {
    country: "UK",
    flag: "https://flagcdn.com/gb.svg",
    address: ["30, Churchill Place, London E14 5RE, United Kingdom"],
  },
  {
    country: "Australia",
    flag: "https://flagcdn.com/au.svg",
    address: ["101 Collins Street, Melbourne VIC 3000, Australia"],
  },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/enkonix-software/?viewAsMember=true",
    icon: "/assets/linkedin.png",
    label: "LinkedIn",
  },
  {
    href: "https://www.facebook.com/enkonixsoftwareservices",
    icon: "/assets/facebook.png",
    label: "Facebook",
  },
  {
    href: "https://x.com/EnkonixSS",
    icon: "/assets/twitter.png",
    label: "Twitter",
  },
  {
    href: "https://www.instagram.com/enkonixsoftwareservices/",
    icon: "/assets/instagram.png",
    label: "Instagram",
  },
];

function isTouchDevice() {
  return (
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  );
}

export default function Footer() {
  const [activeLoc, setActiveLoc] = useState(null);

  // For mobile: tap toggles popup
  const handleLocationClick = (idx) => {
    if (isTouchDevice()) {
      setActiveLoc(activeLoc === idx ? null : idx);
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-part footer-quick-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="services-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/aboutus">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/industries">Industries</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/contactus">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-part footer-services">
          <h3 className="footer-heading">Our Services</h3>
          <ul className="services-links">
            <li>
              <a href="/services/ai-service">AI Services</a>
            </li>
            <li>
              <a href="/services/application-development">
                Application Development
              </a>
            </li>
            <li>
              <a href="/services/cloud-solutions">Cloud Solutions</a>
            </li>
            <li>
              <a href="/services/cognitive-operations">
                Cognitive Business Operations
              </a>
            </li>
            <li>
              <a href="/services/data-analytics">Data & Analytics</a>
            </li>
            <li>
              <a href="/services/it-consulting">IT Consulting</a>
            </li>
            <li>
              <a href="/services/network-solutions">
                Network Solutions & Services
              </a>
            </li>
          </ul>
        </div>
        <div className="cta-section">
          <p className="cta-text">
            Let’s get started on something great.
            <br />
            Our team of IT experts looks forward to meeting with you
            <br />
            📞 +91 9108191003
            <br />✉ hr@enkonix.in
          </p>
          <a href="/contactus" className="cta-button">
            Get an appointment now
          </a>
        </div>
      </div>
      <div className="footer-location-row">
        <div className="footer-title">Our Locations</div>
        <div className="location-scroll-desktop">
          {locations.map((loc, idx) => (
            <div
              className="location-item"
              key={loc.country}
              tabIndex={0}
              title={loc.country}
              onMouseEnter={() => !isTouchDevice() && setActiveLoc(idx)}
              onMouseLeave={() => !isTouchDevice() && setActiveLoc(null)}
              onFocus={() => setActiveLoc(idx)}
              onBlur={() => setActiveLoc(null)}
              onClick={() => handleLocationClick(idx)}
              style={{ position: "relative", touchAction: "manipulation" }}
            >
              {/* Animated glassmorphic popup above the flag/country, shown on hover/focus/tap */}

              <div
                className={`location-popup-wrapper ${
                  activeLoc === idx ? "show" : ""
                }`}
              >
                {loc.address.map((line, i) => (
                  <div key={i} className="location-info-glass">
                    <p>{line}</p>
                  </div>
                ))}
              </div>

              <img src={loc.flag} alt={loc.country} />
              <span>{loc.country}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <img
          src="/assets/logo.png"
          alt="Enkonix Logo"
          className="footer-logo-small"
        />
        <p>© {new Date().getFullYear()} Enkonix Software Services Pvt. Ltd. All rights reserved.</p>
      </div>
      <div className="footer-right">
        {socialLinks.map((link) => (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            key={link.label}
          >
            <img
              src={link.icon}
              alt={link.label}
              width={34}
              height={34}
              className="footer-icon"
            />
          </a>
        ))}
      </div>
    </footer>
  );
}

import React from "react";

import "./Services.css";

export default function NetworkSolutions() {
  return (
    <>
      <div className="services-page">
        {/* Hero Section with Video, Animation, and Related Image */}
        <section className="intro-section hero-animate">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video-fadezoom"
          >
            <source
              src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660845/networkvd_gq8pwr.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay-fadezoom">
            <h2 className="hero-title-animate">
              Seamless Connectivity for a Smarter Tomorrow
            </h2>
            <p className="hero-text-animate">
              At Enkonix, we engineer intelligent network solutions that keep
              your business connected, secure, and future-ready. From on-prem to
              hybrid to multi-cloud environments — we ensure smooth, scalable,
              and high-performance connectivity every step of the way.
            </p>
          </div>
        </section>
        {/* Modern Banner Cards Section */}
        <section className="network-banner-cards-section">
          <div className="network-banner-rod"></div>
          <div className="network-banner-cards">
            <div className="network-banner-card banner-blue">
              <div className="banner-icon">💡</div>
              <div className="banner-title">Strategic Value</div>
              <div className="banner-desc">
                Enable digital transformation, support remote work, and protect
                your business with our next-gen network solutions.
              </div>
            </div>
            <div className="network-banner-card banner-orange">
              <div className="banner-icon">⭐</div>
              <div className="banner-title">Why Choose Us?</div>
              <ul className="banner-list">
                <li>Certified network engineers and 24/7 support</li>
                <li>Proven expertise in complex environments</li>
                <li>Custom solutions for every industry</li>
                <li>Focus on security, reliability, and growth</li>
              </ul>
            </div>
            <div className="network-banner-card banner-green">
              <div className="banner-icon">🏆</div>
              <div className="banner-title">Client Success Story</div>
              <div className="banner-desc">
                <strong>Case Study: Multi-Site Network Overhaul</strong>
              </div>
              <ul className="banner-list">
                <li>
                  <strong>Challenge:</strong> Disconnected branch offices,
                  frequent outages, and security gaps.
                </li>
                <li>
                  <strong>Solution:</strong> Deployed SD-WAN, upgraded
                  firewalls, and implemented 24/7 monitoring.
                </li>
                <li>
                  <strong>Result:</strong> 99.99% uptime, unified connectivity,
                  and zero security incidents in 12 months.
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Journey Steps and Service Cards remain as before, but add images to cards */}

        <section className="service-section black-theme">
          <div className="container">
            <h2>Network Solutions & Services: Overview & Scope</h2>
            <p>
              We design, implement, and manage secure, high-performance networks
              for businesses of all sizes, ensuring seamless connectivity and
              reliability.
            </p>
          </div>
        </section>
        <section className="service-section black-theme">
          <div className="container">
            <h2>How We Work</h2>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flex: "1 1 180px",
                  minWidth: "180px",
                  textAlign: "center",
                }}
              >
                <span
                  role="img"
                  aria-label="Assessment"
                  style={{ fontSize: "2.2rem" }}
                >
                  📝
                </span>
                <h3>Assessment</h3>
                <p>We evaluate your current network and business needs.</p>
              </div>
              <div
                style={{
                  flex: "1 1 180px",
                  minWidth: "180px",
                  textAlign: "center",
                }}
              >
                <span
                  role="img"
                  aria-label="Design"
                  style={{ fontSize: "2.2rem" }}
                >
                  📐
                </span>
                <h3>Design & Planning</h3>
                <p>
                  Our engineers architect a secure, scalable network solution.
                </p>
              </div>
              <div
                style={{
                  flex: "1 1 180px",
                  minWidth: "180px",
                  textAlign: "center",
                }}
              >
                <span
                  role="img"
                  aria-label="Deployment"
                  style={{ fontSize: "2.2rem" }}
                >
                  🔌
                </span>
                <h3>Deployment</h3>
                <p>
                  We implement, test, and optimize your network for peak
                  performance.
                </p>
              </div>
              <div
                style={{
                  flex: "1 1 180px",
                  minWidth: "180px",
                  textAlign: "center",
                }}
              >
                <span
                  role="img"
                  aria-label="Support"
                  style={{ fontSize: "2.2rem" }}
                >
                  🛡️
                </span>
                <h3>Ongoing Support</h3>
                <p>
                  24/7 monitoring, maintenance, and rapid response to issues.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="service-section black-theme">
          <div className="container" style={{ textAlign: "center" }}>
            <h2>Ready to Upgrade Your Network?</h2>
            <p>
              Contact us for a free network assessment and discover how Enkonix
              can connect and protect your business.
            </p>
          </div>
        </section>
        <section className="service-cards">
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/enterprise-network.jpg"
                alt="Enterprise Network Setup"
                className="card-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/dummy.jpg";
                }}
              />
              <div className="overlay-text">Enterprise Network Setup</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Customized LAN/WAN solutions built to scale with your business
                goals.
              </p>
              <ul className="highlight-list">
                <li>High-performance infrastructure</li>
                <li>Tailored for scalability and growth</li>
                <li>Optimized for speed and security</li>
              </ul>
            </div>
            <div className="card-label" style={{ color: "gold" }}>
              Enterprise Network Setup
            </div>
          </div>
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/cybersecurity.jpg"
                alt="Cybersecurity & Firewalls"
                className="card-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/dummy.jpg";
                }}
              />
              <div className="overlay-text">Cybersecurity & Firewalls</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Advanced defense mechanisms against cyber threats, breaches, and
                vulnerabilities.
              </p>
              <ul className="highlight-list">
                <li>Next-gen firewalls</li>
                <li>Threat detection & response</li>
                <li>Data loss prevention (DLP)</li>
              </ul>
            </div>
            <div className="card-label" style={{ color: "gold" }}>
              Cybersecurity & Firewalls
            </div>
          </div>
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/sd-wan.jpg"
                alt="SD-WAN Integration"
                className="card-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/dummy.jpg";
                }}
              />
              <div className="overlay-text">SD-WAN Integration</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Empowering branch connectivity with faster, smarter, and more
                flexible networking.
              </p>
              <ul className="highlight-list">
                <li>Multi-branch connectivity</li>
                <li>Centralized control & visibility</li>
                <li>Optimized traffic routing</li>
              </ul>
            </div>
            <div className="card-label" style={{ color: "gold" }}>
              SD-WAN Integration
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

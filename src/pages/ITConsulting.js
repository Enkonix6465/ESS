import React from "react";

import "./Services.css";

export default function ITConsulting() {
  return (
    <>
      <div className="services-page dark-bg">
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
              src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660767/itvd_dbxohu.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay-fadezoom">
            <h2 className="hero-title-animate">
              Expert Advice. Transformative Results.
            </h2>
            <p className="hero-text-animate">
              We help businesses stay competitive with future-ready IT
              strategies and risk-resilient solutions tailored to your needs.
            </p>
          </div>
        </section>
        {/* Modern Responsive Service Cards */}
        <section className="it-cards-section">
          <h2
            className="it-cards-heading"
            style={{ textAlign: "center", color: "#fff", marginBottom: "2rem" }}
          >
            Our IT Consulting Services
          </h2>
          <div className="it-cards-grid">
            <div className="it-card it-card-pink">
              <div className="it-card-icon">🏢</div>
              <div className="it-card-title">Digital Transformation</div>
              <div className="it-card-subtitle">
                Reinvent business models and streamline operations through
                tech-first innovation.
              </div>
            </div>
            <div className="it-card it-card-blue">
              <div className="it-card-icon">🧭</div>
              <div className="it-card-title">IT Strategy & Roadmap</div>
              <div className="it-card-subtitle">
                Align your IT initiatives with business goals and long-term
                success.
              </div>
            </div>
            <div className="it-card it-card-orange">
              <div className="it-card-icon">⚖️</div>
              <div className="it-card-title">Risk & Compliance</div>
              <div className="it-card-subtitle">
                Ensure your organization meets regulations and mitigates
                operational risk effectively.
              </div>
            </div>
            <div className="it-card it-card-green">
              <div className="it-card-icon">☁️</div>
              <div className="it-card-title">Cloud Consulting</div>
              <div className="it-card-subtitle">
                Move smartly to the cloud with the right architecture, security,
                and migration plans.
              </div>
            </div>
          </div>
        </section>
        {/* How We Work Section */}
        <section className="service-section black-theme">
          <div className="container">
            <h2>How We Work</h2>
            <div className="how-we-work-cards">
              <div className="how-card">
                <div className="how-card-ribbon">Step 1</div>
                <div className="how-card-content">
                  <span
                    role="img"
                    aria-label="Discovery"
                    className="how-card-emoji"
                  >
                    🔍
                  </span>
                  <h3>Discovery</h3>
                  <p>
                    We assess your business goals, challenges, and IT landscape.
                  </p>
                </div>
              </div>
              <div className="how-card">
                <div className="how-card-ribbon">Step 2</div>
                <div className="how-card-content">
                  <span
                    role="img"
                    aria-label="Strategy & Roadmap"
                    className="how-card-emoji"
                  >
                    🧭
                  </span>
                  <h3>Strategy & Roadmap</h3>
                  <p>
                    Our consultants design a tailored IT strategy and
                    transformation plan.
                  </p>
                </div>
              </div>
              <div className="how-card">
                <div className="how-card-ribbon">Step 3</div>
                <div className="how-card-content">
                  <span
                    role="img"
                    aria-label="Implementation"
                    className="how-card-emoji"
                  >
                    ⚙️
                  </span>
                  <h3>Implementation</h3>
                  <p>
                    We guide, support, and manage the rollout of new solutions.
                  </p>
                </div>
              </div>
              <div className="how-card">
                <div className="how-card-ribbon">Step 4</div>
                <div className="how-card-content">
                  <span
                    role="img"
                    aria-label="Optimization"
                    className="how-card-emoji"
                  >
                    🚀
                  </span>
                  <h3>Optimization</h3>
                  <p>
                    Continuous improvement and support to maximize your IT ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-section black-theme">
          <div className="container" style={{ textAlign: "center" }}>
            <h2>Ready for Expert IT Guidance?</h2>
            <p>
              Contact us for a free IT strategy session and see how Enkonix can
              help you achieve your business goals.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

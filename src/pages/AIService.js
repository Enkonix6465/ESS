import React from "react";
import "./Services.css";

export default function AIService() {
  React.useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) navbar.classList.add("liquid-glass");
    return () => {
      if (navbar) navbar.classList.remove("liquid-glass");
    };
  }, []);
  return (
    <>
      <div className="services-page">
        {/* Unique AI Service Hero Section */}
        <section className="ai-hero-section">
          <video autoPlay muted loop playsInline className="ai-hero-video">
            <source
              src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660689/203987-923133879_small_wlf4cw.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="ai-hero-overlay">
            <h2 className="ai-hero-title">
              Unleash the Power of AI for Your Business
            </h2>
            <p className="ai-hero-subtitle">
              From strategy to deployment, Enkonix delivers custom AI solutions
              that drive innovation, efficiency, and growth.
            </p>
          </div>
        </section>
        {/* Unique AI Service Step-by-Step Section */}
        <section className="ai-journey-section">
          <h2 className="ai-journey-title">Your AI Transformation Journey</h2>
          <div className="ai-steps-grid">
            <div className="ai-step-card">
              <span className="ai-step-icon">🤖</span>
              <h3>AI Discovery & Ideation</h3>
              <p>
                Identify high-impact AI opportunities tailored to your business
                goals.
              </p>
            </div>
            <div className="ai-step-card">
              <span className="ai-step-icon">🧬</span>
              <h3>Data Engineering</h3>
              <p>Prepare, clean, and structure your data for AI success.</p>
            </div>
            <div className="ai-step-card">
              <span className="ai-step-icon">🧠</span>
              <h3>Model Development</h3>
              <p>Build, train, and validate custom AI/ML models.</p>
            </div>
            <div className="ai-step-card">
              <span className="ai-step-icon">🚀</span>
              <h3>Deployment & Optimization</h3>
              <p>
                Integrate AI into your workflows and continuously optimize for
                results.
              </p>
            </div>
          </div>
        </section>
        {/* Service Cards with Glassmorphism */}
        <section className="service-cards">
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/data-science-ai.jpg"
                alt="AI Consulting"
                className="card-img"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/3.PNG";
                }}
              />
              <div className="overlay-text">AI Consulting</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Expert guidance to define your AI strategy, roadmap, and
                business case.
              </p>
              <ul className="highlight-list">
                <li>AI readiness assessment</li>
                <li>Use case discovery & prioritization</li>
                <li>Proof of concept (PoC) development</li>
              </ul>
            </div>
          </div>
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/ai-automation.jpg"
                alt="AI Automation"
                className="card-img"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/4.PNG";
                }}
              />
              <div className="overlay-text">AI Automation</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Automate business processes with intelligent bots and machine
                learning.
              </p>
              <ul className="highlight-list">
                <li>Robotic Process Automation (RPA)</li>
                <li>Document & image recognition</li>
                <li>Predictive analytics</li>
              </ul>
            </div>
          </div>
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/predictive-insights.jpg"
                alt="Predictive Insights"
                className="card-img"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/5.PNG";
                }}
              />
              <div className="overlay-text">Predictive Insights</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Leverage data to forecast trends, optimize operations, and drive
                growth.
              </p>
              <ul className="highlight-list">
                <li>Custom ML models</li>
                <li>Real-time dashboards</li>
                <li>Data-driven decision support</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="service-section black-theme">
          <div className="container">
            <h2>AI Service: Overview & Scope</h2>
            <p>
              We deliver AI-powered solutions for every industry — from
              intelligent automation to advanced analytics. Our team helps you
              harness the latest in machine learning, NLP, computer vision, and
              more.
            </p>
          </div>
        </section>
        <section className="service-section black-theme">
          <div className="container">
            <h2>Core Benefits</h2>
            <ul>
              <li>Boost productivity and reduce costs with automation</li>
              <li>Unlock new revenue streams with data-driven insights</li>
              <li>Enhance customer experience with personalization</li>
              <li>Stay ahead with continuous AI innovation</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

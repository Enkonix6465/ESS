import React from "react";
import "./Services.css";

export default function Cybersecurity() {
  return (
    <>
      <div className="services-page">
        {/* Hero Section with Video and Animation */}
        <section className="intro-section hero-animate">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video-fadezoom"
          >
            <source src="/assets/cybersecurityvd.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay-fadezoom">
            <h2 className="hero-title-animate">Secure Your Digital Future</h2>
            <p className="hero-text-animate">
              Enkonix delivers enterprise-grade cybersecurity solutions to
              protect your business from evolving threats, ensure compliance,
              and build digital trust.
            </p>
          </div>
        </section>
        {/* Overview & Scope */}
        <section className="service-section black-theme">
          <div className="container">
            <h2>Cybersecurity & Compliance: Overview & Scope</h2>
            <p>
              We provide end-to-end cybersecurity services, from risk assessment
              and compliance to advanced threat detection and incident response.
              Our solutions are tailored to your industry, regulatory needs, and
              business goals.
            </p>
          </div>
        </section>
        {/* Core Benefits */}
        <section className="service-section black-theme">
          <div className="container">
            <h2>Core Benefits</h2>
            <ul>
              <li>Proactive threat detection and rapid response</li>
              <li>Regulatory compliance (GDPR, HIPAA, PCI-DSS, etc.)</li>
              <li>Data protection and privacy by design</li>
              <li>Continuous monitoring and vulnerability management</li>
            </ul>
          </div>
        </section>
        {/* Strategic Value */}
        <section className="service-section black-theme">
          <div className="container">
            <h2>Strategic Value</h2>
            <p>
              Safeguard your reputation, ensure business continuity, and enable
              secure digital transformation with our cybersecurity expertise.
            </p>
          </div>
        </section>
        {/* Why Choose Us / Differentiators */}
        <section className="service-section black-theme">
          <div className="container">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Certified security experts (CISSP, CISM, CEH)</li>
              <li>24/7 Security Operations Center (SOC)</li>
              <li>Proven success in regulated industries</li>
              <li>Custom solutions for every business size</li>
            </ul>
          </div>
        </section>
        {/* Client Success Story */}
        <section className="service-section black-theme">
          <div className="container">
            <h2>Client Success Story</h2>
            <p>
              <strong>Case Study: Healthcare Data Breach Prevention</strong>
            </p>
            <ul>
              <li>
                <strong>Challenge:</strong> Sensitive patient data at risk,
                outdated security controls, and compliance gaps.
              </li>
              <li>
                <strong>Solution:</strong> Implemented multi-layered security,
                real-time monitoring, and compliance automation.
              </li>
              <li>
                <strong>Result:</strong> Zero breaches, full HIPAA compliance,
                and increased patient trust.
              </li>
            </ul>
          </div>
        </section>
        {/* How We Work */}
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
                  🔍
                </span>
                <h3>Assessment</h3>
                <p>We identify risks, vulnerabilities, and compliance needs.</p>
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
                  aria-label="Protection"
                  style={{ fontSize: "2.2rem" }}
                >
                  🛡️
                </span>
                <h3>Protection</h3>
                <p>Deploy advanced security controls and best practices.</p>
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
                  aria-label="Detection"
                  style={{ fontSize: "2.2rem" }}
                >
                  👁️
                </span>
                <h3>Detection & Response</h3>
                <p>Monitor, detect, and respond to threats in real time.</p>
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
                  aria-label="Optimization"
                  style={{ fontSize: "2.2rem" }}
                >
                  🔄
                </span>
                <h3>Continuous Improvement</h3>
                <p>
                  Regular reviews, updates, and training to stay ahead of
                  threats.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA */}
        <section className="service-section black-theme">
          <div className="container" style={{ textAlign: "center" }}>
            <h2>Ready to Secure Your Business?</h2>
            <p>
              Contact us for a free cybersecurity assessment and discover how
              Enkonix can protect your digital assets.
            </p>
            <a
              href="/contact"
              className="view-more-button"
              style={{ marginTop: "1.2rem", fontSize: "1.1rem" }}
            >
              Get Your Security Assessment
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

import React from "react";

import "./Services.css";

export default function ApplicationDevelopment() {
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
            <source
              src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660723/applicationvd_zpatps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay-fadezoom">
            <h2 className="hero-title-animate">
              Crafting Scalable, Secure, and Smart Applications
            </h2>
            <p className="hero-text-animate">
              Enkonix delivers custom web and mobile applications for startups
              and enterprises—combining innovation, robust security, and
              seamless user experience to turn your ideas into reality.
            </p>
          </div>
        </section>
        {/* Journey Steps */}
        <section className="cloud-journey">
          <h2 className="section-title">Cloud Enablement Services</h2>
          <p className="section-subtitle">
            We provide end-to-end services to fast-track your cloud adoption.
          </p>
          <div className="steps">
            <div className="step">
              <span role="img" aria-label="Strategy">
                📈
              </span>
              <h3>Strategy & Advisory</h3>
              <p>
                Plan your cloud journey with the right architecture and
                cost-effective strategies.
              </p>
            </div>
            <div className="step">
              <span role="img" aria-label="DevOps">
                ⚙️
              </span>
              <h3>DevOps & Automation</h3>
              <p>
                Automate deployments and streamline your CI/CD pipeline like a
                pro.
              </p>
            </div>
            <div className="step">
              <span role="img" aria-label="Security">
                🔒
              </span>
              <h3>Security & Compliance</h3>
              <p>
                Protect your data and ensure compliance with industry standards.
              </p>
            </div>
            <div className="step">
              <span role="img" aria-label="Support">
                📚
              </span>
              <h3>Support & Training</h3>
              <p>
                Get expert help and empower your team with hands-on training.
              </p>
            </div>
          </div>
        </section>

        {/* Service Cards (Responsive Glass Cards) */}
        <section className="service-cards">
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/web-app.jpg"
                alt="Web App Development"
                className="card-img"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/6.PNG";
                }}
              />
              <div className="overlay-text">Web App Development</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Modern, scalable, and secure web applications tailored to your
                business needs.
              </p>
              <ul className="highlight-list">
                <li>Custom frontend & backend solutions</li>
                <li>Responsive, cross-browser design</li>
                <li>Performance optimization</li>
              </ul>
            </div>
          </div>
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/mobile-app.jpg"
                alt="Mobile App Development"
                className="card-img"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/6.PNG";
                }}
              />
              <div className="overlay-text">Mobile App Development</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Native and cross-platform mobile apps for iOS and Android, built
                for performance and user delight.
              </p>
              <ul className="highlight-list">
                <li>React Native, Flutter, and native builds</li>
                <li>App store deployment & support</li>
                <li>Intuitive UI/UX</li>
              </ul>
            </div>
          </div>
          <div className="glass-card">
            <div className="card-image">
              <img
                src="/assets/api-integration.jpg"
                alt="API Integration"
                className="card-img"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/assets/6.PNG";
                }}
              />
              <div className="overlay-text">API Integration</div>
            </div>
            <div className="card-content">
              <p className="highlight-description">
                Seamless integration with third-party APIs and services to
                extend your app's capabilities.
              </p>
              <ul className="highlight-list">
                <li>REST, GraphQL, and SOAP APIs</li>
                <li>Payment gateways, social logins, and more</li>
                <li>Secure authentication & data flow</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Service Cards */}
        <section className="service-section black-theme">
          <div className="container">
            <h2>Application Development: Overview & Scope</h2>
            <p>
              We build custom web and mobile applications that drive business
              growth, user engagement, and operational efficiency. Our
              full-stack teams deliver from ideation to launch and beyond.
            </p>
          </div>
        </section>
        <section className="service-section black-theme">
          <div className="container">
            <h2>Core Benefits</h2>
            <ul>
              <li>Cross-platform expertise (Web, iOS, Android)</li>
              <li>Modern UI/UX for superior user experience</li>
              <li>Agile delivery and rapid prototyping</li>
              <li>Secure, scalable, and maintainable code</li>
            </ul>
          </div>
        </section>
        <section className="service-section black-theme">
          <div className="container">
            <h2>Strategic Value</h2>
            <p>
              Accelerate your go-to-market, differentiate your brand, and unlock
              new revenue streams with our end-to-end application development
              services.
            </p>
          </div>
        </section>
        <section className="service-section black-theme">
          <div className="container">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Experienced full-stack engineers and designers</li>
              <li>Proven success across industries</li>
              <li>Transparent process and ongoing support</li>
              <li>Focus on innovation and business outcomes</li>
            </ul>
          </div>
        </section>
        <section className="service-section black-theme">
          <div className="container">
            <h2>Client Success Story</h2>
            <p>
              <strong>Case Study: Retail App Launch</strong>
            </p>
            <ul>
              <li>
                <strong>Challenge:</strong> Outdated e-commerce platform, poor
                mobile experience, and low conversion rates.
              </li>
              <li>
                <strong>Solution:</strong> Built a modern, cross-platform app
                with seamless UX and real-time inventory integration.
              </li>
              <li>
                <strong>Result:</strong> 2x increase in mobile sales, 30% higher
                user engagement, and top ratings in app stores.
              </li>
            </ul>
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
                  aria-label="Discovery"
                  style={{ fontSize: "2.2rem" }}
                >
                  🔍
                </span>
                <h3>Discovery</h3>
                <p>
                  We collaborate to define your goals, users, and technical
                  requirements.
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
                  aria-label="Design"
                  style={{ fontSize: "2.2rem" }}
                >
                  🎨
                </span>
                <h3>Design & Prototyping</h3>
                <p>
                  Our designers create wireframes and prototypes for rapid
                  feedback.
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
                  aria-label="Development"
                  style={{ fontSize: "2.2rem" }}
                >
                  💻
                </span>
                <h3>Development</h3>
                <p>
                  Agile teams build, test, and iterate to deliver high-quality
                  applications.
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
                  aria-label="Launch"
                  style={{ fontSize: "2.2rem" }}
                >
                  🚀
                </span>
                <h3>Launch & Support</h3>
                <p>
                  We deploy, monitor, and support your app for ongoing success.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="service-section black-theme">
          <div className="container" style={{ textAlign: "center" }}>
            <h2>Ready to Build Your Next App?</h2>
            <p>
              Contact us for a free consultation and see how Enkonix can turn
              your vision into reality.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

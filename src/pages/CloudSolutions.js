import React from "react";

import "./Services.css";

export default function CloudSolutions() {
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
              src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660791/cloudvd_kj7lm8.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay-fadezoom">
            <h2 className="hero-title-animate">
              Reimagine Your Business with the Cloud
            </h2>
            <p className="hero-text-animate">
              Enkonix empowers enterprises to transition into the cloud with
              confidence. Whether you're looking to migrate, modernize, or
              manage — we've got you covered.
            </p>
          </div>
        </section>
        {/* Journey Steps */}
        <section className="cloud-journey">
          <h2 className="section-title">Your Cloud Transformation Journey</h2>
          <p className="section-subtitle">
            From strategy to execution — here's how we help you succeed in the
            cloud.
          </p>
          <div className="steps">
            <div className="step">
              <span role="img" aria-label="Assessment">
                📝
              </span>
              <h3>Assessment & Planning</h3>
              <p>
                Analyze infrastructure, define objectives, and create a
                transformation roadmap.
              </p>
            </div>
            <div className="step">
              <span role="img" aria-label="Migration">
                🚀
              </span>
              <h3>Migration & Modernization</h3>
              <p>
                Execute secure, seamless migrations with zero business
                disruption.
              </p>
            </div>
            <div className="step">
              <span role="img" aria-label="Optimization">
                📊
              </span>
              <h3>Optimization & Scaling</h3>
              <p>
                Fine-tune resources, improve performance, and scale efficiently.
              </p>
            </div>
            <div className="step">
              <span role="img" aria-label="Management">
                🔧
              </span>
              <h3>Ongoing Management</h3>
              <p>
                Monitor, secure, and support your cloud — so you can focus on
                growth.
              </p>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="service-cards"></section>
        <section className="service-section black-theme">
          <div className="container">
            <h2>Strategic Value</h2>
            <p>
              Accelerate digital transformation, improve operational efficiency,
              and unlock new business models with our cloud-first approach. We
              future-proof your IT landscape for rapid innovation.
            </p>
          </div>
        </section>
        <section className="service-section black-theme">
          <div className="container">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Certified cloud architects and 24/7 support</li>
              <li>Proven track record with Fortune 500 clients</li>
              <li>Custom solutions for every industry</li>
              <li>Transparent pricing and partnership approach</li>
            </ul>
          </div>
        </section>
        <section className="service-section black-theme">
          <div className="container">
            <h2>Client Success Story</h2>
            <p>
              <strong>Case Study: FinTech Cloud Migration</strong>
            </p>
            <ul>
              <li>
                <strong>Challenge:</strong> Legacy infrastructure, frequent
                downtime, and high costs.
              </li>
              <li>
                <strong>Solution:</strong> Seamless migration to AWS with zero
                downtime, automated scaling, and robust security.
              </li>
              <li>
                <strong>Result:</strong> 40% cost savings, 99.99% uptime, and
                improved customer satisfaction.
              </li>
            </ul>
          </div>
        </section>
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
                    We collaborate to define your goals, users, and technical
                    requirements.
                  </p>
                </div>
              </div>
              <div className="how-card">
                <div className="how-card-ribbon">Step 2</div>
                <div className="how-card-content">
                  <span
                    role="img"
                    aria-label="Design & Prototyping"
                    className="how-card-emoji"
                  >
                    🎨
                  </span>
                  <h3>Design & Prototyping</h3>
                  <p>
                    Our designers create wireframes and prototypes for rapid
                    feedback.
                  </p>
                </div>
              </div>
              <div className="how-card">
                <div className="how-card-ribbon">Step 3</div>
                <div className="how-card-content">
                  <span
                    role="img"
                    aria-label="Development"
                    className="how-card-emoji"
                  >
                    💻
                  </span>
                  <h3>Development</h3>
                  <p>
                    Agile teams build, test, and iterate to deliver high-quality
                    applications.
                  </p>
                </div>
              </div>
              <div className="how-card">
                <div className="how-card-ribbon">Step 4</div>
                <div className="how-card-content">
                  <span
                    role="img"
                    aria-label="Launch & Support"
                    className="how-card-emoji"
                  >
                    🚀
                  </span>
                  <h3>Launch & Support</h3>
                  <p>
                    We deploy, monitor, and support your app for ongoing
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-section black-theme">
          <div className="container" style={{ textAlign: "center" }}>
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Contact us for a free cloud readiness assessment and see how
              Enkonix can accelerate your digital journey.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

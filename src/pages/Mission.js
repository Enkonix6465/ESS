import React from "react";

import "./Mission.css";

export default function Mission() {
  return (
    <>
      <div className="mission-main-container">
        <header className="center-header">
          <h1 className="mission-title">Our Mission</h1>
        </header>
        <section className="mission-section glass-effect">
          <h1>At Enkonix</h1>
          <p className="mission-paragraph">
            Our mission is to empower businesses with cutting-edge technology
            solutions that transform operations, unlock new opportunities, and
            deliver real-world impact. We aim to be a trusted partner in your
            digital journey—innovating with passion, delivering with precision,
            and growing together.
          </p>
        </section>
        <div className="mission-card-row">
          {/* Innovation Card */}
          <div className="mission-card video-card glass-effect">
            <div className="card-left">
              <video autoPlay muted loop playsInline className="video-bg">
                <source
                  src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660742/Collaboration_jsxsab.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="card-right">
              <div className="overlay-title">Innovation</div>
              <p className="card-text">
                We constantly explore emerging tech to deliver future-ready
                solutions that keep our clients ahead of the curve.
              </p>
            </div>
          </div>
          {/* Customer First Card */}
          <div className="mission-card glass-effect">
            <div className="card-left">
              <video autoPlay muted loop playsInline className="video-bg">
                <source
                  src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660757/innovation-bg_nej4bw.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="card-right">
              <div className="overlay-title">Customer First</div>
              <p className="card-text">
                We align every service we offer with the goals of our
                clients—your success is our purpose.
              </p>
            </div>
          </div>
          {/* Integrity Card */}
          <div className="mission-card video-card glass-effect">
            <div className="card-left">
              <video autoPlay muted loop playsInline className="video-bg">
                <source
                  src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660771/WhatsApp_Video_2025-07-15_at_14.39.34_88952029_yyodvz.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="card-right">
              <div className="overlay-title">Integrity</div>
              <p className="card-text">
                We do what's right, not what's easy. Transparency and trust are
                the foundation of every project.
              </p>
            </div>
          </div>
          {/* Collaboration Card */}
          <div className="mission-card glass-effect">
            <div className="card-left">
              <video autoPlay muted loop playsInline className="video-bg">
                <source
                  src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660750/Customer_kcnvaa.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="card-right">
              <div className="overlay-title">Collaboration</div>
              <p className="card-text">
                We believe in the power of working together—internally and with
                clients—to create extraordinary outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

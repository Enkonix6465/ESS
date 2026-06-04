import React from "react";

import "./Vision.css";

export default function Vision() {
  return (
    <>
      <div className="vision-main-container">
        <header className="center-header">
          <h1 className="vision-title">Our Vision</h1>
        </header>
        <section className="vision-section glass-effect">
          <h1>Building a Smarter, Digital Tomorrow</h1>
          <p className="vision-paragraph">
            Our vision at Enkonix is to be at the forefront of global technology
            innovation—enabling organizations to reimagine their business
            models, accelerate digital transformation, and thrive in an
            ever-evolving world. We strive to be the most trusted technology
            partner, shaping the future with intelligence, agility, and
            integrity.
          </p>
        </section>
        <div className="vision-card-row">
          {/* Future-Ready Tech Card */}
          <div className="vision-card video-card glass-effect">
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
              <div className="overlay-title">Future-Ready Tech</div>
              <p className="card-text">
                Continuously investing in advanced solutions that push
                boundaries and unlock digital growth.
              </p>
            </div>
          </div>
          {/* Global Impact Card */}
          <div className="vision-card glass-effect">
            <div className="card-left">
              <video autoPlay muted loop playsInline className="video-bg">
                <source
                  src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660779/WhatsApp_Video_2025-07-15_at_14.39.38_901f850b_whrx1j.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="card-right">
              <div className="overlay-title">Global Impact</div>
              <p className="card-text">
                Creating value that scales across industries and geographies,
                leaving a mark that matters.
              </p>
            </div>
          </div>
          {/* Sustainability Card */}
          <div className="vision-card video-card glass-effect">
            <div className="card-left">
              <video autoPlay muted loop playsInline className="video-bg">
                <source
                  src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660837/3163534-uhd_3840_2160_30fps_rfhdxg.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="card-right">
              <div className="overlay-title">Sustainability</div>
              <p className="card-text">
                Innovating with a purpose to create eco-conscious and socially
                responsible tech ecosystems.
              </p>
            </div>
          </div>
          {/* Talent Empowerment Card */}
          <div className="vision-card glass-effect">
            <div className="card-left">
              <video autoPlay muted loop playsInline className="video-bg">
                <source
                  src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660845/networkvd_gq8pwr.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="card-right">
              <div className="overlay-title">Talent Empowerment</div>
              <p className="card-text">
                Nurturing passionate minds who lead change through collaboration
                and creativity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

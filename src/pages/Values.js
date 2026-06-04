/* eslint-disable no-unused-vars */
import "./Values.css";

const values = [
  {
    title: "Customer Centricity",
    video: "/assets/innovation-bg.mp4",
    description:
      "We put our clients at the heart of everything we do, delivering outcomes that matter.",
  },
  {
    title: "Excellence",
    video: "/assets/Customer.mp4",
    description:
      "We pursue quality relentlessly and continuously improve to exceed expectations.",
  },
];

export default function Values() {
  return (
    <>
      <div className="values-main-container">
        <header className="center-header">
          <h1 className="values-title">Our Core Values</h1>
        </header>
        <section className="values-section glass-effect">
          <h1>Guided by Purpose. Driven by Values.</h1>
          <p className="values-paragraph">
            At Enkonix, our core values shape every decision, drive innovation,
            and ensure we create lasting value for our clients, our people, and
            the world around us. These principles keep us grounded and
            future-focused.
          </p>
        </section>
        <div className="values-card-row">
          {/* Customer Centricity Card */}
          <div className="values-card video-card glass-effect">
            <div className="card-left">
              <video autoPlay muted loop playsInline className="video-bg">
                <source
                  src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660793/3191572-uhd_3840_2160_25fps_yfc9a4.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="card-right">
              <div className="overlay-title">Customer Centricity</div>
              <p className="card-text">
                We put our clients at the heart of everything we do, delivering
                outcomes that matter.
              </p>
            </div>
          </div>
          {/* Excellence Card */}
          <div className="values-card glass-effect">
            <div className="card-left">
              <video autoPlay muted loop playsInline className="video-bg">
                <source
                  src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660791/cloudvd_kj7lm8.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="card-right">
              <div className="overlay-title">Excellence</div>
              <p className="card-text">
                We pursue quality relentlessly and continuously improve to
                exceed expectations.
              </p>
            </div>
          </div>
          {/* Integrity Card */}
          <div className="values-card video-card glass-effect">
            <div className="card-left">
              <video autoPlay muted loop playsInline className="video-bg">
                <source
                  src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660789/WhatsApp_Video_2025-07-15_at_14.40.20_a2203ff4_ynkvgi.mp4"
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
          <div className="values-card glass-effect">
            <div className="card-left">
              <video autoPlay muted loop playsInline className="video-bg">
                <source
                  src="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660785/1851190-uhd_3840_2160_25fps_uimvhx.mp4"
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

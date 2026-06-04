import React from "react";
import IndustryDetail from "./IndustryDetail";
import {
  FaCar,
  FaCogs,
  FaRoad,
  FaBolt,
  FaRobot,
  FaMapMarkedAlt,
} from "react-icons/fa";

export default function Automotive() {
  return (
    <IndustryDetail
      heroBg="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660796/car_pd69ud.mp4"
      heroTitle="Automotive"
      heroDesc="Driving the future of mobility with smart, connected, and sustainable automotive solutions."
      solutions={[
        {
          img: "/assets/WhatsApp Image 2025-07-17 at 02.06.15_0e44e4ba.jpg",
          title: "Smart Manufacturing",
          desc: "Automated, data-driven production for quality and efficiency.",
          className: "industry-img-responsive",
        },
        {
          img: "/assets/WhatsApp Image 2025-07-17 at 02.06.15_0066fa7a.jpg",
          title: "Connected Vehicles",
          desc: "IoT-enabled cars for safety, navigation, and entertainment.",
          className: "industry-img-responsive",
        },
        {
          img: "/assets/WhatsApp Image 2025-07-17 at 02.06.15_075547ea.jpg",
          title: "EV & Mobility",
          desc: "Electric vehicle platforms and mobility-as-a-service.",
          className: "industry-img-responsive",
        },
      ]}
      benefits={[
        "Faster time-to-market",
        "Predictive maintenance",
        "Enhanced driver safety",
        "Sustainable, green mobility",
        "Seamless connectivity",
      ]}
      flipCards={[
        {
          icon: <FaCar />,
          title: "Autonomous Tech",
          desc: "AI-powered self-driving and driver-assist systems.",
        },
        {
          icon: <FaCogs />,
          title: "Smart Factories",
          desc: "Industry 4.0 automation and robotics.",
        },
        {
          icon: <FaRoad />,
          title: "Telematics",
          desc: "Real-time vehicle tracking and analytics.",
        },
      ]}
      highlights={[
        {
          icon: <FaBolt />,
          label: "EV Platforms",
          text: "Next-gen electric vehicle solutions.",
        },
        {
          icon: <FaRobot />,
          label: "Robotics",
          text: "Automated assembly and quality control.",
        },
        {
          icon: <FaMapMarkedAlt />,
          label: "Smart Navigation",
          text: "Advanced GPS and route optimization.",
        },
      ]}
      innovationImages={[
        {
          src: "/assets/WhatsApp Image 2025-07-17 at 02.06.15_252164f5.jpg",
          text: "Race Cars",
          className: "industry-img-responsive",
        },
        {
          src: "/assets/WhatsApp Image 2025-07-17 at 02.06.15_a50e0d48.jpg",
          text: "Car Engine",
          className: "industry-img-responsive",
        },
        {
          src: "/assets/WhatsApp Image 2025-07-17 at 02.06.15_fdd84551.jpg",
          text: "Blue Car",
          className: "industry-img-responsive",
        },
      ]}
    />
  );
}

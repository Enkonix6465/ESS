import React from "react";
import IndustryDetail from "./IndustryDetail";
import {
  FaIndustry,
  FaCogs,
  FaRobot,
  FaTools,
  FaBolt,
  FaChartLine,
} from "react-icons/fa";

export default function Manufacturing() {
  return (
    <IndustryDetail
      heroBg="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660865/WhatsApp_Video_2025-07-16_at_15.17.30_fa2860a3_hw44yj.mp4"
      heroTitle="Manufacturing"
      heroDesc="Revolutionizing manufacturing with automation, IoT, and smart factory solutions."
      solutions={[
        {
          img: "/assets/WhatsApp Image 2025-07-14 at 16.00.30_28ccf208.jpg",
          title: "Smart Factories",
          desc: "Connected, automated production lines for efficiency and quality.",
          className: "industry-img-responsive",
        },
        {
          img: "/assets/IMG-20250714-WA0035.jpg",
          title: "Robotics & Automation",
          desc: "Robots and AI for precision, speed, and safety.",
          className: "industry-img-responsive",
        },
        {
          img: "/assets/IMG-20250714-WA0037.jpg",
          title: "Predictive Maintenance",
          desc: "IoT sensors and analytics to prevent downtime.",
          className: "industry-img-responsive",
        },
      ]}
      benefits={[
        "Increased productivity",
        "Reduced downtime",
        "Higher product quality",
        "Cost savings through automation",
        "Real-time data and analytics",
      ]}
      flipCards={[
        {
          icon: <FaIndustry />,
          title: "Industry 4.0",
          desc: "Digital transformation for modern manufacturing.",
        },
        {
          icon: <FaCogs />,
          title: "Process Automation",
          desc: "Streamlined, automated workflows.",
        },
        {
          icon: <FaRobot />,
          title: "Robotics",
          desc: "Advanced robotics for assembly and inspection.",
        },
      ]}
      highlights={[
        {
          icon: <FaTools />,
          label: "Smart Maintenance",
          text: "Predictive and preventive maintenance.",
        },
        {
          icon: <FaBolt />,
          label: "Energy Efficiency",
          text: "Optimized energy use and sustainability.",
        },
        {
          icon: <FaChartLine />,
          label: "Data Insights",
          text: "Real-time analytics for better decisions.",
        },
      ]}
      innovationImages={[
        {
          src: "/assets/WhatsApp Image 2025-07-14 at 16.00.30_249d70fd.jpg",
          text: "Smart Factory",
          className: "industry-img-responsive",
        },
        {
          src: "/assets/WhatsApp Image 2025-07-14 at 15.53.48_94ba862d.jpg",
          text: "Robotics",
          className: "industry-img-responsive",
        },
        {
          src: "/assets/WhatsApp Image 2025-07-14 at 15.53.50_373b15ba.jpg",
          text: "Predictive Maintenance",
          className: "industry-img-responsive",
        },
      ]}
    />
  );
}

import React from "react";
import IndustryDetail from "./IndustryDetail";
import {
  FaBroadcastTower,
  FaWifi,
  FaNetworkWired,
  FaMobileAlt,
  FaCloud,
  FaSatellite,
} from "react-icons/fa";

export default function Telecom() {
  return (
    <IndustryDetail
      heroBg="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660757/innovation-bg_nej4bw.mp4"
      heroTitle="Telecom"
      heroDesc="Empowering global connectivity with next-gen telecom, 5G, and cloud communication solutions."
      solutions={[
        {
          img: "/assets/WhatsApp Image 2025-07-14 at 15.57.05_591dd072.jpg",
          title: "5G Networks",
          desc: "Ultra-fast, low-latency 5G for seamless connectivity and IoT.",
          className: "industry-img-responsive",
        },
        {
          img: "/assets/WhatsApp Image 2025-07-14 at 15.57.04_f9723d5d.jpg",
          title: "Cloud Communications",
          desc: "Unified, scalable cloud-based telecom platforms.",
          className: "industry-img-responsive",
        },
        {
          img: "/assets/WhatsApp Image 2025-07-14 at 15.57.06_1fbe36b8.jpg",
          title: "Network Security",
          desc: "Robust security for critical telecom infrastructure.",
          className: "industry-img-responsive",
        },
      ]}
      benefits={[
        "Global, reliable connectivity",
        "Scalable cloud platforms",
        "Secure, resilient networks",
        "Faster deployment and upgrades",
        "IoT and smart device integration",
      ]}
      flipCards={[
        {
          icon: <FaBroadcastTower />,
          title: "5G Rollout",
          desc: "Next-gen wireless for speed and capacity.",
        },
        {
          icon: <FaWifi />,
          title: "Wi-Fi Everywhere",
          desc: "Seamless wireless for homes, offices, and cities.",
        },
        {
          icon: <FaNetworkWired />,
          title: "Network Automation",
          desc: "AI-driven network management and optimization.",
        },
      ]}
      highlights={[
        {
          icon: <FaMobileAlt />,
          label: "Mobile First",
          text: "Optimized for smartphones and smart devices.",
        },
        {
          icon: <FaCloud />,
          label: "Cloud Native",
          text: "Flexible, scalable telecom services.",
        },
        {
          icon: <FaSatellite />,
          label: "Satellite Comms",
          text: "Global coverage and redundancy.",
        },
      ]}
      innovationImages={[
        {
          src: "/assets/WhatsApp Image 2025-07-14 at 15.57.07_da6b87d6.jpg",
          text: "Network Cables",
          className: "industry-img-responsive",
        },
        {
          src: "/assets/WhatsApp Image 2025-07-15 at 12.02.04_f6e55678.jpg",
          text: "Woman with Laptop",
          className: "industry-img-responsive",
        },
        {
          src: "/assets/WhatsApp Image 2025-07-15 at 12.01.55_1969bff6.jpg",
          text: "Satellite Dish",
          className: "industry-img-responsive",
        },
      ]}
    />
  );
}

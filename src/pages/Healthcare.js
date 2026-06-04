import React from "react";
import IndustryDetail from "./IndustryDetail";
import {
  FaHeartbeat,
  FaUserMd,
  FaMicroscope,
  FaStethoscope,
  FaBrain,
  FaHospitalSymbol,
} from "react-icons/fa";

export default function Healthcare() {
  return (
    <IndustryDetail
      heroBg="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660762/healthcarevideo_tzc4rt.mp4"
      heroTitle="Healthcare"
      heroDesc="Empowering healthcare with digital innovation, AI, and secure patient care."
      solutions={[
        {
          img: "/assets/WhatsApp Image 2025-07-14 at 15.21.01_88832846.jpg",
          title: "Telemedicine",
          desc: "Remote consultations and care delivery with secure video and data.",
        },
        {
          img: "/assets/WhatsApp Image 2025-07-14 at 15.21.01_c2288bb1.jpg",
          title: "Modern Clinics",
          desc: "State-of-the-art clinics for advanced healthcare.",
        },
        {
          img: "/assets/WhatsApp Image 2025-07-14 at 15.21.01_e74d982d.jpg",
          title: "Eye Checkup",
          desc: "Comprehensive eye care and diagnostics.",
        },
      ]}
      benefits={[
        "Improved patient outcomes",
        "24/7 access to care",
        "Data-driven decision making",
        "Enhanced privacy and security",
        "Cost-effective digital solutions",
      ]}
      flipCards={[
        {
          icon: <FaHeartbeat />,
          title: "Remote Monitoring",
          desc: "Continuous patient monitoring and alerts for proactive care.",
        },
        {
          icon: <FaUserMd />,
          title: "Expert Networks",
          desc: "Connect with specialists worldwide for second opinions.",
        },
        {
          icon: <FaMicroscope />,
          title: "Lab Automation",
          desc: "Streamlined lab workflows and faster results.",
        },
      ]}
      highlights={[
        {
          icon: <FaStethoscope />,
          label: "Telehealth",
          text: "Virtual visits and e-prescriptions.",
        },
        {
          icon: <FaBrain />,
          label: "AI Insights",
          text: "Predictive analytics for better outcomes.",
        },
        {
          icon: <FaHospitalSymbol />,
          label: "Smart Hospitals",
          text: "IoT-enabled, connected care.",
        },
      ]}
      innovationImages={[
        {
          src: "/assets/WhatsApp Image 2025-07-14 at 15.21.02_d13066fa.jpg",
          text: "Doctor Consultation",
        },
        {
          src: "/assets/WhatsApp Image 2025-07-14 at 15.30.05_1dc35a77.jpg",
          text: "Medical Clinic",
        },
        {
          src: "/assets/WhatsApp Image 2025-07-15 at 11.25.42_b3a6dc6a.jpg",
          text: "Eye Checkup",
        },
      ]}
    />
  );
}

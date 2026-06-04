import React from "react";
import IndustryDetail from "./IndustryDetail";
import {
  FaUniversity,
  FaChartLine,
  FaLock,
  FaMoneyBillWave,
  FaRobot,
  FaUsers,
} from "react-icons/fa";

export default function BankingFinance() {
  return (
    <IndustryDetail
      heroBg="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660724/bank11_i6irjd.mp4"
      heroTitle="Banking & Finance"
      heroDesc="Driving digital transformation in banking and finance with secure, intelligent, and customer-centric solutions."
      solutions={[
        {
          img: "/assets/WhatsApp Image 2025-07-14 at 15.30.06_84bd4880.jpg",
          title: "Digital Payments",
          desc: "Seamless, secure, and instant payment solutions for customers and businesses.",
          className: "industry-img-responsive",
        },
        {
          img: "/assets/WhatsApp Image 2025-07-14 at 15.30.06_1b82c5de.jpg",
          title: "Wealth Management",
          desc: "AI-powered analytics for smarter investment and portfolio management.",
          className: "industry-img-responsive",
        },
        {
          img: "/assets/WhatsApp Image 2025-07-14 at 15.30.06_5c71b714.jpg",
          title: "Risk & Compliance",
          desc: "Automated compliance and fraud detection with advanced analytics.",
          className: "industry-img-responsive",
        },
      ]}
      benefits={[
        "Faster, safer transactions",
        "Personalized banking experiences",
        "Regulatory compliance",
        "Fraud prevention and risk management",
        "24/7 digital access",
      ]}
      flipCards={[
        {
          icon: <FaChartLine />,
          title: "Real-Time Analytics",
          desc: "Monitor transactions and trends instantly for better decisions.",
        },
        {
          icon: <FaLock />,
          title: "Cybersecurity",
          desc: "Protect customer data and assets with multi-layered security.",
        },
        {
          icon: <FaMoneyBillWave />,
          title: "Smart Lending",
          desc: "Automated loan approvals and credit scoring.",
        },
      ]}
      highlights={[
        {
          icon: <FaUniversity />,
          label: "Digital Banking",
          text: "Mobile-first, omnichannel banking.",
        },
        {
          icon: <FaRobot />,
          label: "AI Automation",
          text: "Chatbots, robo-advisors, and process automation.",
        },
        {
          icon: <FaUsers />,
          label: "Customer Focus",
          text: "Personalized service and engagement.",
        },
      ]}
      innovationImages={[
        {
          src: "/assets/WhatsApp Image 2025-07-15 at 11.30.32_ee13cba9.jpg",
          text: "Stock Market",
          className: "industry-img-responsive",
        },
        {
          src: "/assets/WhatsApp Image 2025-07-15 at 11.30.32_106662f2.jpg",
          text: "Euro Coins",
          className: "industry-img-responsive",
        },
        {
          src: "/assets/WhatsApp Image 2025-07-15 at 11.31.55_e9314b6f.jpg",
          text: "Stock Tips",
          className: "industry-img-responsive",
        },
      ]}
    />
  );
}

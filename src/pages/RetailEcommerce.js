import React from "react";
import IndustryDetail from "./IndustryDetail";
import {
  FaShoppingCart,
  FaMobileAlt,
  FaChartBar,
  FaBoxOpen,
  FaRobot,
  FaSmile,
} from "react-icons/fa";

export default function RetailEcommerce() {
  return (
    <IndustryDetail
      heroBg="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660845/E-commerce_vyas9v.mp4"
      heroTitle="Retail & E-commerce"
      heroDesc="Transforming retail with digital commerce, automation, and personalized customer experiences."
      solutions={[
        {
          img: "/assets/WhatsApp Image 2025-07-14 at 15.30.06_1b82c5de.jpg",
          title: "Omnichannel Commerce",
          desc: "Seamless integration of online and offline sales channels.",
          className: "industry-img-responsive",
        },
        {
          img: "/assets/WhatsApp Image 2025-07-14 at 15.30.06_5c71b714.jpg",
          title: "Smart Packaging",
          desc: "Eco-friendly and efficient packaging for modern retail.",
          className: "industry-img-responsive",
        },
        {
          img: "/assets/WhatsApp Image 2025-07-14 at 15.47.54_738eb34f.jpg",
          title: "Online Shopping",
          desc: "Convenient and secure online shopping experiences.",
          className: "industry-img-responsive",
        },
      ]}
      benefits={[
        "Frictionless customer journeys",
        "Real-time inventory and order tracking",
        "Personalized marketing and offers",
        "Secure payments and data",
        "Scalable, cloud-based platforms",
      ]}
      flipCards={[
        {
          icon: <FaShoppingCart />,
          title: "Seamless Checkout",
          desc: "Fast, secure, and user-friendly checkout experiences.",
        },
        {
          icon: <FaMobileAlt />,
          title: "Mobile Commerce",
          desc: "Shop anywhere, anytime with responsive mobile apps.",
        },
        {
          icon: <FaChartBar />,
          title: "Sales Analytics",
          desc: "Actionable insights to boost sales and engagement.",
        },
      ]}
      highlights={[
        {
          icon: <FaBoxOpen />,
          label: "Smart Fulfillment",
          text: "Automated, efficient order processing.",
        },
        {
          icon: <FaRobot />,
          label: "AI Personalization",
          text: "Tailored recommendations and offers.",
        },
        {
          icon: <FaSmile />,
          label: "Customer Loyalty",
          text: "Reward programs and retention strategies.",
        },
      ]}
      innovationImages={[
        {
          src: "/assets/WhatsApp Image 2025-07-14 at 15.47.54_665320ac.jpg",
          text: "Retail Cart & Bag",
          className: "industry-img-responsive",
        },
        {
          src: "/assets/WhatsApp Image 2025-07-14 at 15.47.54_e704b0c3.jpg",
          text: "Retail Boxes",
          className: "industry-img-responsive",
        },
        {
          src: "/assets/WhatsApp Image 2025-07-14 at 15.47.55_db169886.jpg",
          text: "Online Shopping",
          className: "industry-img-responsive",
        },
      ]}
    />
  );
}

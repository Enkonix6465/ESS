import React from "react";
import IndustryDetail from "./IndustryDetail";
import {
  FaChalkboardTeacher,
  FaLaptop,
  FaBook,
  FaGraduationCap,
  FaCloud,
  FaUsers,
} from "react-icons/fa";

export default function Education() {
  return (
    <IndustryDetail
      heroBg="https://res.cloudinary.com/dhpgznidl/video/upload/v1752660863/WhatsApp_Video_2025-07-16_at_15.10.56_7fd391eb_pqcjes.mp4"
      heroTitle="Education"
      heroDesc="Transforming education with digital learning, smart classrooms, and global connectivity."
      solutions={[
        {
          img: "/assets/pexels-julia-m-cameron-4144923.jpg",
          title: "E-Learning Platforms",
          desc: "Interactive, accessible online education for all ages.",
          className: "industry-img-responsive",
        },
        {
          img: "/assets/pexels-pixabay-289737.jpg",
          title: "Smart Classrooms",
          desc: "Technology-enabled classrooms for immersive learning.",
          className: "industry-img-responsive",
        },
        {
          img: "/assets/pexels-max-fischer-5212345.jpg",
          title: "Student Analytics",
          desc: "Data-driven insights to personalize and improve learning outcomes.",
          className: "industry-img-responsive",
        },
      ]}
      benefits={[
        "Accessible, flexible learning",
        "Personalized education paths",
        "Global classroom connectivity",
        "Real-time progress tracking",
        "Engaging, interactive content",
      ]}
      flipCards={[
        {
          icon: <FaChalkboardTeacher />,
          title: "Virtual Classrooms",
          desc: "Live, interactive lessons from anywhere.",
        },
        {
          icon: <FaLaptop />,
          title: "EdTech Tools",
          desc: "Modern apps and platforms for teachers and students.",
        },
        {
          icon: <FaBook />,
          title: "Digital Libraries",
          desc: "Access to resources and research worldwide.",
        },
      ]}
      highlights={[
        {
          icon: <FaGraduationCap />,
          label: "Lifelong Learning",
          text: "Continuous education for all ages.",
        },
        {
          icon: <FaCloud />,
          label: "Cloud Learning",
          text: "Scalable, on-demand education.",
        },
        {
          icon: <FaUsers />,
          label: "Collaboration",
          text: "Group projects and peer learning.",
        },
      ]}
      innovationImages={[
        {
          src: "/assets/WhatsApp Image 2025-07-14 at 16.05.22_7ffa55c0.jpg",
          text: "E-Learning",
          className: "industry-img-responsive",
        },
        {
          src: "/assets/WhatsApp Image 2025-07-15 at 12.06.13_c9af5a5f.jpg",
          text: "Smart Classroom",
          className: "industry-img-responsive",
        },
        {
          src: "/assets/WhatsApp Image 2025-07-15 at 12.05.59_1129c33e.jpg",
          text: "Student Analytics",
          className: "industry-img-responsive",
        },
      ]}
    />
  );
}

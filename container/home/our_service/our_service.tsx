"use client";
import React from 'react';
import OurService from '@/container/All-props-comp/our_service/our_service';

const OurServiceSection = () => {
  const servicesData = [
    {
      title: "GED Test Help",
      description: "Research, structure and take GED test at a professional level according to certification standards.",
      image: "/home/4.png",
      link: "/take-my-ged-exam"
    },
    {
      title: "GRE Test Help",
      description: "We are offering you the best experts for GRE test preparation for your GRE certification completion.",
      image: "/home/5.jpg",
      link: "/take-my-gre-exam"
    },
    {
      title: "ATI TEASE Test Help",
      description: "Reliable assistance to complete the online ATI TEASE test accurately and on time.",
      image: "/home/6.jpg",
      link: "/take-my-teas-exam"
    },
    {
      title: "PMP Exam Help",
      description: "Our qualified and professional experts will help you pass your PMP certification exam with higher grades.",
      image: "/home/7.jpg",
      link: "/take-my-pmp-exam"
    },
    {
      title: "GMAT Test Help",
      description: "Help understanding lessons, getting through GMAT Test, and get your online certification for you.",
      image: "/home/8.jpg",
      link: "/take-my-gmat-exam"
    },
    {
      title: "HESI Exam Help",
      description: "Assistance with researching, structuring, and formatting your HESI exam for a clean, professional appearance.",
      image: "/home/9.jpg",
      link: "/take-my-hesi-exam"
    },
  ];

  return (
    <OurService 
      services={servicesData}
      h6="Our Services"
      h4="Hire Someone to Take My Exam"
      description="We provide 24/7 assistance for all forms of online classes, courses, or examinations, including proctored exams, quizzes, and other exam types, with a 100% success guarantee.
"
    />
  );
};

export default OurServiceSection;

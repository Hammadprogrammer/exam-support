"use client";
import React from 'react';
import OurService from '@/container/All-props-comp/our_service/our_service';

const OurServiceSection = () => {
  const servicesData = [
    {
      title: "Online Exam Help",
      description: "Expert guidance and support to tackle online exams confidently and achieve better grades.",
      image: "/service/1.jpg",
      link: "/online-exam-help"
    },
    {
      title: "Proctored Exam Help",
      description: "Expert assistance for tests taken under proctor-supervised conditions.",
      image: "/service/2.png",
      link: "/proctored-exam-help"
    },
    {
      title: "Online Test & Quizzes",
      description: "Assistance with organizing test materials, interpreting subjects, and efficiently completing test requirements.",
      image: "/service/3.jpg",
      link: "/online-tests-quizzes"
    },
    {
      title: "GED Test Help",
      description: "Research, structure and take GED test at a professional level according to certification standards.",
      image: "/service/4.png",
      link: "/online-ged-test"
    },
    {
      title: "GRE Test Help",
      description: "We are offering you the best experts for GRE test preparation for your GRE certification completion.",
      image: "/service/5.png",
      link: "/online-gre-test"
    },
    {
      title: "ATI TEASE Test Help",
      description: "Reliable assistance to complete the online ATI TEASE test accurately and on time.",
      image: "/service/6.jpg",
      link: "/online-teas-test"
    },
    {
      title: "PMP Exam Help",
      description: "Our qualified and professional experts will help you pass your PMP certification exam with higher grades.",
      image: "/service/7.jpg",
      link: "/online-pmp-exam"
    },
    {
      title: "GMAT Test Help",
      description: "Help understanding lessons, getting through GMAT Test, and get your online certification for you.",
      image: "/service/8.jpg",
      link: "/online-gmat-exam"
    },
    {
      title: "HESI Exam Help",
      description: "Assistance with researching, structuring, and formatting your HESI exam for a clean, professional appearance.",
      image: "/service/9.jpg",
      link: "/online-hesi-exam"
    },
    {
      title: "PSI Exam Help",
      description: "Receive tailored support for PSI exam taken via professionals with secure and stable performance.",
      image: "/service/4.png",
      link: "/online-psi-exam"
    }
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

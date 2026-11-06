"use client";
import React from 'react';
import OurService from '@/container/All-props-comp/our_service/our_service';

const OurServiceSection = () => {
  const servicesData = [
    {
      title: "Online Exam Help",
      description: "Our tutors go through your course material, pick out what’s most likely to show up, and practice it with you until you feel confident.",
      image: "/stow.jpg",
      link: "/online-exam-help"
    },
    {
      title: "Proctored Exam Help",
      description: "Webcams and timers can make anyone nervous. We run timed mock tests under real conditions, so test day feels familiar.",
      image: "/img/cards/proctored-exam-help.png",
      link: "/proctored-exam-help"
    },
    {
      title: "Online Tests & Quizzes",
      description: "Weekly quizzes seem small, until you realize they’re worth 20% of your grade. We keep it simple: a quick session each week, go over what’s coming, and you’re good to go.",
      image: "/img/cards/online-test-and-quizzes.png",
      link: "/online-tests-quizzes"
    },
    {
      title: "GRE Test Help",
      description: "Our multi-talented expert can help you with your GRE too. We ensure you can build strategies that save time and boost your score.",
      image: "/img/cards/gre-test-help.png",
      link: "/online-gre-test"
    },
    {
      title: "HESI Exam Help",
      description: "From A2 to exit exams, we review key topics and practice question types you can solve on exam day.",
      image: "/img/cards/hesi-exam-help.png",
      link: "/online-hesi-exam"
    },
    {
      title: "PSI Exam Help",
      description: "Licensing exam coming up? Our tutors walk you through the content and give you practice tests that match the PSI format.",
      image: "/img/cards/psi-exam-help.png",
      link: "/online-psi-exam"
    },
    {
      title: "Online Class Help",
      description: "Put your hands on your online class service and boost your grades. Our tutor meets with you weekly to go over lectures and readings, so you can keep track of your coursework.",
      image: "/img/cards/online-class-help.png",
      link: "/online-class-help"
    },
    {
      title: "Online Course Help",
      description: "From week one to the final, our tutors help you manage your coursework and keep moving forward.",
      image: "/img/cards/online-course-help.png",
      link: "/online-course-help"
    },
    {
      title: "GED Test Help",
      description: "Math, science, social studies, and reasoning through language arts, we cover all four with clear lessons and practice.",
      image: "/img/cards/ged-test-help.png",
      link: "/online-ged-test"
    },
    {
      title: "ATI TEAS Test Help",
      description: "Planning for nursing school? We help you prepare for every section of the TEAS with focused review and timed practice.",
      image: "/img/cards/ati-tease-test-help.png",
      link: "/online-teas-test"
    },
    {
      title: "CompTIA Exam Help",
      description: "A+, Network+, Security+: our tutors explain the concepts with real-world examples and help you practice for the exam.",
      image: "/img/cards/comptia-exams.png",
      link: "/comptia-exams"
    },
    {
      title: "Real Estate Exam Help",
      description: "Property laws, contracts, and real estate math- we break it all down so you can walk into your licensing exam with confidence.",
      image: "/img/cards/real-estate-exam.png",
      link: "/real-estate-exam"
    },
    {
      title: "PMP Exam Help",
      description: "Our tutors help you study the PMBOK, understand the exam format, and practice with realistic questions.",
      image: "/img/cards/pmp-exam-help.png",
      link: "/online-pmp-exam"
    },
    {
      title: "Insurance Exam Help",
      description: "Insurance terms can be confusing. Our tutors explain them in plain words and help you get ready for your state licensing exam.",
      image: "/img/cards/insurance-exam.png",
      link: "/insurance-exam"
    },
    {
      title: "GMAT Test Help",
      description: "Our tutors help you work toward strategy, timing, and practice that help you get your target score, one section at a time.",
      image: "/img/cards/gmat-test-help.png",
      link: "/online-gmat-exam"
    },
    {
      title: "Assignment Help",
      description: "Get expert guidance on structuring, researching, and completing your assignments accurately and on time.",
      image: "/img/cards/assignment-help.png",
      link: "/assignment-help"
    }
  ];

  return (
    <OurService 
      services={servicesData}
      h6="Our Services"
      h4="Can Someone Take My Online Exam For Me?"
      description="Yes, we definitely help you solve your problem. So, if you are stressed about your upcoming exam, Exam Support Online has a solution for you. Whether you are worried about a weekly quiz, proctored final, or certification exam, our tutor can take the burden off your shoulders while providing top-quality support at affordable rates."
    />
  );
};

export default OurServiceSection;

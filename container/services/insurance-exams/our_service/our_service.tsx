"use client";
import React from 'react';
import OurService from '@/container/All-props-comp/our_service/our_service';

const OurServiceSection = () => {
  const servicesData = [
    {
      title: "Insurance Licensing Exam Help",
      description: "We offer online insurance exam assistance to students who require additional assistance. Our tutors also provide a comprehensive explanation of challenging subjects.",
      image: "/home/2.png",
      link: "/take-my-insurance-exam"
    },
    {
      title: "Life Insurance Exam Help",
      description: "You will receive assistance from our tutors in comprehending life insurance policies, coverage, and beneficiaries. We also assist you in the preparation of practice questions that are pertinent to these subjects.",
      image: "/home/3.jpg",
      link: "/take-my-insurance-exam"
    },
    {
      title: "Health Insurance Exam Help",
      description: "Help is available regarding health insurance matters, such as claims, deductibles, and various health plans. Every subject is explicated in straightforward language by our tutors.",
      image: "/home/4.png",
      link: "/take-my-insurance-exam"
    },
    {
      title: "Property Insurance Exam Help",
      description: "Our team is available to assist you in expanding your knowledge regarding property insurance and the specific coverage provided by various policies. In addition, we review practice questions with you.",
      image: "/home/5.jpg",
      link: "/take-my-insurance-exam"
    },
    {
      title: "Casualty Insurance Exam Help",
      description: "We provide assistance to students in comprehending insurance claims, damages, and liability. Initially, our instructors provide an explanation of the fundamental concepts, followed by instruction on more complex subjects.",
      image: "/home/6.jpg",
      link: "/take-my-insurance-exam"
    },
    {
      title: "Insurance Laws and Regulations Help",
      description: "Insurance laws may vary from state to state. Our tutors assist you in the study of the license exam's rules and regulations.",
      image: "/home/7.jpg",
      link: "/take-my-insurance-exam"
    },
    {
      title: "Insurance Policy Questions Help",
      description: "Our assistance is provided to clarify any inquiries regarding insurance policies that may appear difficult to comprehend. The wording is clarified by our tutors, and they demonstrate how to identify the correct answer.",
      image: "/home/8.jpg",
      link: "/take-my-insurance-exam"
    },
    {
      title: "Insurance Risk Management Help",
      description: "Examples from everyday life are used by our tutors to elucidate the concept of risk management.",
      image: "/home/9.jpg",
      link: "/take-my-insurance-exam"
    },
    {
      title: "Insurance Underwriting Help",
      description: "We assist with underwriting topics, such as risk assessment and coverage decisions. An explanation of the process is provided by our tutors.",
      image: "/home/10.jpg",
      link: "/take-my-insurance-exam"
    },
    {
      title: "Insurance Claims Help",
      description: "Our team is available to assist you in comprehending the insurance claims process. We will address the entire process, from the initial filing of a claim to the final review of the decision.",
      image: "/home/11.jpg",
      link: "/take-my-insurance-exam"
    },
    {
      title: "Insurance Ethics Help",
      description: "Insurance agents are expected to adhere to ethical standards. We assist you in acquiring this knowledge. In addition, our tutors address scenarios that may be encountered in exam questions.",
      image: "/about/1.jpg",
      link: "/take-my-insurance-exam"
    },
    {
      title: "Insurance Terms and Definitions Help",
      description: "Our instructors assist you in comprehending insurance terminology that is challenging to recall. We explain the significance of these terms and the manner in which they are employed.",
      image: "/about/2.jpg",
      link: "/take-my-insurance-exam"
    },
    {
      title: "Insurance Timed Practice Help",
      description: "Our practice sessions are timed to assist you in managing the time allotted for your exam. Our tutors also assist you in addressing questions that require a longer response time.",
      image: "/about/3.png",
      link: "/take-my-insurance-exam"
    },
    {
      title: "Insurance Practice Test Review",
      description: "After reviewing your practice test responses, our tutors provide an explanation of the areas in which you made errors.",
      image: "/about/4.png",
      link: "/take-my-insurance-exam"
    }
  ];

  return (
    <OurService 
      services={servicesData}
      h6="Our Services"
      h4="Why We Are The Best Insurance Exam Service Provider"
      description="Exam Support Online provides a comprehensive exam solution and gives you the opportunity to get academic success without taking any stress."
    />
  );
};

export default OurServiceSection;

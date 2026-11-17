"use client";
import React from 'react';
import OurService from '@/container/All-props-comp/our_service/our_service';

const OurServiceSection = () => {
  const servicesData = [
    {
      title: "HESI Math Help",
      description: "We show you easy ways to solve dosage math and other complicated parts.",
      image: "/home/2.png",
      link: "/take-my-hesi-exam"
    },
    {
      title: "Reading Comprehension Help",
      description: "Long passages take time; that's why we help you find the main idea fast.",
      image: "/home/3.jpg",
      link: "/take-my-hesi-exam"
    },
    {
      title: "Vocabulary Help",
      description: "Medical words look hard. Our professional tutor breaks them into small parts.",
      image: "/home/4.png",
      link: "/take-my-hesi-exam"
    },
    {
      title: "Grammar Help",
      description: "Our tutor finds your common mistakes and shows you how to fix them.",
      image: "/home/5.jpg",
      link: "/take-my-hesi-exam"
    },
    {
      title: "Anatomy & Physiology Help",
      description: "There are many body systems; our tutor sits with you and breaks down each one step by step.",
      image: "/home/6.jpg",
      link: "/take-my-hesi-exam"
    },
    {
      title: "Biology Help",
      description: "We review the biology you need and skip the rest.",
      image: "/home/7.jpg",
      link: "/take-my-hesi-exam"
    },
    {
      title: "Chemistry Help",
      description: "Chemistry can be tough. We keep it simple and focus on the test.",
      image: "/home/8.jpg",
      link: "/take-my-hesi-exam"
    },
    {
      title: "Critical Thinking Help",
      description: "Which patient comes first? We teach you how to decide.",
      image: "/home/9.jpg",
      link: "/take-my-hesi-exam"
    },
    {
      title: "Fundamentals of Nursing Help",
      description: "Safety and basic care are key. We go over them with you.",
      image: "/home/10.jpg",
      link: "/take-my-hesi-exam"
    },
    {
      title: "Pharmacology Help",
      description: "So many drug names. We group them so they're easy to remember.",
      image: "/home/11.jpg",
      link: "/take-my-hesi-exam"
    },
    {
      title: "Med-Surg Help",
      description: "This is a big part of the exit exam. We cover the most common topics.",
      image: "/about/1.jpg",
      link: "/take-my-hesi-exam"
    },
    {
      title: "Maternity & Pediatrics Help",
      description: "Moms, babies, and kids each have different rules. We help you learn them.",
      image: "/about/2.jpg",
      link: "/take-my-hesi-exam"
    },
    {
      title: "Mental Health Nursing Help",
      description: "We explain common disorders and how to talk to patients.",
      image: "/about/3.png",
      link: "/take-my-hesi-exam"
    },
    {
      title: "HESI Practice Test Help",
      description: "Take a practice test. Then we go over your mistakes together.",
      image: "/about/4.png",
      link: "/take-my-hesi-exam"
    },
    {
      title: "HESI Retake Help",
      description: "Need a better score? We focus on the parts you missed.",
      image: "/home/1.png",
      link: "/take-my-hesi-exam"
    }
  ];

  return (
    <OurService 
      services={servicesData}
      h6="Our Services"
      h4="Take My HESI Exam Help For All Your Exam Needs"
      description="We have vetted professionals who are assisting students across various HESI exam subjects. Here are some of the most requested sections students often ask for help with."
    />
  );
};

export default OurServiceSection;

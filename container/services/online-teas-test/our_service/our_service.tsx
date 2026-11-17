"use client";
import React from 'react';
import OurService from '@/container/All-props-comp/our_service/our_service';

const OurServiceSection = () => {
  const servicesData = [
    {
      title: "TEAS Study Plan Help",
      description: "Our tutor is available to set up a study schedule that works for you, whether you have weeks or just a few days.",
      image: "/home/2.png",
      link: "#"
    },
    {
      title: "TEAS Reading Help",
      description: "Running out of time while reading? Our expert professional will help you understand passages more quickly and find answers without getting stuck.",
      image: "/home/3.jpg",
      link: "#"
    },
    {
      title: "Key Ideas & Details Help",
      description: "We practice picking out important details and understanding what the passage says, which helps make it simple and easier.",
      image: "/home/4.png",
      link: "#"
    },
    {
      title: "Craft & Structure Help",
      description: "Confused by the writer's tone or purpose? Our tutor will show you simple ways to understand these questions.",
      image: "/home/5.jpg",
      link: "#"
    },
    {
      title: "TEAS Math Help",
      description: "Forgot fractions, percentages, or algebra? We'll brush up on the basics and work through questions you're struggling with.",
      image: "/home/6.jpg",
      link: "/take-my-math-exam-for-me"
    },
    {
      title: "Word Problems Help",
      description: "Long math questions can be confusing. We help you spot the useful numbers and figure out what needs solving.",
      image: "/home/7.jpg",
      link: "#"
    },
    {
      title: "Measurement & Data Help",
      description: "From graphs to unit conversions, we'll practice different questions until you feel more comfortable answering them.",
      image: "/home/8.jpg",
      link: "#"
    },
    {
      title: "TEAS Science Help",
      description: "Too many science topics to remember? We'll split them into smaller lessons and revise what you find difficult.",
      image: "/home/9.jpg",
      link: "#"
    },
    {
      title: "Anatomy & Physiology Help",
      description: "Learn how the heart, lungs, bones, and other body systems work, with clear explanations from your tutor.",
      image: "/home/10.jpg",
      link: "/take-my-biology-exam-for-me"
    },
    {
      title: "Biology & Chemistry Help",
      description: "We'll cover the biology and chemistry topics included in the TEAS, without adding lessons you don't need.",
      image: "/home/11.jpg",
      link: "/take-my-chemistry-exam-for-me"
    },
    {
      title: "Scientific Reasoning Help",
      description: "Struggling with experiment questions? We'll teach you how to read results, compare information, and choose suitable answers.",
      image: "/home/1.png",
      link: "#"
    },
    {
      title: "TEAS English Help",
      description: "Grammar, spelling, or punctuation giving you trouble? We'll review the rules and practice fixing common mistakes.",
      image: "/about/1.jpg",
      link: "/take-my-english-exam-for-me"
    },
    {
      title: "Vocabulary Help",
      description: "Unfamiliar words don't have to slow you down. Learn how word roots and prefixes can help you understand their meaning.",
      image: "/home/hero.jpg",
      link: "/take-my-english-exam-for-me"
    },
    {
      title: "TEAS Practice Test Help",
      description: "Take a timed practice exam, sit with our tutor, review your mistakes, and find out which topics need another look.",
      image: "/home/2.png",
      link: "#"
    },
    {
      title: "TEAS Retake Help",
      description: "Didn't get your target score? We'll review your previous results and focus on the sections that need improvement.",
      image: "/home/3.jpg",
      link: "#"
    }
  ];

  return (
    <OurService 
      services={servicesData}
      h6="Our Services"
      h4="Why Everyone is Taking Our Online TEAS Exam Help"
      description="Well, that's too clear; we are not just delivering results in a single subject. We have comprehensive knowledge in diverse subjects while making your work delivered in a timely manner."
    />
  );
};

export default OurServiceSection;

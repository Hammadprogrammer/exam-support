"use client";
import React from 'react';
import OurService from '@/container/All-props-comp/our_service/our_service';

const OurServiceSection = () => {
  const servicesData = [
    {
      title: "GMAT Study Plan Help",
      description: "Our tutors provide custom study plans built around your test date. Whether you have two months or two weeks, we plan it with you.",
      image: "/home/2.png",
      link: "#"
    },
    {
      title: "Quantitative Reasoning Help",
      description: "Here, we give you faster ways to solve GMAT math. The questions aren't too hard. It's the timer that makes them tough.",
      image: "/home/3.jpg",
      link: "#"
    },
    {
      title: "Arithmetic & Algebra Help",
      description: "We provide quick refreshers on fractions, ratios, and equations. Perfect if school math feels like a long time ago.",
      image: "/home/4.png",
      link: "#"
    },
    {
      title: "Word Problems Help",
      description: "You get help with those long, wordy math questions. Our tutor shows you which details matter and which ones you can skip.",
      image: "/home/5.jpg",
      link: "#"
    },
    {
      title: "Verbal Reasoning Help",
      description: "We offer support for slow reading and missed details, two of the most common verbal problems.",
      image: "/home/6.jpg",
      link: "#"
    },
    {
      title: "Critical Reasoning Help",
      description: "We give you practice with strengthen, weaken, and assumption questions until you can spot the pattern quickly.",
      image: "/home/7.jpg",
      link: "#"
    },
    {
      title: "Reading Comprehension Help",
      description: "Dense passages with little time? We provide guided practice, so they stop feeling like a wall of text.",
      image: "/home/8.jpg",
      link: "#"
    },
    {
      title: "Data Insights Help",
      description: "This section is part math, part logic. We offer step-by-step help with each question type.",
      image: "/home/9.jpg",
      link: "#"
    },
    {
      title: "Data Sufficiency Help",
      description: "Here, we show you a simple trick: most of the time, you don't need the final answer. You just need to know if you could find it.",
      image: "/home/10.jpg",
      link: "#"
    },
    {
      title: "Table & Graph Analysis Help",
      description: "We provide timed practice with charts and tables, so you can read them fast and correctly.",
      image: "/home/11.jpg",
      link: "#"
    },
    {
      title: "Multi-Source Reasoning Help",
      description: "You get guidance on handling several tabs of information. Our tutor teaches you where to look first.",
      image: "/home/1.png",
      link: "#"
    },
    {
      title: "GMAT Mock Test Help",
      description: "We offer full-length practice tests. Afterward, your tutor goes over every mistake with you.",
      image: "/about/1.jpg",
      link: "#"
    },
    {
      title: "Time Management Help",
      description: "We give you a pacing plan for each section, so you know when to move on from a hard question.",
      image: "/home/hero.jpg",
      link: "#"
    },
    {
      title: "Score Improvement Help",
      description: "We provide a full review of your score report and focus on the easiest points to win back.",
      image: "/home/2.png",
      link: "#"
    },
    {
      title: "Test Day Strategy Help",
      description: "We offer a simple test-day plan, so you walk in calm and ready.",
      image: "/home/3.jpg",
      link: "#"
    }
  ];

  return (
    <OurService 
      services={servicesData}
      h6="Our Services"
      h4="Why Does It Make Sense To Pay Someone To Take My GMAT Exam?"
      description="We know that the GMAT is tough, time-consuming, and stressful. That's why we make things easy for you; you can easily use our service with top professors at an affordable price."
    />
  );
};

export default OurServiceSection;

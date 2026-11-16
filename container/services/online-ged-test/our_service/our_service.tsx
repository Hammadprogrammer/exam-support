"use client";
import React from 'react';
import OurService from '@/container/All-props-comp/our_service/our_service';

const OurServiceSection = () => {
  const servicesData = [
    {
      title: "GED Math Help",
      description: "Math is not easy for everyone, and that’s okay. Whether it’s fractions, percentages, or word problems tripping you up, our tutor explains each and every concept until it makes sense to you.",
      image: "/home/2.png",
      link: "/math-exam"
    },
    {
      title: "GED Science Help",
      description: "Some science questions require keen attention. We help you read the information clearly and find what you need without second-guessing yourself.",
      image: "/home/3.jpg",
      link: "#"
    },
    {
      title: "GED Language Arts Help",
      description: "Reading or writing giving you trouble? We focus on the parts you find hardest, whether that’s making sense of a passage or turning your ideas into clear sentences.",
      image: "/home/4.png",
      link: "/english-exam"
    },
    {
      title: "GED Social Studies Help",
      description: "There’s a fair amount to cover here. From American history to how government works, we help you understand the topics that actually show up on the GED.",
      image: "/home/5.jpg",
      link: "/history-exam"
    },
    {
      title: "GED Algebra Help",
      description: "Equations can be frustrating, especially when you don’t know where to start. Our tutor shows you how they work, then gives you a few to try on your own.",
      image: "/home/6.jpg",
      link: "/algebra-exam"
    },
    {
      title: "GED Geometry Help",
      description: "Area, angles, shapes, and a pile of formulas — forgotten how they fit together? No problem. We go over them with practice questions until they click.",
      image: "/home/7.jpg",
      link: "/math-exam"
    },
    {
      title: "GED Reading Help",
      description: "Ever finish a whole passage and still have no idea what the question wants? We help you spot the right part.",
      image: "/home/8.jpg",
      link: "/english-exam"
    },
    {
      title: "GED Writing Help",
      description: "You know what you want to say; getting it on paper is the hard part. We help you organize your thoughts so your answers are clear and easy to follow.",
      image: "/home/9.jpg",
      link: "/english-exam"
    },
    {
      title: "GED Grammar Help",
      description: "Not sure where the comma goes, or why a sentence just sounds off? We walk through the most common grammar slip-ups and show you how to fix them.",
      image: "/home/10.jpg",
      link: "/english-exam"
    },
    {
      title: "GED Life Science Help",
      description: "From cells to the human body, there’s plenty to take in. We keep explanations simple and spend extra time on whatever you’re finding tough.",
      image: "/home/11.jpg",
      link: "/biology-exam"
    },
    {
      title: "GED Physical Science Help",
      description: "Forces, motion, energy — these click much faster when you see them in everyday situations, and that’s exactly how we teach them.",
      image: "/home/1.png",
      link: "/physics-exam"
    },
    {
      title: "GED Earth and Space Science Help",
      description: "Instead of memorizing tricky definitions, you’ll focus on actually understanding what they mean.",
      image: "/about/1.jpg",
      link: "#"
    },
    {
      title: "GED History Help",
      description: "You don’t have to memorize every date. We help you connect events to the bigger picture, so the timeline makes sense and sticks.",
      image: "/home/hero.jpg",
      link: "/history-exam"
    }
  ];

  return (
    <OurService 
      services={servicesData}
      h6="Our Services"
      h4="Subjects We Cover for GED Exam Help"
      description="Exam Support Online is not just for when you feel you can't handle it. Come to us for professionals, exam preparation, and time-saving solutions. We help you achieve GED exam success in just a few steps."
    />
  );
};

export default OurServiceSection;

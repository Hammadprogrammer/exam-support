"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Pay Our Experts Without Any Upfront Fees",
            heading: <>Want To Hire Someone To Take My Online GMAT Exam?</>,
            subText: <p>Take your exam without any risk by getting expert help with your GMAT exam. Look no further, as Exam Support Online promises to help you achieve top grades without a lengthy preparation timeline, repeated retakes, or any compromise on your MBA goals.</p>,
            bullets: [
              "Expert Professionals",
              "Flexible Scheduling",
              "Dedicated Support Team",
              "Safe and Reliable Process"
            ],
            bgImage: "/home/1.png"
          },
          {
            topText: "Expert GMAT Exam Help",
            heading: <>Hire Our Expert Tutor for GMAT Tailored Support</>,
            subText: <p>Attempting the GMAT alone demands months of intense preparation, expensive mock exams, and endless anxiety. So, when you hire a GMAT professional, you can bypass your exam stress in a single go. And here, we provide tailored solutions according to your requirements. Plus, our aim is to help you succeed in your GMAT exam while maintaining your confidentiality and meeting your requirements at the same time.</p>,
            bullets: [
              "Expert Professionals",
              "Flexible Scheduling",
              "Dedicated Support Team",
              "Safe and Reliable Process"
            ],
            bgImage: "/home/9.jpg"
          },
          {
            topText: "Guaranteed Top Scores",
            heading: <>Pay Someone to Take My GMAT Exam, Succeed in Every Section With Confidence!</>,
            subText: <p>If you are looking to pay someone to take the GMAT exam for you, it is not just about convenience; it is about making a smart move towards guaranteed success. Our experts are trained to help you excel in every section of the GMAT. Here, we know exactly how to approach each segment with strategy, speed, and accuracy. And we have a number of students who have achieved the highest scores with us, so you don’t need to take on any more stress.</p>,
            bullets: [
              "Expert Professionals",
              "Flexible Scheduling",
              "Dedicated Support Team",
              "Safe and Reliable Process"
            ],
            bgImage: "/home/hero.jpg"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;

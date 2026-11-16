"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Quick & Reliable Support",
            heading: <>Hire Someone to Take My Sociology Exam With Guaranteed Exam Success</>,
            subText: (
              <p>
                At Exam Support Online, our excellent sociology exam help is the
                best way to solve your issues. Our experts are experienced and
                have a strong interest in sociology, so they fully understand
                the subject, ensuring you get the support you need. So, no
                matter what problem you face, we help you with:
              </p>
            ),
            bullets: [
              "Subject Expert",
              "Secure IP Login",
              "Money-Back Guarantee",
              "Support to Help You Aim for A or B Grades",
              "Stress-Free Exam Preparation"
            ],
            bgImage: "/home/1.png" 
          }
        ]}
      />
    </>
  );
}

export default HeroSection;
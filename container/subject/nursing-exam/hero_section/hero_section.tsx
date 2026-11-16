"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Feeling Overwhelmed?",
            heading: <>Hire Someone To Take My Nursing Exam and Get the Best of the Best</>,
            subText: (
              <p>
                Nursing is not as easy as it looks. Many students find it
                difficult to balance never-ending exams, lectures, and clinical
                rotations. Exam Support Online provides time-saving assistance
                and professional guidance to all students across the USA. Our
                team of nursing specialists helps students prepare for
                challenging tests and assessments with a focus on accuracy and
                confidentiality.
              </p>
            ),
            bullets: [
              "Simple Process",
              "Safe and Secure",
              "Guaranteed Result",
              "Money-Back Guarantee"
            ],
            bgImage: "/home/9.jpg" 
          }
        ]}
      />
    </>
  );
}

export default HeroSection;
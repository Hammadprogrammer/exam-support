"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Chemistry Exam Help",
            heading: <>Pay Someone To Take My Chemistry Exam For Me and Help Me Score Higher</>,
            subText: (
              <p>
                Whenever you are studying chemistry and facing difficulty in achieving your desired marks, you no longer have to worry about it. At Exam Support Online, we have a specialized team of chemistry experts who can help you prepare for your exams with correct calculations, formulas, and proper solutions to complex reactions. We aim to provide quality grades at very affordable prices. With years of hands-on experience in the same field, our expert tutors understand your requirements and try their best to satisfy them.
              </p>
            ),
            bullets: [
              "Smart Study Plans",
              "Expert Chemistry Tutors",
              "Secure and Private",
              "Affordable Prices"
            ],
            bgImage: "/img/subject/hero-section-bg-img.jpg"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;

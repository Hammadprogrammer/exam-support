"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Math Exam Help",
            heading: <>Take My Math Exam and Secure A and B Grades with Professional Service</>,
            subText: (
              <p>
                The aim of every student is to score high on their Math Exam. In fact, they can, but the real challenge is managing time and responsibilities. Online exams are timed, method-marked, and unforgiving; one bad week or a frozen moment can ruin the whole grade. If you are looking for online math exam help, you are in the right place. Our PhD-level mathematicians guide you through various math subjects without making you overpay for the assistance you need.
              </p>
            ),
            bullets: [
              "Smart Study Plans",
              "Expert Math Tutors",
              "Less Stress",
              "Real Progress"
            ],
            bgImage: "/img/subject/hero-section-bg-img.jpg" 
          }
        ]}
      />
    </>
  );
}

export default HeroSection;
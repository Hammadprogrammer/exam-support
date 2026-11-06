"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Biology Exam Help",
            heading: <>Your Biology Exam Help Is Just One Click Away!</>,
            subText: (
              <p>
                At Exam Support Online, we make online exams simple and manageable. It is our mission to deliver the desired grades so you can handle the rest of the academic work. We help you get ready for your online exam. Your tutor looks at your syllabus with you, explains the parts you find hard, and gives you questions to practice.
              </p>
            ),
            bullets: [
              "Expert Biology Tutors",
              "Secure and Private",
              "Fast Completion",
              "Affordable Pricing"
            ],
            bgImage: "/img/subject/hero-section-bg-img.jpg"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;

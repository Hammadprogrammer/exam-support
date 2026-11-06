"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Finance Exam Help",
            heading: <>Hire an Expert Professional to Help Me with My Finance Exam and Secure Better Grades</>,
            subText: (
              <p>
                Business students are packed with finance exams. Even the best students are stretched to the limit by quantitative analysis, risk modeling, and complicated valuation. Here, we have onboarded master&apos;s or PhD tutors who help you prepare for the finance exam and achieve better grades. Plus, we are a 100% confidential, trusted, and affordable exam support service.
              </p>
            ),
            bullets: [
              "100% Privacy",
              "Plagiarism-Free Work",
              "Expert Assistance",
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

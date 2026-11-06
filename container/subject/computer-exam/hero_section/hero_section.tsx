"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Computer Science Exam Help",
            heading: <>Can I Pay Someone to Take My Computer Science Exam For Better Grades</>,
            subText: (
              <p>
                We provide a simple, secure, private, and stress-free online exam service. You might be thinking, &quot;How?&quot; We have expert professionals who first meet with you, break down your requirements, and then create a specialized plan to help you prepare for your proctored exam. With our expert help, you can get:
              </p>
            ),
            bullets: [
              "PhD-qualified exam taker",
              "Top-tier exam help",
              "24/7 customer support",
              "Zero-risk privacy",
              "Guaranteed result"
            ],
            bgImage: "/img/subject/hero-section-bg-img.jpg"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;

"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "HESI Exam Help",
            heading: <>Don’t Risk Your Future; Get Online HESI Test Assistance Today!</>,
            subText: <p>Looking for help to ace your HESI exam? Our expert support for “Take My HESI Exam” guarantees success with strict privacy. We have included everything that helps you pass your exam on your first attempt. We have:</p>,
            bullets: [
              "Experienced HESI Exam Takers",
              "Proven Results",
              "Affordable Price",
              "24/7 Availability"
            ],
            bgImage: "/home/hero.jpg"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;

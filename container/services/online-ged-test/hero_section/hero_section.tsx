"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "GED Exam Help",
            heading: <>Take My GED Test and Pass It In A Single Go</>,
            subText: <p>If you are thinking you are unable to pass your GED exam for any reason, don't worry! Our secure service takes the exam on your behalf so that you can earn a diploma without any delay. With our discreet and reliable GED exam help, you can easily move forward quickly and find new opportunities for your career and educational prospects immediately.</p>,
            bullets: [
              "Thousands of GED experts",
              "Fast and urgent help",
              "Confidential service"
            ],
            bgImage: "/home/hero.jpg"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;

"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Philosophy Exam Help",
            heading: <>Take My Online Philosophy Exam For Me & Make Sure It&apos;s Safe</>,
            subText: (
              <p>
                Listen, students, getting higher grades in philosophy exams is
                often a dream for many. This is where Exam Support Online
                service is available for you. We are renowned in the exam
                industry and can meet the various requirements of students at an
                affordable price point. So, this is the right time to avail
                yourself of flexible exam support across the USA. This
                specialized and professional service offers you:
              </p>
            ),
            bullets: [
              "Step-by-step concept explanations",
              "Topic-wise study plans",
              "24-hour online exam support",
              "Quick and fast responses"
            ],
            bgImage: "/home/hero.jpg" 
          }
        ]}
      />
    </>
  );
}

export default HeroSection;
"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Economics Exam Help",
            heading: <>Pay a Top-Rated Tutor for Your Economics Exam Preparation</>,
            subText: (
              <p>
                Do not suffer in silence when preparing for online economics exams. It will not only affect your grades but also your mental health. We have hired PhD-qualified tutors who excel in economics and can help you prepare for your exams while protecting your academic progress. Here, we promise that our professional tutors provide reliable academic support while handling your personal information carefully. We also aim to help you improve your grades while you take back your nights and weekends.
              </p>
            ),
            bullets: [
              "Master's and PhD Experts",
              "100% Money-Back Guarantee",
              "Punctuality",
              "Security"
            ],
            bgImage: "/img/subject/hero-section-bg-img.jpg"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;

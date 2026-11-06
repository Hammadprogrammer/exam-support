"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Statistics Exam Help",
            heading: <>Pay Someone To Take My Statistics Exam and Get the Grades You Want</>,
            subText: (
              <p>
                Are you feeling overwhelmed by the prospect of taking a statistics exam? There is nothing abnormal about that; now you&apos;ve come to the right place. We understand your academic goal, and we care about it as much as you do. That&apos;s why we connect you with our team of experienced statisticians to help you with statistics test help and the quiz. Here, we guarantee you will pass the exam with the highest grades, without making you pay an unnecessary amount for the assistance.
              </p>
            ),
            bullets: [
              "Smart Study Plans",
              "Expert Statistics Tutors",
              "Secure and Private",
              "Guaranteed Result"
            ],
            bgImage: "/img/subject/hero-section-bg-img.jpg"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;

"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Pass Now, Pay Later!",
            heading: <>Get Expert Online CompTIA Exam Help</>,
            subText: <p>Are you stuck in a demanding academic schedule, challenging CompTIA exams, and ambitious career goals? You are not alone. Most of the students come to us and ask, &ldquo;Take my online CompTIA exam.&rdquo; Because here we recognize the pressure these certifications bring. That&rsquo;s why our team of professionals is here to assist you 24/7.</p>,
            bullets: [
              "All CompTIA Certifications",
              "Zero Login Shared",
              "Timely Support",
              "First Attempt Success"
            ],
            bgImage: "/home/1.png"
          },
          {
            topText: "Confident and Accurate",
            heading: <>Take My CompTIA Exam Confidently and Accurately</>,
            subText: <p>Now, you don&rsquo;t need to go through the unnecessary stress of understanding CompTIA topics alone. From your first topic to the last, we guide you expertly and confidently. Thousands of students have prepared for their exams confidently with our support. Our experts provide guidance you can count on. So, send a quote and take a step towards your success.</p>,
            bullets: [
              "All CompTIA Certifications",
              "Zero Login Shared",
              "Timely Support",
              "First Attempt Success"
            ],
            bgImage: "/home/9.jpg"
          },
          {
            topText: "Peace of Mind",
            heading: <>Find Your Peace of Mind While We Are Doing Your CompTIA Exam</>,
            subText: <p>Handling everything on your own can be overwhelming. But here, you don&rsquo;t have to face it alone. We have highly experienced professionals ready to provide CompTIA exam preparation support with reliability and security, while giving you the opportunity to focus on other things with confidence and peace of mind.</p>,
            bullets: [
              "All CompTIA Certifications",
              "Zero Login Shared",
              "Timely Support",
              "First Attempt Success"
            ],
            bgImage: "/home/hero.jpg"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;

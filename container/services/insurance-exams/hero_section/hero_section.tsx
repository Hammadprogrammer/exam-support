"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Take My Insurance Exam",
            heading: <>Secure Top Score And Pay Someone To Take My Insurance Exam</>,
            subText: <p>You must be looking for reliable and on-time support for your insurance exam. Well, finding a helping hand in such a busy schedule is not a moment of shame. If you searched for &quot;pay someone to take my insurance exam,&quot; Exam Support Online can help you connect with certified insurance tutors who have years of teaching experience and help students get their dream scores.</p>,
            bullets: [
              "Certified Insurance Tutor",
              "Complete Privacy",
              "24/7 Support Assured",
              "Affordable Pricing"
            ],
            bgImage: "/home/9.jpg"
          },
          {
            topText: "Hire Insurance Exam Experts",
            heading: <>Upgrade Your Score and Hire Experts for Insurance Licensing Exams</>,
            subText: <p>Think of passing the exam as the first step toward your success. By passing the insurance test, you can take the first step toward building a secure, high-growth career. We are happy to say that our certified professionals provide the expert guidance you need to work toward your goals. So, it&apos;s time to overcome your anxiety and focus on the success that lies ahead.</p>,
            bullets: [
              "Certified Insurance Tutor",
              "Complete Privacy",
              "24/7 Support Assured",
              "Affordable Pricing"
            ],
            bgImage: "/home/hero.jpg"
          },
          {
            topText: "Insurance Licensing Exam",
            heading: <>Take My Insurance Licensing Exam for Me With 100% Confidence</>,
            subText: <p>No doubt, preparing for the insurance exam can be a bit challenging. But don&apos;t worry, we make it easier for you. Get help from us, as our experts know how to guide you through the challenging journey of preparing for your insurance licensing exam with confidence. We offer professional, discreet, and flexible support, making us a dependable choice for your insurance career.</p>,
            bullets: [
              "Certified Insurance Tutor",
              "Complete Privacy",
              "24/7 Support Assured",
              "Affordable Pricing"
            ],
            bgImage: "/home/1.png"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;

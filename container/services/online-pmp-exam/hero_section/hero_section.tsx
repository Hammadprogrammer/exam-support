"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Take My PMP Exam",
            heading: <>Hire Someone to Take My PMP Exam and Ensure Success</>,
            subText: <p>Students consider us a bespoke platform to take the PMP exam in the USA because we provide top results in a secure, accurate, and timely manner. We have a professional team that takes your exam with full confidence and guarantees outcomes.</p>,
            bullets: [
              "450+ PMP Specialists",
              "1,000s of Happy Clients",
              "10 Years of Delivering Student Support"
            ],
            bgImage: "/home/1.png"
          },
          {
            topText: "Do My PMP Exam",
            heading: <>Do My PMP Exam For Me By Certified Tutor</>,
            subText: <p>Well, PMP is an internationally recognized certification; for this reason, students often need on-time and expert support. We offer help with the PMP exam process, executed in a professional manner. Moreover, our PMP-certified experts can take your test while ensuring a passing score. Our professionals are skilled at managing the examination procedure while guaranteeing accuracy and secrecy. Now you don&apos;t need to worry about the difficult domain or time limit anymore with our help. Our service has helped many students get their desired grades.</p>,
            bullets: [
              "450+ PMP Specialists",
              "1,000s of Happy Clients",
              "10 Years of Delivering Student Support"
            ],
            bgImage: "/home/9.jpg"
          },
          {
            topText: "Take My PMP Exam",
            heading: <>Tell Us to Take My PMP Exam and Get Relaxed</>,
            subText: <p>We are here to assist you in passing the PMP exam without feeling overburdened or stressed. We can also help you if you want to pay someone to take your PMP exam. We provide expert advice throughout the preparation process. Fortunately, hundreds of candidates have achieved the highest scores with our simple, secure, and professional exam support. They choose us when they are lost in their exam preparation, and luckily, we support them by providing the right and on-time assistance.</p>,
            bullets: [
              "450+ PMP Specialists",
              "1,000s of Happy Clients",
              "10 Years of Delivering Student Support"
            ],
            bgImage: "/home/hero.jpg"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;

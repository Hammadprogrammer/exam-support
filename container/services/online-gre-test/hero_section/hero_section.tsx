"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Online GRE Exam Help",
            heading: <>Take an Online GRE Exam: Get Help From Expert Leaders</>,
            subText: <p>Welcome to the platform for GRE help services, where you have plenty of opportunities to achieve your target score and move forward with confidence. Our GRE help will match you with tutors who can guide you through your exam preparation and help you work towards the percentile rank required by universities.</p>,
            bullets: [
              "Proficient GRE Tutors",
              "Diverse Subject Specialties",
              "No Hidden Charges",
              "High Score Assurance"
            ],
            bgImage: "/home/9.jpg"
          },
          {
            topText: "Expert GRE Support",
            heading: <>Get Expert GRE Support to Master Your Test</>,
            subText: <p>Studying for the GRE alone can feel like a lot. Some days it&apos;s the quant problems; other days it&apos;s those long reading passages. Our tutors help with all of it. Sessions are one-on-one, so if geometry is your weak spot, that&apos;s where you start. If it&apos;s vocab, same deal. Your tutor shares tricks that actually work and helps you practice until things click. Test anxiety? That usually goes down too, once you know what you&apos;re doing.</p>,
            bullets: [
              "Proficient GRE Tutors",
              "Diverse Subject Specialties",
              "No Hidden Charges",
              "High Score Assurance"
            ],
            bgImage: "/home/hero.jpg"
          },
          {
            topText: "GRE At-Home Test",
            heading: <>Hire Professional Tutors to Prepare for Your GRE At-Home Test</>,
            subText: <p>Taking the GRE from home sounds easy, until you&apos;re on camera with a proctor watching and your desk has to be totally clear. A lot of students get thrown off just by that. So we set it up for you ahead of time. Here, our tutor runs full practice tests in the same kind of setup, then goes over what went wrong. Do it a couple of times, and test day feels a lot more normal. You&apos;ll also find out which sections have easy points you&apos;ve been missing.</p>,
            bullets: [
              "Proficient GRE Tutors",
              "Diverse Subject Specialties",
              "No Hidden Charges",
              "High Score Assurance"
            ],
            bgImage: "/home/1.png"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;

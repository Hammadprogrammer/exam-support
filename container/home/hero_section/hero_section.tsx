"use client";
import React from 'react'
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  const heroBullets = [
    "Smart Study Methods",
    "Expert Guidance",
    "Stress-Free Learning",
    "Proven Success"
  ];

  const heroBgImages = [
    "/home/hero.jpg",
    "/home/1.png",
    "/home/9.jpg"
  ];

  return (
    <>
      <Hero 
        topText="Study Less Score More"
        heading={
          <>Do My Exam For Me<br/>Service To Boost Score,</>
        }
        subText={
          <p>
            All Exam Help offers a smart way to learn with online support and guidance. We concentrate on helping you learn more, faster, and easier. No overthinking, just confidence . we&apos;re behind you all the way.
          </p>
        }
        bullets={heroBullets}
        bgImages={heroBgImages}
      />
    </>
  )
}

export default HeroSection

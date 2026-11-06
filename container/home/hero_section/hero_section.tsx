"use client";
import React from 'react'
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  const heroBullets = [
    "Smart Study Plans",
    "Expert Tutors",
    "Less Stress",
    "Real Progress"
  ];

  const heroBgImages = [
    "/img/home/hero-section.jpg"
  ];

  return (
    <>
      <Hero 
        topText="Study Less Score More"
        heading={
          <>Pay Someone To Take My Exam<br/>and Chase Your Dream Results</>
        }
        subText={
          <p>
            Many online academic support services outsource their work to third-party agencies, which can result in security warnings within the learning system. We connect you with vetted professional tutors who help you learn more, faster, and easier. Don&apos;t lose your chance to score higher grades. Consult with our trained staff available 24/7, and get the academic support you need to make your grades skyrocket.
          </p>
        }
        bullets={heroBullets}
        bgImages={heroBgImages}
      />
    </>
  )
}

export default HeroSection

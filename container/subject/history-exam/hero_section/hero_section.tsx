"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "History Exam Help",
            heading: <>Take My Online History Exam For Me and Achieve Better Grades Without Stress</>,
            subText: (
              <p>
                Stop panicking about your upcoming history exam. This is the ideal site to ask us for online history exam help; our online specialists are ready to help you prepare. We handle every test and quiz with intense care. With our professional online history exam help, we aim to help you achieve better grades in specific sections as well as in your overall coursework. So, let us quote &quot;take my history exam for me&quot;; we offer expert guidance to help you prepare for your history exam.
              </p>
            ),
            bullets: [
              "Expert Tutor",
              "Guaranteed Result",
              "24 Hour Support",
              "Safety and Security"
            ],
            bgImage: "/img/subject/hero-section-bg-img.jpg"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;

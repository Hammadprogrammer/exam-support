"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Boost My Scores With Expert Help",
            heading: <>Can I Pay Someone to Take My TEAS Exam Who Can Boost My Scores?</>,
            subText: <p>Get professional TEAS exam preparation help, and never let anyone outshine you in academic success. Meet the highest-quality exam help provider, who is ready to make passing stress-free and affordable.</p>,
            bullets: [
              "Cost-Effective Prices",
              "On-Time Support",
              "Guaranteed Success",
              "Confidentiality"
            ],
            bgImage: "/home/hero.jpg"
          },
          {
            topText: "Expert TEAS Tutors",
            heading: <>Take My TEAS Exam With the USA&rsquo;s Best TEAS Tutors</>,
            subText: <p>We have onboarded vetted professionals from the USA. Our tutors don&rsquo;t just know the subject; they understand it inside and out. They also know the pacing, its traps, and the subtle ways TEAS designs questions to measure critical thinking rather than memorization. This depth of familiarity comes from years of teaching experience. What makes them exceptional is the intellectual sharpness they bring to every session. Many of them hold advanced degrees, while some have PhD-level qualifications, meaning you are learning from individuals who have conceptual clarity and confidence.</p>,
            bullets: [
              "Cost-Effective Prices",
              "On-Time Support",
              "Guaranteed Success",
              "Confidentiality"
            ],
            bgImage: "/home/1.png"
          },
          {
            topText: "We Are Here to Help You",
            heading: <>Stop Your Search for TEAS Exam Help — We Are Here to Help You</>,
            subText: <p>Struggling with a particular section of the TEAS exam? You&rsquo;re not alone. Well, it completely varies by student, such as some find maths difficult and others reading questions. Instead of guessing what is usually more difficult here, our tutor will look at your current performance, identify where you&rsquo;re losing marks, and help you work through those topics. You&rsquo;ll practice with exam-style questions, discuss mistakes, and learn better ways to approach similar problems. With flexible study sessions and private tutoring, preparing for the TEAS becomes easier to manage alongside your daily responsibilities.</p>,
            bullets: [
              "Cost-Effective Prices",
              "On-Time Support",
              "Guaranteed Success",
              "Confidentiality"
            ],
            bgImage: "/home/9.jpg"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;

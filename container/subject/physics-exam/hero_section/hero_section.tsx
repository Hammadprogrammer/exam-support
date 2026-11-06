"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Physics Exam Help",
            heading: <>Pay Someone to Help with My Online Physics Exam with Expert Professionals</>,
            subText: (
              <p>
                If you feel stuck and think, &quot;Can I hire someone to help me with my physics exam?&quot; we are here to support you. Our expert tutors can help you with your physics exam and handle tasks with great care. Undoubtedly, physics comes with the intersection of advanced mathematics and abstract conceptual thinking. We manage it all, providing you with timely physics exam assistance, so you can relax while we guide you through your work smoothly and on time.
              </p>
            ),
            bullets: [
              "Helped 1,500+ physics students achieve academic excellence",
              "24-hour support for all your queries and concept clarification",
              "Helping you work towards achieving A or B grades"
            ],
            bgImage: "/img/subject/hero-section-bg-img.jpg"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;

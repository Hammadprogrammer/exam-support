"use client";
import React from 'react';
import Hero from '@/container/All-props-comp/hero-setion/hero_section';

const HeroSection = () => {
  return (
    <>
      <Hero 
        slides={[
          {
            topText: "Take Assignment Help",
            heading: <>Take Assignment Help With Expert Writers Ready to Serve You</>,
            subText: <p>Behind every successful assignment, there is hard work. And our professional writers handle any subject at any level, delivering custom, plagiarism-free assignments before your deadline so you can focus on what matters most.</p>,
            bullets: [
              "Timely Support",
              "Complete Confidentiality",
              "Successful Results",
              "Secure Transactions"
            ],
            bgImage: "/home/hero.jpg"
          },
          {
            topText: "Write My Assignment",
            heading: <>Write My Assignment For Me And Experience Loads Of Benefits</>,
            subText: <p>With our assignment writer service and expert writers, you can count on us. We deliver tasks promptly, so after you share your assignment topics, we don&apos;t wait long. Within minutes, the task is assigned to the most appropriate writer on the topic. Our subject specialists are experienced and have the knowledge and resources to work on the topic. They write as per the guidelines and deliver every piece, ensuring that your assignment is original and well-written.</p>,
            bullets: [
              "Timely Support",
              "Complete Confidentiality",
              "Successful Results",
              "Secure Transactions"
            ],
            bgImage: "/home/1.png"
          },
          {
            topText: "Do My Assignment",
            heading: <>Ask Us, Can You Do My Assignment? We Never Disappoint You!</>,
            subText: <p>You must be thinking how we are managing thousands of assignments in a single go. Well, that&apos;s all because of our professional writers, as we have hired a number of subject specialists vetted from top universities, and they are experienced in delivering a masterpiece every time. They know the citations, references, and the things that every other platform ignores.</p>,
            bullets: [
              "Timely Support",
              "Complete Confidentiality",
              "Successful Results",
              "Secure Transactions"
            ],
            bgImage: "/home/9.jpg"
          }
        ]}
      />
    </>
  );
}

export default HeroSection;

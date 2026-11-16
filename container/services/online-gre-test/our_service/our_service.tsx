"use client";
import React from 'react';
import OurService from '@/container/All-props-comp/our_service/our_service';

const OurServiceSection = () => {
  const servicesData = [
    {
      title: "GRE Study Plan Help",
      description: "Not sure where to begin? We build a study plan around your test date and your daily schedule.",
      image: "/home/2.png",
      link: "/online-gre-test"
    },
    {
      title: "Verbal Reasoning Help",
      description: "Long passages and tricky wording slow lots of students down. Your tutor shows you how to read faster and still catch the key points.",
      image: "/home/3.jpg",
      link: "/online-gre-test"
    },
    {
      title: "Reading Comprehension Help",
      description: "Some passages feel impossible on the first read. We practice them with you until finding the main idea gets easier.",
      image: "/home/4.png",
      link: "/online-gre-test"
    },
    {
      title: "Text Completion Help",
      description: "Filling in the blanks isn't just about vocabulary. Our expert tutor teaches you to use clues in the sentence.",
      image: "/home/5.jpg",
      link: "/online-gre-test"
    },
    {
      title: "Sentence Equivalence Help",
      description: "Two words that mean the same thing, from six choices. We show you a simple way to narrow them down.",
      image: "/home/6.jpg",
      link: "/online-gre-test"
    },
    {
      title: "GRE Vocabulary Help",
      description: "So many hard words to learn. We help you remember them with easy tricks, not endless lists.",
      image: "/home/7.jpg",
      link: "/online-gre-test"
    },
    {
      title: "Quantitative Reasoning Help",
      description: "GRE math isn't super advanced, but it's tricky. Your tutor helps you spot the shortcuts.",
      image: "/home/8.jpg",
      link: "/online-gre-test"
    },
    {
      title: "Algebra & Arithmetic Help",
      description: "Equations, fractions, percentages. We go over the basics you might have forgotten since school.",
      image: "/home/9.jpg",
      link: "/online-gre-test"
    },
    {
      title: "Geometry Help",
      description: "Our tutor draws each shape step by step for you, so the questions make sense.",
      image: "/home/10.jpg",
      link: "/online-gre-test"
    },
    {
      title: "Data Analysis Help",
      description: "Charts and tables can be confusing under time pressure. We practice reading them quickly and correctly.",
      image: "/home/11.jpg",
      link: "/online-gre-test"
    },
    {
      title: "Analytical Writing Help",
      description: "The GRE essay has its own style. Our tutor explains what graders want and gives you prompts to practice.",
      image: "/about/1.jpg",
      link: "/online-gre-test"
    },
    {
      title: "GRE Mock Test Help",
      description: "Full practice tests show you where you really stand. Afterward, we go through your mistakes together.",
      image: "/about/2.jpg",
      link: "/online-gre-test"
    },
    {
      title: "Time Management Help",
      description: "We help you pace yourself section by section so you finish on time.",
      image: "/about/3.png",
      link: "/online-gre-test"
    },
    {
      title: "Score Improvement Help",
      description: "Already attempted the GRE? We look at your weak areas and focus on raising your score next time.",
      image: "/about/4.png",
      link: "/online-gre-test"
    },
    {
      title: "Test Day Strategy Help",
      description: "We help you plan your approach, so you feel confident and are ready for the test.",
      image: "/home/1.png",
      link: "/online-gre-test"
    }
  ];

  return (
    <OurService 
      services={servicesData}
      h6="Our Services"
      h4="Why Hire Our GRE Exam Tutors?"
      description="We believe that GRE test preparation should be accessible to you within your time constraints. That's why we have designed our system in a simple way, so you can contact us anytime and get the right guidance for your exam preparation."
    />
  );
};

export default OurServiceSection;

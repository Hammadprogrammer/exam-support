"use client";
import React from 'react';
import OurService from '@/container/All-props-comp/our_service/our_service';

const OurServiceSection = () => {
  const servicesData = [
    {
      title: "PMP Study Plan Help",
      description: "We create study plans that fit around your job. So you always know what to study next, even on busy weeks.",
      image: "/home/2.png",
      link: "/take-my-pmp-exam"
    },
    {
      title: "Agile & Hybrid Help",
      description: "Agile and hybrid questions confuse a lot of people. Our expert tutor explains them with simple, real-life project examples.",
      image: "/home/3.jpg",
      link: "/take-my-pmp-exam"
    },
    {
      title: "Scope Management Help",
      description: "What belongs in a project, and what doesn't? We explain scope in plain words so it's easy to see.",
      image: "/home/4.png",
      link: "/take-my-pmp-exam"
    },
    {
      title: "Schedule Management Help",
      description: "We walk you through timelines and the critical path, one step at a time, until it clicks.",
      image: "/home/5.jpg",
      link: "/take-my-pmp-exam"
    },
    {
      title: "Cost Management Help",
      description: "Budgets, earned value, PMP formulas. We break them down so the cost questions stop feeling scary.",
      image: "/home/6.jpg",
      link: "/take-my-pmp-exam"
    },
    {
      title: "Quality Management Help",
      description: "We show you what quality really means on a project. Then try a few practice questions with your tutor.",
      image: "/home/7.jpg",
      link: "/take-my-pmp-exam"
    },
    {
      title: "Resource Management Help",
      description: "Managing people, tools, and team roles is a big part of the exam. We are providing complete help on it.",
      image: "/home/8.jpg",
      link: "/take-my-pmp-exam"
    },
    {
      title: "Communication Management Help",
      description: "Who needs what information, and when? We help you get these questions right without second-guessing.",
      image: "/home/9.jpg",
      link: "/take-my-pmp-exam"
    },
    {
      title: "Risk Management Help",
      description: "Our tutor teaches you how to spot risks early and pick the best response, using easy examples.",
      image: "/home/10.jpg",
      link: "/take-my-pmp-exam"
    },
    {
      title: "Procurement Management Help",
      description: "Contracts and vendors can sound complicated. We explain each term in simple language.",
      image: "/home/11.jpg",
      link: "/take-my-pmp-exam"
    },
    {
      title: "Stakeholder Management Help",
      description: "Dealing with stakeholders isn't always easy. We show you how to handle these questions calmly.",
      image: "/about/1.jpg",
      link: "/take-my-pmp-exam"
    },
    {
      title: "Scenario Question Help",
      description: "Two answers often look right on the PMP. We practice scenario questions with you and show you how to pick the better one.",
      image: "/about/2.jpg",
      link: "/take-my-pmp-exam"
    },
    {
      title: "PMP Mock Test Help",
      description: "We give you full mock tests that feel like the real exam. Afterward, we go over every mistake together.",
      image: "/about/3.png",
      link: "/take-my-pmp-exam"
    },
    {
      title: "Exam Day Strategy Help",
      description: "Running out of time is a real worry. We help you plan your pace, so you move through the exam calmly.",
      image: "/about/4.png",
      link: "/take-my-pmp-exam"
    },
    {
      title: "PMBOK Review Help",
      description: "The PMBOK is long. We point you to the sections that matter most for the exam.",
      image: "/home/1.png",
      link: "/take-my-pmp-exam"
    }
  ];

  return (
    <OurService 
      services={servicesData}
      h6="Our Services"
      h4="We Offer Complete Take My Online Exam Service"
      description="We provide everything you need to prepare for your PMP certification without the hassle. With us, you can focus on your goals while we help you with the rest."
    />
  );
};

export default OurServiceSection;

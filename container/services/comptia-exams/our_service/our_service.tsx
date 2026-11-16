"use client";
import React from 'react';
import OurService from '@/container/All-props-comp/our_service/our_service';

const OurServiceSection = () => {
  const servicesData = [
    {
      title: "CompTIA A+ Core 1 Help",
      description: "Hardware, mobile devices, and network basics make up most of Core 1. We break them into small, easy lessons for you.",
      image: "/home/2.png",
      link: "#"
    },
    {
      title: "CompTIA A+ Core 2 Help",
      description: "Operating systems and troubleshooting can feel messy. With our tutor, you learn how to fix the usual problems the exam asks about.",
      image: "/home/3.jpg",
      link: "#"
    },
    {
      title: "Network+ Help",
      description: "Subnetting trips up lots of learners. We make it simple with short, clear steps.",
      image: "/home/4.png",
      link: "#"
    },
    {
      title: "Security+ Help",
      description: "Threats and attacks are easier to recall with real-life stories. That's exactly how our tutor teaches them.",
      image: "/home/5.jpg",
      link: "#"
    },
    {
      title: "Cloud+ Help",
      description: "Cloud ideas can seem hard to picture. We tie them to apps and services you already use.",
      image: "/home/6.jpg",
      link: "#"
    },
    {
      title: "Linux+ Help",
      description: "Commands slip away if you don't use them. Regular practice with our tutor keeps them fresh.",
      image: "/home/7.jpg",
      link: "#"
    },
    {
      title: "Server+ Help",
      description: "Storage, backups, and servers come up a lot. We give extra time to these key areas.",
      image: "/home/8.jpg",
      link: "#"
    },
    {
      title: "CySA+ Help",
      description: "Security logs can look like a mess of data. Here, our expert professional shows you which parts truly matter.",
      image: "/home/9.jpg",
      link: "#"
    },
    {
      title: "PenTest+ Help",
      description: "Each stage of a pen test has a clear purpose. We guide you through them in the right order.",
      image: "/home/10.jpg",
      link: "#"
    },
    {
      title: "Data+ Help",
      description: "Reports, charts, and data types don't have to be confusing. Our tutor keeps things simple and test-focused.",
      image: "/home/11.jpg",
      link: "#"
    },
    {
      title: "Tech+ Help",
      description: "Just starting out in IT? We offer friendly lessons that begin with the basics.",
      image: "/home/1.png",
      link: "#"
    },
    {
      title: "Performance-Based Question Help",
      description: "PBQs are hands-on and often the hardest part. Lab practice with us makes them feel normal.",
      image: "/about/1.jpg",
      link: "#"
    },
    {
      title: "Ports & Protocols Help",
      description: "Port numbers are hard to memorize; that's why our tutor sorts them into easy groups.",
      image: "/home/hero.jpg",
      link: "#"
    },
    {
      title: "CompTIA Practice Test Help",
      description: "We help you take a full mock test; our tutor walks through each wrong answer with you.",
      image: "/home/2.png",
      link: "#"
    },
    {
      title: "CompTIA Retake Help",
      description: "We look closely at your report and focus on the topics needed to reach your target score.",
      image: "/home/3.jpg",
      link: "#"
    }
  ];

  return (
    <OurService 
      services={servicesData}
      h6="Our Services"
      h4="Hire Someone Who Handles Every Exam For You, Effortlessly!"
      description="We provide professional help for any CompTIA certification. So, it doesn't matter if it is an entry-level or advanced certification; we have experts in every field who can take your exam smoothly."
    />
  );
};

export default OurServiceSection;

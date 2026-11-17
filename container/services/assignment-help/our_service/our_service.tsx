"use client";
import React from 'react';
import OurService from '@/container/All-props-comp/our_service/our_service';

const OurServiceSection = () => {
  const servicesData = [
    {
      title: "Online Assignment Help",
      description: "No idea where to start? That's okay. Sit down with one of our tutors, look at the brief together, and figure out a plan before you write a single word.",
      image: "/home/2.png",
      link: "/assignment-help"
    },
    {
      title: "Proctored Assignment Help",
      description: "A proctored course plus assignments on top? That's a lot for one week. We'll help you sort out what's urgent and what can wait.",
      image: "/home/3.jpg",
      link: "/proctored-exam-help"
    },
    {
      title: "Online Tests & Quizzes Help",
      description: "Those small weekly quizzes? Easy to forget. A five-minute check-in fixes that.",
      image: "/home/4.png",
      link: "/online-tests-quizzes"
    },
    {
      title: "GRE Assignment Help",
      description: "Some GRE topics just don't click on the first read. Your tutor explains it another way, and then you set up your outline together.",
      image: "/home/5.jpg",
      link: "/take-my-gre-exam"
    },
    {
      title: "HESI Assignment Help",
      description: "Pick the topic that scares you most. Start there. Our nursing tutors will help you dig into it and follow the brief properly.",
      image: "/home/6.jpg",
      link: "/take-my-hesi-exam"
    },
    {
      title: "PSI Assignment Help",
      description: "Licensing work needs good sources, not random websites. We'll point you to the right ones and double-check you haven't missed anything.",
      image: "/home/7.jpg",
      link: "/online-psi-exam"
    },
    {
      title: "Online Class Assignment Help",
      description: "Two lectures behind and an assignment due Friday? Happens all the time. Your tutor helps you catch up and plan the week.",
      image: "/home/8.jpg",
      link: "/online-class-help"
    },
    {
      title: "Online Course Assignment Help",
      description: "Some weeks are chill. Others hit you with three deadlines at once. Break it down with a tutor and it gets a lot more manageable.",
      image: "/home/9.jpg",
      link: "/online-course-help"
    },
    {
      title: "GED Assignment Help",
      description: "Math, science, writing, whichever one's giving you trouble, we'll explain it simply and help you plan your answer.",
      image: "/home/10.jpg",
      link: "/take-my-ged-exam"
    },
    {
      title: "ATI TEAS Assignment Help",
      description: "Nursing prep comes with tons of little tasks. We go through them with you one at a time.",
      image: "/home/11.jpg",
      link: "/take-my-teas-exam"
    },
    {
      title: "CompTIA Assignment Help",
      description: "Explaining a firewall is easier when you think about your own home Wi-Fi. That's the kind of example our tutors use for A+, Network+, and Security+.",
      image: "/about/1.jpg",
      link: "/take-my-comptia-exam"
    },
    {
      title: "Real Estate Assignment Help",
      description: "Laws, contracts, numbers. We take them one by one, so you know exactly what goes into your assignment.",
      image: "/about/2.jpg",
      link: "/take-my-real-estate-exam"
    },
    {
      title: "PMP Assignment Help",
      description: "PMP case studies feel like real work projects, because they kind of are. Our tutors walk you through them and look over your draft before it goes in.",
      image: "/about/3.png",
      link: "/take-my-pmp-exam"
    },
    {
      title: "Insurance Assignment Help",
      description: "First time seeing words like \"rider\" or \"endorsement\"? Ask us. We'll explain them in normal language.",
      image: "/about/4.png",
      link: "/take-my-insurance-exam"
    },
    {
      title: "GMAT Assignment Help",
      description: "Big concepts, small steps. Our tutor helps you take it one piece at a time.",
      image: "/home/1.png",
      link: "/take-my-gmat-exam"
    }
  ];

  return (
    <OurService 
      services={servicesData}
      h6="Our Services"
      h4="Hire Someone To Take My Assignment Smoothly and Promptly"
      description="Every student assignment is different; that's why we never use templates or recycle previous work. We have professional writers who write after paying close attention to the details that matter, like word count, referencing style, formatting requirements, and the academic level expected."
    />
  );
};

export default OurServiceSection;

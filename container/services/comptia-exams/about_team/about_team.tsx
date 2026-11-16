"use client";
import React from 'react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AboutTeam from '@/container/All-props-comp/about_team/about_team';

const AboutTeamHome = () => {
  const featuresData = [
    {
      icon: <AutoStoriesIcon />,
      title: "Real CompTIA Expertise",
      desc: "All of our tutors are CompTIA experts, so whether your exam is CompTIA A+, Network+, Security+, or Cloud+, our team has expertise in several fields."
    },
    {
      icon: <VerifiedUserIcon />,
      title: "Online Exam Expertise",
      desc: "Our tutors are experienced in taking exams and know how to expertly navigate those systems without any mistakes or errors."
    },
    {
      icon: <TrendingUpIcon />,
      title: "Affordable and Flexible",
      desc: "Our service is designed to be affordable and flexible. There are no hidden charges, so you can get the best quality help."
    }
  ];

  return (
    <AboutTeam 
      badge="About Our Team"
      heading="We Offer Reliable and Trusted CompTIA Exam Help"
      features={featuresData}
      statValue={95}
      statLabel="Success Rate"
      imageSrc="/service/1.jpg"
    />
  );
};

export default AboutTeamHome;

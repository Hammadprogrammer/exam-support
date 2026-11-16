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
      title: "Expert Support",
      desc: "Every applicant is matched with a specialist who has many years of experience in GMAT exam preparation."
    },
    {
      icon: <VerifiedUserIcon />,
      title: "705+ Delivered",
      desc: "When someone trusts us for GMAT exam help, we deliver verified results according to the agreed terms, or issue a full refund within the agreed refund period."
    },
    {
      icon: <TrendingUpIcon />,
      title: "Safe and Secure",
      desc: "We encrypt all your information, handle your data securely, and never make your identity or employer information public."
    }
  ];

  return (
    <AboutTeam 
      badge="About Our Team"
      heading="Make Us Your Top GMAT Choice, Like Many Others"
      features={featuresData}
      statValue={95}
      statLabel="Success Rate"
      imageSrc="/service/1.jpg"
    />
  );
};

export default AboutTeamHome;

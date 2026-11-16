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
      desc: "Our team is made up of professionals who are experienced in teaching and taking exams inside and out."
    },
    {
      icon: <VerifiedUserIcon />,
      title: "Private, Encrypted Communication",
      desc: "We use secure technology to keep all your details confidential."
    },
    {
      icon: <TrendingUpIcon />,
      title: "Transparency First",
      desc: "We are transparent about how the process works, and we only proceed if you are fully informed and comfortable."
    }
  ];

  return (
    <AboutTeam 
      badge="About Our Team"
      heading="Get Help From One Of The Trusted Academic Partners"
      features={featuresData}
      statValue={95}
      statLabel="Success Rate"
      imageSrc="/service/1.jpg"
    />
  );
};

export default AboutTeamHome;

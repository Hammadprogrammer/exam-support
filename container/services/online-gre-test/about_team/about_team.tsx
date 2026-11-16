"use client";
import React from 'react';
import AboutTeam from '@/container/All-props-comp/about_team/about_team';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const AboutTeamHome = () => {
  return (
    <AboutTeam 
      badge="About Our Team"
      heading="Achieve a Top Score With Our Safe and Reliable Service"
      statValue={85}
      statLabel="Satisfied Students and parents"
      imageSrc="/service/1.jpg"
      features={[
        {
          icon: <AutoStoriesIcon />,
          title: "High Score Assured",
          desc: "We guarantee a high score for your GRE Exam, as our professionals handle your exam with great care."
        },
        {
          icon: <VerifiedUserIcon />,
          title: "4,000 GREs Delivered",
          desc: "We help thousands of students gain admission to their dream graduate program with proven results."
        },
        {
          icon: <TrendingUpIcon />,
          title: "AWA Essay Included",
          desc: "Live analytical essay writing is provided in our GRE exam help service, ensuring a high-scoring result."
        }
      ]}
    />
  );
};

export default AboutTeamHome;

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
      heading="Exam Support Online Offers a Reliable Solution"
      statValue={85}
      statLabel="Satisfied Students and parents"
      imageSrc="/img/home/5.jpg"
      features={[
        {
          icon: <AutoStoriesIcon />,
          title: "Experienced Professionals",
          desc: "We have onboarded qualified tutors with years of teaching experience."
        },
        {
          icon: <VerifiedUserIcon />,
          title: "Trusted and Reliable",
          desc: "Students come back to us semester after semester. That is only because we have helped multiple students to get their desired results."
        },
        {
          icon: <TrendingUpIcon />,
          title: "Driven to Help You Succeed",
          desc: "We are highly focused on getting you ready, so test day feels less scary. We help you make progress that makes an impact."
        }
      ]}
    />
  );
};

export default AboutTeamHome;


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
      title: "First Attempt Exam Passing Guaranteed",
      desc: "Our expert tutors help you prepare for your GED exam and aim to help you pass on your first attempt. If you don't pass, you receive a full refund with no hidden conditions or delays."
    },
    {
      icon: <VerifiedUserIcon />,
      title: "4,500+ GED Secured",
      desc: "With our help, 4,500 learners have acquired their high school equivalency credentials remotely."
    },
    {
      icon: <TrendingUpIcon />,
      title: "All Four Modules Covered",
      desc: "We offer comprehensive online GED exam help in Math, Science, Social Studies, and RLA."
    }
  ];

  return (
    <AboutTeam 
      badge="About Our Team"
      heading="Get Connected With Our Trusted and Reliable GED Exam Assistance"
      features={featuresData}
      statValue={95}
      statLabel="Success Rate"
      imageSrc="/service/1.jpg"
    />
  );
};

export default AboutTeamHome;

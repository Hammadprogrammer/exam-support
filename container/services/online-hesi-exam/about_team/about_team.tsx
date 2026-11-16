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
      heading="See How Our Expert Support Guarantees Success"
      statValue={85}
      statLabel="Satisfied Students and parents"
      imageSrc="/service/1.jpg"
      features={[
        {
          icon: <AutoStoriesIcon />,
          title: "Supportive Team",
          desc: "We are not only professional, but also kind and helpful. We think it's important to create a friendly atmosphere where students can ask any question and get expert help."
        },
        {
          icon: <VerifiedUserIcon />,
          title: "Post-Exam Consultation",
          desc: "After your HESI is over, we provide a thorough session to help you understand your results."
        },
        {
          icon: <TrendingUpIcon />,
          title: "Service Assistance Round the Clock",
          desc: "We are always available to answer your questions anytime, anywhere."
        }
      ]}
    />
  );
};

export default AboutTeamHome;

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
      heading="Get Real-Time Support for Online Insurance Exam Help"
      statValue={85}
      statLabel="Satisfied Students and parents"
      imageSrc="/service/1.jpg"
      features={[
        {
          icon: <AutoStoriesIcon />,
          title: "Meet With a Licensed Expert",
          desc: "We help you connect with a certified expert who already knows the rules and material specific to your state."
        },
        {
          icon: <VerifiedUserIcon />,
          title: "Clear on the First Attempt",
          desc: "Let's be clear: this exam is extremely complicated, dry, and full of legal pitfalls, but we ensure you pass the insurance exam on the first attempt."
        },
        {
          icon: <TrendingUpIcon />,
          title: "Guaranteed Success",
          desc: "We can provide complete relief from stress with our top-notch exam support."
        }
      ]}
    />
  );
};

export default AboutTeamHome;

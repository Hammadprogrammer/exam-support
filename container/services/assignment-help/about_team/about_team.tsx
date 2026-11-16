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
      heading="Best Assignment Writing Services Ready to Serve"
      statValue={85}
      statLabel="Satisfied Students and parents"
      imageSrc="/service/1.jpg"
      features={[
        {
          icon: <AutoStoriesIcon />,
          title: "Premium Service",
          desc: "We offer our premium service at an affordable price. Plus, we are flexible with our clients. Come to us and ask, \"Can someone do my assignment for me?\" Here, we don't say no."
        },
        {
          icon: <VerifiedUserIcon />,
          title: "Discount With Every Order",
          desc: "If you are looking for online assignment help, then Exam Support Online offers you a whopping discount of 25% with every order."
        },
        {
          icon: <TrendingUpIcon />,
          title: "Free Referral Code",
          desc: "We offer a referral code to our students, which they can use to cut down on their assignment costs."
        }
      ]}
    />
  );
};

export default AboutTeamHome;

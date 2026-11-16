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
      heading="Secure Your PMP Exam With Our Trusted Experts"
      statValue={85}
      statLabel="Satisfied Students and parents"
      imageSrc="/service/1.jpg"
      features={[
        {
          icon: <AutoStoriesIcon />,
          title: "Expert Exam Taker",
          desc: "These professionals are knowledgeable about the structure, familiar domains, and specifics of the test."
        },
        {
          icon: <VerifiedUserIcon />,
          title: "Tailored Support",
          desc: "We understand that every student has particular requirements. Our services are thus customized."
        },
        {
          icon: <TrendingUpIcon />,
          title: "Complete Confidentiality",
          desc: "We prioritize confidentiality. That's why we keep your identity confidential and secure your data through numerous security layers and SSL-encrypted platforms."
        }
      ]}
    />
  );
};

export default AboutTeamHome;

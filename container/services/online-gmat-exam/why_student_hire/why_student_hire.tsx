"use client";
import React from 'react';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import StarsIcon from '@mui/icons-material/Stars';
import WhyStudentHire from '@/container/All-props-comp/why_student_hire/why_student_hire';

const WhyStudentHireSection = ({ centerImage }: { centerImage?: string }) => {
  const featuresLeftData = [
    {
      icon: <HandshakeIcon />,
      title: "Instant Help",
      desc: "Stuck at midnight? Send a message. Someone’s usually up."
    },
    {
      icon: <BeachAccessIcon />,
      title: "Simple Procedure",
      desc: "Fill out a quick form, get matched, and book a time. Done in a few minutes."
    },
    {
      icon: <LockIcon />,
      title: "Safe & Secure",
      desc: "Your details stay with us. We don’t share them with anyone."
    }
  ];

  const featuresRightData = [
    {
      icon: <CheckCircleOutlineIcon />,
      title: "Expert Tutors",
      desc: "Most of the tutors have PhDs. More importantly, they’re good at explaining things."
    },
    {
      icon: <AccountBalanceWalletIcon />,
      title: "Worry-Free Exam Prep",
      desc: "No more cramming the night before. You’ll have a plan and stick to it."
    },
    {
      icon: <StarsIcon />,
      title: "Top Results",
      desc: "Students come back to us again and again. That says a lot."
    }
  ];

  return (
    <WhyStudentHire 
      heading="Why Students Trust Us For Their GMAT Exam Help"
      subHeading="Getting ready for an exam shouldn’t feel like a second job. With us, it doesn’t. You get a tutor who knows the subject, a plan that fits your week, and help whenever you need it. That’s basically it."
      featuresLeft={featuresLeftData}
      featuresRight={featuresRightData}
      centerImage={centerImage}
    />
  );
};

export default WhyStudentHireSection;

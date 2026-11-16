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
      icon: <StarsIcon />,
      title: "Professional Expert",
      desc: "Our experienced team knows the GED well. They are highly qualified, focused, and dedicated to providing you with top-notch exam help."
    },
    {
      icon: <AccountBalanceWalletIcon />,
      title: "Affordable Price",
      desc: "We offer affordable prices with no hidden charges. Our prices are fair and reasonable."
    },
    {
      icon: <LockIcon />,
      title: "Confidential Service",
      desc: "It is our foremost responsibility to keep you secure. That's why we never share your personal information. Thus, everything stays private throughout the entire process."
    }
  ];

  const featuresRightData = [
    {
      icon: <CheckCircleOutlineIcon />,
      title: "Guaranteed Passing Score",
      desc: "We aim to provide you with a high score. Your success is our goal, and we work carefully to deliver excellent results that meet your needs."
    },
    {
      icon: <HandshakeIcon />,
      title: "On-Time Support",
      desc: "If you need exam help, you can contact us anytime during the day."
    },
    {
      icon: <BeachAccessIcon />,
      title: "Money-Back Guarantee",
      desc: "If you fail any exam, we will refund the money the same day."
    }
  ];

  return (
    <WhyStudentHire 
      heading="How Does Our GED Exam Service Work For You?"
      subHeading="We understand that the GED is important for your success. That's why we set our goal to assure you while boosting your score. We make the test simple and easy. Here's how:"
      featuresLeft={featuresLeftData}
      featuresRight={featuresRightData}
      centerImage={centerImage}
    />
  );
};

export default WhyStudentHireSection;

"use client";
import React from 'react';
import WhyStudentHire from '@/container/All-props-comp/why_student_hire/why_student_hire';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import StarsIcon from '@mui/icons-material/Stars';

const WhyStudentHireSection = ({ centerImage }: { centerImage?: string }) => {
  return (
    <WhyStudentHire
      heading="What We Help Students With"
      subHeading="Our GRE professionals provide personalized academic support tailored to your requirements, deadlines, and academic goals."
      centerImage={centerImage}
      featuresLeft={[
        {
          icon: <HandshakeIcon />,
          title: "GRE Specialist",
          desc: "Our expert professionals provide help for your GRE test; each of them has completed their PhD and master's degrees."
        },
        {
          icon: <BeachAccessIcon />,
          title: "Safe and Reliable",
          desc: "Our experts have never had access to your personal information. We provide them with the necessary login credentials, and they know the order ID."
        },
        {
          icon: <LockIcon />,
          title: "No Hidden Charges",
          desc: "You don't have to worry about any additional charges. We believe in transparency and honesty, so you will never be surprised by unexpected charges."
        }
      ]}
      featuresRight={[
        {
          icon: <CheckCircleOutlineIcon />,
          title: "Last Minute Help",
          desc: "If you need urgent help? Our team is available 24/7 for quick and reliable GRE assistance."
        },
        {
          icon: <AccountBalanceWalletIcon />,
          title: "Complete Support",
          desc: "We provide comprehensive support for all GRE sections according to your preparation level and target score."
        },
        {
          icon: <StarsIcon />,
          title: "Guaranteed Result",
          desc: "We are experienced in delivering results, and we have secured a 98th percentile rank for our 186 students, which means the majority of them get high scores."
        }
      ]}
    />
  );
};

export default WhyStudentHireSection;

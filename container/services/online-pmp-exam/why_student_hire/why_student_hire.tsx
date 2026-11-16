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
      heading="Reasons Why Students Choose Our PMP Exam Service"
      subHeading="Many Students Pass Their PMP Exam With Our Help, and we want to help students reach their objectives. All our tutors are highly qualified and meet your requirements. Check out the reasons why students hire us for their exam help."
      centerImage={centerImage}
      featuresLeft={[
        {
          icon: <HandshakeIcon />,
          title: "PhD Experts",
          desc: "We have many tutors, and every tutor holds a PhD degree from top universities. Plus, they have at least five years of practical project management and exam coaching experience."
        },
        {
          icon: <BeachAccessIcon />,
          title: "Easy to Access",
          desc: "It is simple to get started with our service. Within a few clicks, you can connect with us and meet the tutor as per your requirements."
        },
        {
          icon: <LockIcon />,
          title: "24-Hour Help",
          desc: "We support you around the clock whenever you need it. We are available on live chat anytime to answer your queries."
        }
      ]}
      featuresRight={[
        {
          icon: <CheckCircleOutlineIcon />,
          title: "Guaranteed Success",
          desc: "Our exam support service has a 100% pass rate, and our guided preparation clients have a 98% success rate."
        },
        {
          icon: <AccountBalanceWalletIcon />,
          title: "100% Original Work",
          desc: "All our work is original and well-researched. We guarantee no plagiarism and back this with a full money-back promise."
        },
        {
          icon: <StarsIcon />,
          title: "Money-Back Guarantee",
          desc: "With us, your money is safe, as we offer a full refund. We always try to satisfy our students, but in case we don't, we promise to give your money back within the warranty period."
        }
      ]}
    />
  );
};

export default WhyStudentHireSection;

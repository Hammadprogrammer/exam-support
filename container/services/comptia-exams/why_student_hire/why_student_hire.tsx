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
      title: "Experts Professionally Handling Your Exam",
      desc: "We have experts who handle all the technical questions for you, and you don't have to spend countless hours trying to understand technical and performance-based questions."
    },
    {
      icon: <BeachAccessIcon />,
      title: "Low Stress, Better Focus",
      desc: "With the expert help of our professionals, you can relax and focus on your work without any worry about preparing for the exam."
    },
    {
      icon: <CheckCircleOutlineIcon />,
      title: "Higher Passing Scores",
      desc: "Here, we help you aim for top scores in your CompTIA exam and reduce the chances of retakes and failures."
    }
  ];

  const featuresRightData = [
    {
      icon: <HandshakeIcon />,
      title: "Support for Any Time Zone",
      desc: "We have a professional team to answer your queries, no matter your location or time zone. We are here to support you."
    },
    {
      icon: <AccountBalanceWalletIcon />,
      title: "Fast Turnaround Time",
      desc: "You can get our help, as we move fast so you don't fall behind. We promise to help reduce your pressure all at once."
    },
    {
      icon: <LockIcon />,
      title: "Live Chat Support",
      desc: "You can book a 30-minute live chat before paying for a full package, where you can further discuss your requirements with your tutor and explain your course requirements."
    }
  ];

  return (
    <WhyStudentHire 
      heading="Key Benefits of Choosing Our CompTIA Exam Service"
      subHeading="When you choose our professional CompTIA exam service, it means that you are choosing the right platform that brings you the best service, as we offer smarter, safer, and faster solutions to students. These benefits are mentioned below."
      featuresLeft={featuresLeftData}
      featuresRight={featuresRightData}
      centerImage={centerImage}
    />
  );
};

export default WhyStudentHireSection;

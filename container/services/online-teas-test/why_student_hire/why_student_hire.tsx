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
      title: "Detail-Oriented Experts",
      desc: "We have experts with years of knowledge and experience in creating unique, customized work."
    },
    {
      icon: <AccountBalanceWalletIcon />,
      title: "Fair Prices",
      desc: "We set the price based on the student's budget. So you can afford our service."
    },
    {
      icon: <LockIcon />,
      title: "100% Confidential",
      desc: "We set a policy, where none of your information can be shared with a third party."
    }
  ];

  const featuresRightData = [
    {
      icon: <CheckCircleOutlineIcon />,
      title: "Grades Guaranteed",
      desc: "We ensure top academic performance with guaranteed good grades."
    },
    {
      icon: <HandshakeIcon />,
      title: "24/7 Support",
      desc: "Our support team is available around the clock to answer your questions and provide assistance whenever you need it."
    },
    {
      icon: <BeachAccessIcon />,
      title: "On-Time Delivery",
      desc: "We value time; that's why we deliver every exam on time. Or, if we are unable to deliver, we issue a refund."
    }
  ];

  return (
    <WhyStudentHire 
      heading="Our Guaranteed Excellence Beyond the Quality Of Our Service"
      subHeading="We understand how important it is for you to get the desired marks, and here we offer you several benefits of taking our TEAS exam service. Our noticeable features help you eventually acquire these skills. Let's check:"
      featuresLeft={featuresLeftData}
      featuresRight={featuresRightData}
      centerImage={centerImage}
    />
  );
};

export default WhyStudentHireSection;

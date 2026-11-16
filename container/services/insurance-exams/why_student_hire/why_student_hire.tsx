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
      heading="Why Choose Our Online Insurance Exam Help Service?"
      subHeading="Getting exam help from us reduces many risks. By assisting you with a professional tutor, we help reduce anxiety and the risk of failure along the way."
      centerImage={centerImage}
      featuresLeft={[
        {
          icon: <HandshakeIcon />,
          title: "Real-World Experience",
          desc: "We don't have any freelancers. Our tutors are certified, experienced insurance teachers and active licensed agents on staff."
        },
        {
          icon: <BeachAccessIcon />,
          title: "Secure and Private Service",
          desc: "Your privacy is our prime concern, and we work to keep it secure. We use encrypted chats and industry-leading data protection."
        },
        {
          icon: <LockIcon />,
          title: "Budget-Friendly Price",
          desc: "We know many students step back from getting exam help due to high pricing. That's why we provide affordable pricing that students can easily manage."
        }
      ]}
      featuresRight={[
        {
          icon: <CheckCircleOutlineIcon />,
          title: "Reliable Support",
          desc: "We are committed to providing reliable guidance and support throughout your exam preparation."
        },
        {
          icon: <AccountBalanceWalletIcon />,
          title: "On-Time Support",
          desc: "Our professional staff is available 24/7 to answer your queries and remove any concerns."
        },
        {
          icon: <StarsIcon />,
          title: "Preparation for a Passing Score",
          desc: "Our goal is to reduce the risk of failure. We help you prepare for success on your first attempt by focusing on accuracy, practice, and proper guidance."
        }
      ]}
    />
  );
};

export default WhyStudentHireSection;

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
      heading="Why Students Trust Us for Assignment Help"
      subHeading="We combine subject specialist writers and rigorous quality checkers to deliver every assignment under tight deadlines that will surely bring top grades."
      centerImage={centerImage}
      featuresLeft={[
        {
          icon: <HandshakeIcon />,
          title: "Subject Specialist",
          desc: "We have vetted subject specialists in many fields; whether you need assistance in business or nursing, we have experienced people to handle your work with great care."
        },
        {
          icon: <BeachAccessIcon />,
          title: "Always On Time",
          desc: "We guarantee on-time delivery for every order."
        },
        {
          icon: <LockIcon />,
          title: "Affordable Price",
          desc: "We design our system in a way to offer student-friendly rates with no hidden fees."
        }
      ]}
      featuresRight={[
        {
          icon: <CheckCircleOutlineIcon />,
          title: "100% Custom Written",
          desc: "We make sure to deliver every assignment with proper research based on your specific requirements, guidelines, and marking criteria."
        },
        {
          icon: <AccountBalanceWalletIcon />,
          title: "Any Academic Level",
          desc: "If you want online assignment help for undergraduate, postgraduate, or doctoral students, we aim to connect you with a qualified writer."
        },
        {
          icon: <StarsIcon />,
          title: "Free Revision",
          desc: "We do not charge for revision of your assignment. If you find any gaps or need any further additions, you can ask us for revisions until you feel satisfied."
        }
      ]}
    />
  );
};

export default WhyStudentHireSection;

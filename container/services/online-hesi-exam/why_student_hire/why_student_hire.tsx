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
      heading="Just Say Take My HESI Exam and See the Benefits!"
      subHeading="Students who use our service enjoy a lot of benefits, with professional support to achieve their academic goals through a simple and effective process."
      centerImage={centerImage}
      featuresLeft={[
        {
          icon: <HandshakeIcon />,
          title: "HESI Specialty",
          desc: "We provide specialized support for students who want to succeed in certain nursing specialties. We provide you with targeted support because our experts are trained to support you."
        },
        {
          icon: <BeachAccessIcon />,
          title: "Secure Payment",
          desc: "We keep your information confidential when you request online HESI exam help."
        },
        {
          icon: <LockIcon />,
          title: "Exam Day Assistance",
          desc: "Our professionals guide you through the exam process, ensuring a smooth experience."
        }
      ]}
      featuresRight={[
        {
          icon: <CheckCircleOutlineIcon />,
          title: "Guaranteed Results",
          desc: "We have experience assisting students in achieving their desired HESI test results. By utilizing our service, several students have been admitted to their desired nursing schools."
        },
        {
          icon: <AccountBalanceWalletIcon />,
          title: "24-Hour Support",
          desc: "Since every student has many questions, we provide timely answers while assisting you in concentrating on areas that still need work."
        },
        {
          icon: <StarsIcon />,
          title: "Good Pricing",
          desc: "We provide a simple, easy-to-understand price structure. There are no additional fees. The amount you pay is set according to the type and duration of the exam."
        }
      ]}
    />
  );
};

export default WhyStudentHireSection;

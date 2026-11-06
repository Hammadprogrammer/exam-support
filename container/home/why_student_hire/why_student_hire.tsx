"use client";
import React from 'react';
import WhyStudentHire from '@/container/All-props-comp/why_student_hire/why_student_hire';
import SchoolIcon from '@mui/icons-material/School';
import LockIcon from '@mui/icons-material/Lock';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StarsIcon from '@mui/icons-material/Stars';

const WhyStudentHireSection = () => {
  return (
    <WhyStudentHire
      heading="Why Students Are Using Our Professional Take My Online Exam Service From Us?"
      subHeading="We offer numerous benefits for students looking for professional take my online exam support. That's why many students keep coming back and rate us highly. Let's see what advantages you can get from our services."
      centerImage="/img/home/vector-image.jpg"
      featuresLeft={[
        {
          icon: <SchoolIcon />,
          title: "Experienced Exam Specialists",
          desc: "Our online exam specialists possess advanced degrees in various fields, making them well-equipped to provide high-quality academic guidance that meets your learning needs and helps you prepare with confidence."
        },
        {
          icon: <LockIcon />,
          title: "Security and Privacy",
          desc: "We take our clients' privacy seriously and ensure that all the information they provide is kept confidential. We use secure servers and encryption to protect your data from unauthorized access."
        },
        {
          icon: <AccountBalanceWalletIcon />,
          title: "Affordable Rates",
          desc: "We offer affordable pricing for students on a budget. We understand that many students have limited financial resources, which is why we strive to keep our academic support service accessible."
        }
      ]}
      featuresRight={[
        {
          icon: <AccessTimeIcon />,
          title: "Timely Delivery",
          desc: "We have professional experts who make sure to deliver study material and academic guidance on time while maintaining accuracy and well-researched work."
        },
        {
          icon: <HandshakeIcon />,
          title: "Instant Help",
          desc: "At Exam Support Online, our professional team is available 24/7 to answer your queries and provide assistance whenever you need it."
        },
        {
          icon: <StarsIcon />,
          title: "Better Academic Result",
          desc: "Our goal is to help students improve their academic performance through expert guidance and personalized exam preparation. We focus on building confidence, strengthening subject knowledge, and helping students work toward higher grades."
        }
      ]}
    />
  );
};

export default WhyStudentHireSection;

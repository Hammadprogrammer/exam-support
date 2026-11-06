"use client";
import FeaturesSection from "@/container/All-props-comp/feature_section/feature_sectio";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import WifiTetheringOutlinedIcon from '@mui/icons-material/WifiTetheringOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const FeatureSectionHome = () => {
  const features = [
    {
      title: "Qualified Team",
      desc: "We have a team of expert professionals who have years of experience in teaching and helping with different types of exams.",
      icon: <GroupsOutlinedIcon />,
    },
    {
      title: "Secure & Private",
      desc: "Want to keep your information private? Here, we do exactly that. We take your privacy seriously and work to keep your personal data and exam details secure with us.",
      icon: <WifiTetheringOutlinedIcon />,
    },
    {
      title: "24/7 Available",
      desc: "We designed our system in a way to provide support at any time of the day.",
      icon: <CheckBoxOutlinedIcon />,
    },
    {
      title: "Track Record",
      desc: "Students prefer our services to get higher grades, and you can be next with our experienced team.",
      icon: <AssignmentTurnedInOutlinedIcon />,
    },
    {
      title: "No Stress",
      desc: "Our tutors sit with you and explain every topic until you fully understand it, so you can prepare without pressure.",
      icon: <SentimentSatisfiedAltIcon />,
    },
    {
      title: "Personalized Assistance",
      desc: "You will receive personalized support and guidance so that you can perform at your best.",
      icon: <PersonOutlineOutlinedIcon />,
    },
  ];

  return (
    <FeaturesSection
      mainHeading="Get Professional Support From Our Online Exam Service Features"
      subText="Are you tired of dealing with proctoring pressure and deadlines? Here, we are dedicated to helping you get the right support that truly aligns with your requirements."
      features={features}
    />
  );
};

export default FeatureSectionHome;

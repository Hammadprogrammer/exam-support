"use client";
import React from 'react';
import WhyStudentHire from '@/container/All-props-comp/why_student_hire/why_student_hire';

const WhyStudentHireSection = ({ centerImage }: { centerImage?: string }) => {
  return (
    <WhyStudentHire centerImage={centerImage} />
  );
};

export default WhyStudentHireSection;

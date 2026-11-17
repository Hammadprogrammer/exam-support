import React from 'react'
import type { Metadata } from 'next'
import HeroSection from '@/container/services/comptia-exams/hero_section/hero_section'
import OurServiceSection from '@/container/services/comptia-exams/our_service/our_service'

import ContentSectionOne from '@/container/services/comptia-exams/content_section_one/Content_section_one'
import CounterSectionHome from '@/container/services/comptia-exams/counter_section/counter_section'
import ExamSection from '@/container/home/exam_section/exam_section'

import ContentSectionTwoHome from '@/container/services/comptia-exams/content_section_two/content_section_two'

import AboutTeamHome from '@/container/services/comptia-exams/about_team/about_team'
import ContentSectionThree from '@/container/services/comptia-exams/content_section_three/content_section_three'

import WhyStudentHireSection from '@/container/services/comptia-exams/why_student_hire/why_student_hire'
import FeatureSectionHome from '@/container/home/feature_section/feature_section'
import TrustedByHome from '@/container/home/trusted_by/trusted_by'
import GetQuoteHome from '@/container/services/comptia-exams/get_quote/get_quote'
import ClientReviewsHome from '@/container/services/comptia-exams/client_reviews/client_reviews'

export const metadata: Metadata = {
  title: "Take My Online CompTIA Exam With a Guaranteed Score",
  description: "Finding difficulty with your CompTIA exam? We help you connect with the right expert who suits your requirements and provides professional guidance to help you achieve top scores.",
  alternates: {
    canonical: "/take-my-comptia-exam/",
  },
}



const page = () => {
  return (
    <>
      <HeroSection />
      <OurServiceSection />
      <CounterSectionHome />
      <ContentSectionTwoHome />
      <AboutTeamHome />
      <ContentSectionOne />
      <ExamSection />
      <WhyStudentHireSection centerImage="/service/vector.jpg" />
      <ContentSectionThree />
      <FeatureSectionHome />
      <TrustedByHome />
      <GetQuoteHome />
      <ClientReviewsHome />
    </>
  )
}

export default page


import React from 'react'
import type { Metadata } from 'next'
import HeroSection from '@/container/services/insurance-exams/hero_section/hero_section'
import OurServiceSection from '@/container/services/insurance-exams/our_service/our_service'

import ContentSectionOne from '@/container/services/insurance-exams/content_section_one/Content_section_one'
import CounterSectionHome from '@/container/services/insurance-exams/counter_section/counter_section'
import ExamSection from '@/container/home/exam_section/exam_section'

import ContentSectionTwoHome from '@/container/services/insurance-exams/content_section_two/content_section_two'

import AboutTeamHome from '@/container/services/insurance-exams/about_team/about_team'
import ContentSectionThree from '@/container/services/insurance-exams/content_section_three/content_section_three'

import WhyStudentHireSection from '@/container/services/insurance-exams/why_student_hire/why_student_hire'
import TrustedByHome from '@/container/home/trusted_by/trusted_by'
import GetQuoteHome from '@/container/services/insurance-exams/get_quote/get_quote'
import ClientReviewsHome from '@/container/services/insurance-exams/client_reviews/client_reviews'

export const metadata: Metadata = {
  title: "Do My Insurance Exam With a Safe and Reliable Service",
  description: "Get professional insurance exam help with reliable tutors, flexible support, complete privacy, and affordable preparation services.",
  alternates: {
    canonical: "/take-my-insurance-exam/",
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
      <TrustedByHome />
      <GetQuoteHome />
      <ClientReviewsHome />
    </>
  )
}

export default page


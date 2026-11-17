import React from 'react'
import type { Metadata } from 'next'
import HeroSection from '@/container/services/online-teas-test/hero_section/hero_section'
import OurServiceSection from '@/container/services/online-teas-test/our_service/our_service'

import ContentSectionOne from '@/container/services/online-teas-test/content_section_one/Content_section_one'
import CounterSectionHome from '@/container/services/online-teas-test/counter_section/counter_section'
import ExamSection from '@/container/home/exam_section/exam_section'

import ContentSectionTwoHome from '@/container/services/online-teas-test/content_section_two/content_section_two'

import AboutTeamHome from '@/container/services/online-teas-test/about_team/about_team'
import ContentSectionThree from '@/container/services/online-teas-test/content_section_three/content_section_three'

import WhyStudentHireSection from '@/container/services/online-teas-test/why_student_hire/why_student_hire'
import FeatureSectionHome from '@/container/home/feature_section/feature_section'
import TrustedByHome from '@/container/home/trusted_by/trusted_by'
import GetQuoteHome from '@/container/services/online-teas-test/get_quote/get_quote'
import ClientReviewsHome from '@/container/services/online-teas-test/client_reviews/client_reviews'

export const metadata: Metadata = {
  title: "Hire Someone To Take My TEAS Exam With 100% Excellence",
  description: "If you are looking for someone to take your TEAS exam, look no further. Exam Support Online helps you connect with a professional tutor easily.",
  alternates: {
    canonical: "/take-my-teas-exam/",
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


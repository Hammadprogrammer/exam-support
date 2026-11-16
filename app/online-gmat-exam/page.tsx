import React from 'react'
import type { Metadata } from 'next'
import HeroSection from '@/container/services/online-gmat-exam/hero_section/hero_section'
import OurServiceSection from '@/container/services/online-gmat-exam/our_service/our_service'

import ContentSectionOne from '@/container/services/online-gmat-exam/content_section_one/Content_section_one'
import CounterSectionHome from '@/container/services/online-gmat-exam/counter_section/counter_section'
import ExamSection from '@/container/home/exam_section/exam_section'

import ContentSectionTwoHome from '@/container/services/online-gmat-exam/content_section_two/content_section_two'

import AboutTeamHome from '@/container/services/online-gmat-exam/about_team/about_team'
import ContentSectionThree from '@/container/services/online-gmat-exam/content_section_three/content_section_three'

import WhyStudentHireSection from '@/container/services/online-gmat-exam/why_student_hire/why_student_hire'
import FeatureSectionHome from '@/container/home/feature_section/feature_section'
import TrustedByHome from '@/container/home/trusted_by/trusted_by'
import GetQuoteHome from '@/container/services/online-gmat-exam/get_quote/get_quote'
import ClientReviewsHome from '@/container/services/online-gmat-exam/client_reviews/client_reviews'

export const metadata: Metadata = {
  title: "Pay Someone to Take My GMAT Exam With Top Scores",
  description: "If you are looking for GMAT exam help, we are here to offer expert guidance to help you achieve top grades.",
  alternates: {
    canonical: "/online-gmat-exam/",
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


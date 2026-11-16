import React from 'react'
import type { Metadata } from 'next'
import HeroSection from '@/container/services/assignment-help/hero_section/hero_section'
import OurServiceSection from '@/container/services/assignment-help/our_service/our_service'
import ContentSectionOne from '@/container/services/assignment-help/content_section_one/Content_section_one'
import CounterSectionHome from '@/container/services/assignment-help/counter_section/counter_section'
import ExamSection from '@/container/home/exam_section/exam_section'
import ContentSectionTwoHome from '@/container/services/assignment-help/content_section_two/content_section_two'
import AboutTeamHome from '@/container/services/assignment-help/about_team/about_team'
import ContentSectionThree from '@/container/services/assignment-help/content_section_three/content_section_three'
import WhyStudentHireSection from '@/container/services/assignment-help/why_student_hire/why_student_hire'
import FeatureSectionHome from '@/container/home/feature_section/feature_section'
import TrustedByHome from '@/container/home/trusted_by/trusted_by'
import GetQuoteHome from '@/container/services/assignment-help/get_quote/get_quote'
import ClientReviewsHome from '@/container/services/assignment-help/client_reviews/client_reviews'

export const metadata: Metadata = {
  title: "Get Professional Assignment Help To Score High",
  description: "If you are looking for assignment writing help, here you can get top-notch service done by professional experts.",
  alternates: {
    canonical: "/assignment-help/",
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


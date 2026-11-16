import React from 'react'
import type { Metadata } from 'next'
import HeroSection from '@/container/services/online-gre-test/hero_section/hero_section'
import OurServiceSection from '@/container/services/online-gre-test/our_service/our_service'

import ContentSectionOne from '@/container/services/online-gre-test/content_section_one/Content_section_one'
import CounterSectionHome from '@/container/services/online-gre-test/counter_section/counter_section'
import ExamSection from '@/container/home/exam_section/exam_section'

import ContentSectionTwoHome from '@/container/services/online-gre-test/content_section_two/content_section_two'

import AboutTeamHome from '@/container/services/online-gre-test/about_team/about_team'
import ContentSectionThree from '@/container/services/online-gre-test/content_section_three/content_section_three'

import WhyStudentHireSection from '@/container/services/online-gre-test/why_student_hire/why_student_hire'
import FeatureSectionHome from '@/container/home/feature_section/feature_section'
import TrustedByHome from '@/container/home/trusted_by/trusted_by'
import GetQuoteHome from '@/container/services/online-gre-test/get_quote/get_quote'
import ClientReviewsHome from '@/container/services/online-gre-test/client_reviews/client_reviews'

export const metadata: Metadata = {
  title: "Hire Someone to Take My GRE Exam With Full Support",
  description: "If you are looking to hire someone for your GRE exam preparation, visit us. We provide expert support at an affordable price.",
  alternates: {
    canonical: "/online-gre-test/",
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


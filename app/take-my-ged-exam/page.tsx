import React from 'react'
import type { Metadata } from 'next'
import HeroSection from '@/container/services/online-ged-test/hero_section/hero_section'
import OurServiceSection from '@/container/services/online-ged-test/our_service/our_service'

import ContentSectionOne from '@/container/services/online-ged-test/content_section_one/Content_section_one'  
import CounterSectionHome from '@/container/services/online-ged-test/counter_section/counter_section'
import ExamSection from '@/container/home/exam_section/exam_section'

import ContentSectionTwoHome from '@/container/services/online-ged-test/content_section_two/content_section_two'

import AboutTeamHome from '@/container/services/online-ged-test/about_team/about_team'
import ContentSectionThree from '@/container/services/online-ged-test/content_section_three/content_section_three'

import WhyStudentHireSection from '@/container/services/online-ged-test/why_student_hire/why_student_hire'
import TrustedByHome from '@/container/home/trusted_by/trusted_by'
import GetQuoteHome from '@/container/services/online-ged-test/get_quote/get_quote'
import ClientReviewsHome from '@/container/services/online-ged-test/client_reviews/client_reviews'
import ContentSectionFour from '@/container/services/online-ged-test/content_section_four/content_section_four'
import ContentSectionFive from '@/container/services/online-ged-test/content_section_five/content_section_five'
import FAQSectionData from '@/container/services/online-ged-test/fqa/faq'

export const metadata: Metadata = {
  title: "Pay Someone to Take My GED Test Online with Secure IPs",
  description: "Exam Support Online brings the right help for students looking to hire someone for their GED exam preparation and support.",
  alternates: {
    canonical: "/take-my-ged-exam/",
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
      <ContentSectionFour />
      <GetQuoteHome />
      <ContentSectionFive />
      <ClientReviewsHome />
      <FAQSectionData/>
    </>
  )
}

export default page


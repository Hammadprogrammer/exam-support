import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/law-exam/data'

export const metadata: Metadata = {
  title: "Hire Someone to Take My Law Exam at an Affordable Price",
  description: "Looking to hire someone to take your law exam at an affordable price? Exam Support Online offers expert law exam preparation and guidance to help you understand complex legal topics.",
  alternates: {
    canonical: "/law-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page
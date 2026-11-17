import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/aws-exam/data'

export const metadata: Metadata = {
  title: "Take My AWS Exam for Me With Professional Exam Support",
  description: "Looking for reliable AWS exam assistance? Get professional guidance from experienced tutors and support tailored to your certification requirements.",
  alternates: {
    canonical: "/aws-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page

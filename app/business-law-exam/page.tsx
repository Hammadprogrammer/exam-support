import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/business-law-exam/data'

export const metadata: Metadata = {
  title: "Take My Business Law Exam For Me With Reliable Solutions",
  description: "Get professional business law exam help from Exam Support Online. Expert tutors, timely support, and affordable prices across the USA.",
  alternates: {
    canonical: "/business-law-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page

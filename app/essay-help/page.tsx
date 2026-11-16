import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/essay-help/data'

export const metadata: Metadata = {
  title: "Pay Someone To Do My Essay With Professionalism",
  description: "Exam Support Online is one of the best essay service providers, giving affordable and excellent service all across the USA.",
  alternates: {
    canonical: "/essay-help/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page

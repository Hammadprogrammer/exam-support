import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/business-law-exam/data'

export const metadata: Metadata = {
  title: "Get 100% Original Business Law Exam With Us",
  description: "Take my business law exam and secure top scores. Personalized support with reliable and student-friendly solutions.",
  alternates: {
    canonical: "/take-my-business-law-exam-for-me/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page
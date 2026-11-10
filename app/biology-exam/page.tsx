import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/biology-exam/data'

export const metadata: Metadata = {
  title: "Hire Someone to Take My Online Biology Exam and Get Better Grades",
  description: "Exam Support Online helps you find the right tutor who meets your requirements and provides affordable support to help you prepare for your biology exam.",
  alternates: {
    canonical: "/biology-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page
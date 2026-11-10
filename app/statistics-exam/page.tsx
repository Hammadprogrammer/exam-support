import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/statistics-exam/data'

export const metadata: Metadata = {
  title: "Get Statistics Exam Help from Us and Improve Your Grades",
  description: "Exam Support Online helps you connect with the right tutor for timely online statistics exam support and guidance to help you achieve top-tier grades.",
  alternates: {
    canonical: "/statistics-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page
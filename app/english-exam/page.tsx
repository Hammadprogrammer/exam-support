import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/english-exam/data'

export const metadata: Metadata = {
  title: "Hire an Expert for Trusted English Exam Help",
  description: "Exam Support Online helps you find trusted and reliable experts who provide 24/7 support with your English exam preparation.",
  alternates: {
    canonical: "/english-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page
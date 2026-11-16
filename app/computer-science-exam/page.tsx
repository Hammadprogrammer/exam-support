import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/computer-science-exam/data'

export const metadata: Metadata = {
  title: "Pay Someone to Take My Computer Science Exam For Better Grades",
  description: "Get secure and reliable computer science exam help from Exam Support Online. Expert professionals, 24/7 support, and guaranteed results.",
  alternates: {
    canonical: "/computer-science-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page

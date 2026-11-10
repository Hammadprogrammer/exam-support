import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/psychology-exam/data'

export const metadata: Metadata = {
  title: "Hire a Professional Tutor for My Psychology Exam",
  description: "If you are looking for professional psychology exam help, look no further. Exam Support Online is providing affordable and timely support to help you improve your performance.",
  alternates: {
    canonical: "/psychology-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page
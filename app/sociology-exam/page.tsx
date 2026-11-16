import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/sociology-exam/data'

export const metadata: Metadata = {
  title: "Do My Sociology Exam Online With Top Scores",
  description: "Need help with your sociology exam? Exam Support Online provides professional sociology exam preparation support at highly affordable rates.",
  alternates: {
    canonical: "/sociology-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page

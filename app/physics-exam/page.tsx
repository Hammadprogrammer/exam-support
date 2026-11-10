import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/physics-exam/data'

export const metadata: Metadata = {
  title: "Take My Physics Exam Assistance with Professionals",
  description: "Exam Support Online is offering you the opportunity to get professional physics exam help at an affordable price all over the USA.",
  alternates: {
    canonical: "/physics-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page
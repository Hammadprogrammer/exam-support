import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/home-exam/data'

export const metadata: Metadata = {
  title: "Hire Someone to Take My Online Exam with 24-Hour Support",
  description: "Get reliable online exam help with 24-hour support from Exam Support Online. Connect with professional tutors for timely guidance, practice, and preparation to improve your performance.",
  alternates: {
    canonical: "/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page


import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/philosophy-exam/data'

export const metadata: Metadata = {
  title: "Get Top-Quality Online Philosophy Exam Help From Us",
  description: "Find the right tutor for your philosophy exam. We help you get expert assistance without asking for more money.",
  alternates: {
    canonical: "/philosophy-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page


import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/calculus-exam/data'

export const metadata: Metadata = {
  title: "Get Calculus Exam Without Any Stress",
  description: "Secure desired results through reliable online calculus exam help services. Specialized, secure, and student-friendly solutions.",
  alternates: {
    canonical: "/calculus-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page
import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/algebra-exam/data'

export const metadata: Metadata = {
  title: "Hire Expert Algebra Exam Taker Online",
  description: "Get expert online algebra exam help from qualified specialists with a promise of high scores. Secure and affordable support.",
  alternates: {
    canonical: "/algebra-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page
import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/accounting-exam/data'

export const metadata: Metadata = {
  title: "Hire Someone To Do My Accounting Exam With 100% Satisfaction",
  description: "Reliable and affordable online accounting exam help. Hire an online accounting exam taker for guaranteed success with absolute security.",
  alternates: {
    canonical: "/accounting-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page
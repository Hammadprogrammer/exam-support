import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/finance-exam/data'

export const metadata: Metadata = {
  title: "Get Expert Help to Prepare for My Proctored Finance Exam for Better Performance",
  description: "If you are looking for expert help with your finance exam, get our professional help and boost your grades.",
  alternates: {
    canonical: "/finance-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page
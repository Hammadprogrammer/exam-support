import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/chemistry-exam/data'

export const metadata: Metadata = {
  title: "Get Exceptional Chemistry Exam Support from Exam Support Online",
  description: "If you are looking for affordable chemistry exam help, contact us. We provide professional assistance to help you achieve your desired grades.",
  alternates: {
    canonical: "/chemistry-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page
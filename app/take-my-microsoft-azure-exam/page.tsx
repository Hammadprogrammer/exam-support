import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/azure-exam/data'

export const metadata: Metadata = {
  title: "Best Sites to Get Azure Exam Help",
  description: "If you are looking for affordable Take My Azure Exam help, look no further. Exam Support Online is bringing you quality services at an affordable price.",
  alternates: {
    canonical: "/take-my-microsoft-azure-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page

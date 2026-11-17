import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/real-estate-exam/data'

export const metadata: Metadata = {
  title: "Pay Someone to Take Your Real Estate Exam With 100% Confidence",
  description: "Exam Support Online is one of the best websites in the USA where you can get expert, on-time real estate exam assistance in a secure manner.",
  alternates: {
    canonical: "/real-estate-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page

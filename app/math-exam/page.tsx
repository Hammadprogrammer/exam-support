import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/math-exam/data'

export const metadata: Metadata = {
  title: "Pay for Online Math Exam Help and Aim for a Higher Score",
  description: "Find a reliable and affordable partner for online math exam preparation without hidden charges or unexpected upfront costs.",
  alternates: {
    canonical: "/math-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page
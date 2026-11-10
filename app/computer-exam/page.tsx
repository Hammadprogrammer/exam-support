import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/computer-science-exam/data'

export const metadata: Metadata = {
  title: "Pay Someone to Take My Computer Science Exam and Be at Ease",
  description: "If you are looking for a reliable and affordable exam preparation service, Exam Support Online is a reliable choice for computer science exam assistance at an affordable price.",
  alternates: {
    canonical: "/computer-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page
import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/hiset-exam/data'

export const metadata: Metadata = {
  title: "Pay Someone to Take My HiSET Exam With Excellence Assured",
  description: "Need support for your HiSET exam? Get professional help to prepare for your exam and achieve top grades without stress.",
  alternates: {
    canonical: "/hiset-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page

import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/homework-help/data'

export const metadata: Metadata = {
  title: "Do My Homework For Me, That Gets Me Top Scores",
  description: "Find reliable homework help with us. Our tutors do it with full security, providing guaranteed results throughout the homework.",
  alternates: {
    canonical: "/homework-help/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page

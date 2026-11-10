import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/wgu-exam/data'

export const metadata: Metadata = {
  title: "Pay Someone to Help with My Online WGU Exam and Get Top Grades",
  description: "WGU exams are getting difficult? Visit our site. Here, our expert tutors help students get their desired results at an affordable price.",
  alternates: {
    canonical: "/wgu-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page

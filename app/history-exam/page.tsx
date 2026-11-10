import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/history-exam/data'

export const metadata: Metadata = {
  title: "Hire Someone to Help With My History Exam and Get Great Results",
  description: "Exam Support Online provides you with reliable and professional history exam help to support you in achieving your desired A grades.",
  alternates: {
    canonical: "/history-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page
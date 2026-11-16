import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/lean-six-sigma-exam/data'

export const metadata: Metadata = {
  title: "Choose Our Take My Lean Six Sigma Help And Pass On Your First Attempt",
  description: "Get in touch with our expert tutors and find out how they can help you succeed on your first attempt. Contact us today!",
  alternates: {
    canonical: "/lean-six-sigma-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page

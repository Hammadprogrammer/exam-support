import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/lsat-exam/data'

export const metadata: Metadata = {
  title: "Pay Someone to Take LSAT Exam With Secure and Reliable Support",
  description: "Looking for help? Exam Support Online saves your time, your efforts, and your money while helping you get top scores through our Take My LSAT Exam service.",
  alternates: {
    canonical: "/lsat-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page

import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/nursing-exam/data'

export const metadata: Metadata = {
  title: "Pay Someone to Take My Online Nursing Exam for Me with Guaranteed A Grades",
  description: "Explore the online nursing exam provider and get your desired results at highly affordable rates with us.",
  alternates: {
    canonical: "/nursing-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page


import React from 'react'
import type { Metadata } from 'next'
import SubjectPage from '@/container/subject/subject_page/subject_page'
import data from '@/container/subject/economics-exam/data'

export const metadata: Metadata = {
  title: "Pay Someone to Take My Online Economics Exam for Me and Get an A",
  description: "Exam Support Online is an advanced service provider where you can get online class help at highly affordable rates.",
  alternates: {
    canonical: "/economics-exam/",
  },
}

const page = () => {
  return <SubjectPage data={data} />
}

export default page
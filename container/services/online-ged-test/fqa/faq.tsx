"use client";
import FAQSection from '@/container/All-props-comp/fqa-read/fqa'

const FAQSectionData = () => {
  const myFaqData = [
    {
      id: "Q1",
      question: "Can I pay someone to take my exam?",
      answer: "Well, it's illegal. But here, we connect you with our tutor who makes a simple study plan, focuses on your weak subjects, and helps you practice with real test questions; this way, you can pass it easily."
    },
    {
      id: "Q2",
      question: "Do I get GED test help anywhere in the USA?",
      answer: "Yes. You get practice questions, video lessons, and live help from professional tutors, all from home."
    },
    {
      id: "Q3",
      question: "Do you have GED tutors that can be contacted 24/7?",
      answer: "Yes. Our tutors are available any time, day or night. Stuck on something late? Just reach out and get help."
    },
    {
      id: "Q4",
      question: "Is there affordable preparation for the GED?",
      answer: "Yes. Our plans are flexible and budget-friendly. Pick the support you need and pay only for that."
    }
  ];

  return (
    <FAQSection 
      mainTitle="Frequently Asked Questions"
      description="If you have any questions about our GED exam help, read on to see how we help you succeed."
      buttonText="Talk to our experts"
      faqList={myFaqData}
    />
  );
};

export default FAQSectionData;

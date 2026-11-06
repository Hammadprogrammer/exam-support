"use client";
import FAQSection from '@/container/All-props-comp/fqa-read/fqa'

const FAQSectionData = () => {
  const myFaqData = [
    {
      id: "Q1",
      question: "How do I get online exam help quickly?",
      answer: "Message us or fill out the form. Most students are matched with a tutor the same day, and we’re available 24/7."
    },
    {
      id: "Q2",
      question: "Is my information safe and confidential?",
      answer: "Yes. Your details stay with us and are never shared with anyone."
    },
    {
      id: "Q3",
      question: "Can someone take my online exam for me?",
      answer: "No. That breaks school rules and can lead to serious consequences. Our tutors help you prepare so you can take it yourself with confidence."
    },
    {
      id: "Q4",
      question: "What if my exam is very soon?",
      answer: "Tell us your exam date right away. We’ll try to set up a focused prep session as quickly as possible."
    }
  ];

  return (
    <FAQSection 
      mainTitle="Read Our FAQs"
      description="Got questions? Here are quick answers about how our online exam help works."
      buttonText="Talk to our experts"
      faqList={myFaqData}
    />
  );
};

export default FAQSectionData;
"use client";
import GetQuote from "@/container/All-props-comp/get_quote/get_quote";

const GetQuoteHome = () => {
  return (
    <GetQuote
      topLabel="Get A Quote!"
      heading="Do My Online HESI Exam"
      description="Students across the USA can access 24/7 expert support for exam success. Let us handle the stress while you focus on your goals."
      contactHeading="Send Us a Message"
      contactDescription="Our expert team is here to answer your questions even at late hours. Send us your syllabus requirements, and we'll handle everything."
      phone="+1 408-664-0987"
      email="info@examsupportonline.com"
      liveChatText='Live Chat: Type "Yes" to Start'
      formHeading="Half Session Off"
      formDescription="Sign up today and get 50% off your first session."
      btnText="Get Instant Quote"
    />
  );
};

export default GetQuoteHome;

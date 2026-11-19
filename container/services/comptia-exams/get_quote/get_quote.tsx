"use client";
import GetQuote from "@/container/All-props-comp/get_quote/get_quote";

const GetQuoteHome = () => {
  return (
    <GetQuote
      topLabel="Get A Quote"
      heading="Take My CompTIA Exam"
      description="Exam Support Online is known for providing a simple procedure to request a quote. So, just share your information with us."
      contactHeading="Share Your Course Details"
      contactDescription="Our expert team is here to answer you even at late hours. Send us your syllabus requirements, and we'll handle everything."
      phone="+1 408-664-0987"
      email="info@examsupportonline.com"
      liveChatText='Live Chat: Type "Yes" to Start'
      formHeading="Early Bird Discount"
      formDescription="Sign up today and get 50% off your first session."
      btnText="Get Instant Quote"
    />
  );
};

export default GetQuoteHome;

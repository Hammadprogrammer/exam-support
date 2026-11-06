"use client";
import GetQuote from "@/container/All-props-comp/get_quote/get_quote";

const GetQuoteHome = () => {
  return (
    <GetQuote
      topLabel="Get A Quote"
      heading="Need Help With An Online Exam?"
      description="Let Exam Support Online handle it securely and affordably."
      contactHeading="Place Your Request Here"
      contactDescription="We’ll match you with support you can trust when you need it most."
      phone="+12123476533"
      email="info@allexamhelp.com"
      liveChatText='Live Chat: Type "Yes" to Start'
      formHeading="Enjoy a 50% Discount on Sign-up"
      formDescription="Sign up today, get a free quote, and save 50% on your first session. No commitment needed."
      btnText="Get Instant Quote"
    />
  );
};

export default GetQuoteHome;

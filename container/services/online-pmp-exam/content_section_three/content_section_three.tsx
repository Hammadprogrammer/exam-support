"use client";
import ContentThree from "@/container/All-props-comp/content_section_three/content_section_three";

const ContentSectionThree = () => {
  return (
    <>
      <ContentThree
        heading1="Reasons Why Students Choose Our PMP Exam Service"
        description1="Many Students Pass Their PMP Exam With Our Help, and we want to help students reach their objectives. All our tutors are highly qualified and meet your requirements. Check out the reasons why students hire us for their exam help."
        features={[
          {
            title: "PhD Experts",
            text: "We have many tutors, and every tutor holds a PhD degree from top universities. Plus, they have at least five years of practical project management and exam coaching experience."
          },
          {
            title: "Easy to Access",
            text: "It is simple to get started with our service. Within a few clicks, you can connect with us and meet the tutor as per your requirements."
          },
          {
            title: "24-Hour Help",
            text: "We support you around the clock whenever you need it. We are available on live chat anytime to answer your queries."
          },
          {
            title: "Guaranteed Success",
            text: "Our exam support service has a 100% pass rate, and our guided preparation clients have a 98% success rate."
          },
          {
            title: "100% Original Work",
            text: "All our work is original and well-researched. We guarantee no plagiarism and back this with a full money-back promise."
          },
          {
            title: "Money-Back Guarantee",
            text: "With us, your money is safe, as we offer a full refund. We always try to satisfy our students, but in case we don't, we promise to give your money back within the warranty period."
          }
        ]}
        image1="/service/7.jpg"
        image2="/service/6.jpg"
      />
    </>
  );
};

export default ContentSectionThree;

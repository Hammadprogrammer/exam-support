"use client";
import ContentThree from "@/container/All-props-comp/content_section_three/content_section_three";

const ContentSectionThree = () => {
  return (
    <>
      <ContentThree
        heading1="Why Choose Our Online Insurance Exam Help Service?"
        description1="Getting exam help from us reduces many risks. By assisting you with a professional tutor, we help reduce anxiety and the risk of failure along the way."
        features={[
          {
            title: "Real-World Experience",
            text: "We don't have any freelancers. Our tutors are certified, experienced insurance teachers and active licensed agents on staff."
          },
          {
            title: "Secure and Private Service",
            text: "Your privacy is our prime concern, and we work to keep it secure. We use encrypted chats and industry-leading data protection."
          },
          {
            title: "Budget-Friendly Price",
            text: "We know many students step back from getting exam help due to high pricing. That's why we provide affordable pricing that students can easily manage."
          },
          {
            title: "Reliable Support",
            text: "We are committed to providing reliable guidance and support throughout your exam preparation."
          },
          {
            title: "On-Time Support",
            text: "Our professional staff is available 24/7 to answer your queries and remove any concerns."
          },
          {
            title: "Preparation for a Passing Score",
            text: "Our goal is to reduce the risk of failure. We help you prepare for success on your first attempt by focusing on accuracy, practice, and proper guidance."
          }
        ]}
        image1="/service/7.jpg"
        image2="/service/6.jpg"
      />
    </>
  );
};

export default ContentSectionThree;

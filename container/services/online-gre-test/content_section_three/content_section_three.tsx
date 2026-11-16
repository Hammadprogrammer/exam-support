"use client";
import ContentThree from "@/container/All-props-comp/content_section_three/content_section_three";

const ContentSectionThree = () => {
  return (
    <>
      <ContentThree
        heading1="What We Help Students With"
        description1="Our GRE professionals provide personalized academic support tailored to your requirements, deadlines, and academic goals."
        features={[
          {
            title: "GRE Specialist",
            text: "Our expert professionals provide help for your GRE test; each of them has completed their PhD and master's degrees."
          },
          {
            title: "Safe and Reliable",
            text: "Our experts have never had access to your personal information. We provide them with the necessary login credentials, and they know the order ID."
          },
          {
            title: "No Hidden Charges",
            text: "You don't have to worry about any additional charges. We believe in transparency and honesty, so you will never be surprised by unexpected charges."
          },
          {
            title: "Last Minute Help",
            text: "If you need urgent help? Our team is available 24/7 for quick and reliable GRE assistance."
          },
          {
            title: "Complete Support",
            text: "We provide comprehensive support for all GRE sections according to your preparation level and target score."
          },
          {
            title: "Guaranteed Result",
            text: "We are experienced in delivering results, and we have secured a 98th percentile rank for our 186 students, which means the majority of them get high scores."
          }
        ]}
        image1="/service/7.jpg"
        image2="/service/6.jpg"
      />
    </>
  );
};

export default ContentSectionThree;

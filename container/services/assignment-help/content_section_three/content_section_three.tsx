"use client";
import ContentThree from "@/container/All-props-comp/content_section_three/content_section_three";

const ContentSectionThree = () => {
  return (
    <>
      <ContentThree
        heading1="Why Students Trust Us for Assignment Help"
        description1="We combine subject specialist writers and rigorous quality checkers to deliver every assignment under tight deadlines that will surely bring top grades."
        features={[
          {
            title: "Subject Specialist",
            text: "We have vetted subject specialists in many fields; whether you need assistance in business or nursing, we have experienced people to handle your work with great care."
          },
          {
            title: "Always On Time",
            text: "We guarantee on-time delivery for every order."
          },
          {
            title: "Affordable Price",
            text: "We design our system in a way to offer student-friendly rates with no hidden fees."
          },
          {
            title: "100% Custom Written",
            text: "We make sure to deliver every assignment with proper research based on your specific requirements, guidelines, and marking criteria."
          },
          {
            title: "Any Academic Level",
            text: "If you want online assignment help for undergraduate, postgraduate, or doctoral students, we aim to connect you with a qualified writer."
          },
          {
            title: "Free Revision",
            text: "We do not charge for revision of your assignment. If you find any gaps or need any further additions, you can ask us for revisions until you feel satisfied."
          }
        ]}
        image1="/service/7.jpg"
        image2="/service/6.jpg"
      />
    </>
  );
};

export default ContentSectionThree;

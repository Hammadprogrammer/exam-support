"use client";
import React from 'react';
import ClientReviews from '@/container/All-props-comp/client_reviews/client_reviews';

const ClientReviewsHome = () => {
  const reviewsData = [
    {
      image: "/t2.jpg", 
      name: "James Wilson",
      location: "USA",
      stars: 5,
      reviewText: "Honestly, I didn't have time to complete the course, but these guys took care of everything professionally and helped me get an A discreetly and efficiently."
    },
    {
      image: "/t4.jpg", 
      name: "Sarah Mitchell",
      location: "USA",
      stars: 5,
      reviewText: "I work full-time and was unable to take the exam on my own. Their team handled everything seamlessly, and I passed without stress."
    },
    {
      image: "/t1.jpg",
      name: "Daniel Smith",
      location: "USA",
      stars: 5,
      reviewText: "I needed someone to take my CompTIA exam and was terrified of failing again after my first attempt. But I found this service. Real experts, no AI, and everything was handled on time."
    },
    {
      image: "/t3.jpg",
      name: "Emily Carter",
      location: "USA",
      stars: 5,
      reviewText: "I highly recommend them to others. They helped me achieve my desired grades without requiring me to follow up repeatedly."
    }
  ];

  return (
    <ClientReviews 
      badgeTitle="Client Feedback"
      mainTitle="Real People, Real Reviews"
      description="We have honest reviews about our service. We are praised for our professionalism, clear communication, and on-time handling of exams. Read these reviews and see what our clients are saying."
      buttonText="Contact Us"
      buttonLink="/contact/"
      reviews={reviewsData}
    />
  );
};

export default ClientReviewsHome;

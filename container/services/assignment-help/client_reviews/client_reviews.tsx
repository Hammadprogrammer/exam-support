"use client";
import React from 'react';
import ClientReviews from '@/container/All-props-comp/client_reviews/client_reviews';

const ClientReviewsHome = () => {
  const reviewsData = [
    {
      image: "/t2.jpg", 
      name: "Sarah Ahmed",
      location: "New York",
      stars: 5,
      reviewText: "I need assignment help, and my friend suggested this site to me. They handled my business assignment perfectly and delivered it two days early. I highly recommend this service!"
    },
    {
      image: "/t4.jpg", 
      name: "James Wilson",
      location: "Texas",
      stars: 5,
      reviewText: "I used this site multiple times, and they gave me on-time support, and I got an A every time."
    },
    {
      image: "/t1.jpg",
      name: "Emily Carter",
      location: "Florida",
      stars: 5,
      reviewText: "I appreciate your help with my assignment work and would suggest it to others who are facing difficulty with their assignment work."
    },
    {
      image: "/t3.jpg",
      name: "Daniel Smith",
      location: "California",
      stars: 5,
      reviewText: "My assignment involved a complex physics concept, but their tutor helped me a lot. They made a highly researched assignment at an affordable price point."
    }
  ];

  return (
    <ClientReviews 
      badgeTitle="Client Reviews"
      mainTitle="What Students Say About Assignment Help"
      description="Do you know we have provided almost 15,000 assignments, and they all got A grades. That's why students love getting their assignments done by us."
      buttonText="Contact Us"
      buttonLink="/contact/"
      reviews={reviewsData}
    />
  );
};

export default ClientReviewsHome;

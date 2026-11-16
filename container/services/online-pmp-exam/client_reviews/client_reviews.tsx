"use client";
import React from 'react';
import ClientReviews from '@/container/All-props-comp/client_reviews/client_reviews';

const ClientReviewsHome = () => {
  const reviewsData = [
    {
      image: "/t2.jpg", 
      name: "James Wilson",
      location: "New York",
      stars: 5,
      reviewText: "I am so grateful for their support with my PMP exam. Their tutor made everything simple, and I passed my PMP certification on my first attempt."
    },
    {
      image: "/t4.jpg", 
      name: "Sarah Mitchell",
      location: "Texas",
      stars: 5,
      reviewText: "I highly recommend them! They helped me prepare for my PMP exam, and I achieved great results."
    },
    {
      image: "/t1.jpg",
      name: "Daniel Smith",
      location: "Florida",
      stars: 5,
      reviewText: "I was nervous about taking the online PMP exam, but this site removed all my anxiety. They supported me emotionally as well and helped me achieve the result I dreamed of."
    },
    {
      image: "/t3.jpg",
      name: "Emily Carter",
      location: "California",
      stars: 5,
      reviewText: "This service was a lifesaver! Their tutor guided me step by step and gave me full confidence, which later resulted in a successful exam."
    }
  ];

  return (
    <ClientReviews 
      badgeTitle="Client Review"
      mainTitle="98% PMP Exam Success Rate"
      description="Read our clients' honest reviews; they rate us five stars due to receiving continuous, on-time support."
      buttonText="Contact Us"
      buttonLink="/contact/"
      reviews={reviewsData}
    />
  );
};

export default ClientReviewsHome;

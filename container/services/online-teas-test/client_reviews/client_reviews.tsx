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
      reviewText: "I ranked them 10/10. They delivered the coursework within the time they stated and completed the work fully. Would 100% recommend."
    },
    {
      image: "/t4.jpg", 
      name: "Sarah Mitchell",
      location: "USA",
      stars: 5,
      reviewText: "My schedule was packed with work and family stuff, but they helped a lot with my TEAS exam preparation, and I achieved good scores."
    },
    {
      image: "/t1.jpg",
      name: "Daniel Smith",
      location: "USA",
      stars: 5,
      reviewText: "I wanted to prepare for my exam safely and securely. Their team supported me smoothly, and I scored 76%."
    },
    {
      image: "/t3.jpg",
      name: "Olivia Brown",
      location: "USA",
      stars: 5,
      reviewText: "I tried multiple sources but didn't pass the exam. Exam Support Online helped me a lot in working towards my dream scores."
    },
    {
      image: "/t2.jpg",
      name: "Emily Carter",
      location: "USA",
      stars: 5,
      reviewText: "Safe, secure, and on-time support. Highly recommended."
    }
  ];

  return (
    <ClientReviews 
      badgeTitle="Client Reviews"
      mainTitle="Feedback from Our Students"
      description="We work hard to satisfy your every need. With our exam service, a number of students feel secure and get the A grades they dream of. Read our student reviews:"
      buttonText="Contact Us"
      buttonLink="/contact/"
      reviews={reviewsData}
    />
  );
};

export default ClientReviewsHome;

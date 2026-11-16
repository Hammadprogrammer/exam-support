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
      reviewText: "I can't thank this team enough for their help with my HESI exam. They were professional, supportive, and provided me with tailored support according to my expectations."
    },
    {
      image: "/t4.jpg", 
      name: "Sarah Mitchell",
      location: "Texas",
      stars: 5,
      reviewText: "This service completely changed my perspective on online exam help. Initially, I thought they were all scams, but now I recommend Exam Support Online to others as well."
    },
    {
      image: "/t1.jpg",
      name: "Daniel Smith",
      location: "Florida",
      stars: 5,
      reviewText: "The team provided outstanding HESI exam support. Their tutors were professional and had years of experience teaching multiple students."
    },
    {
      image: "/t3.jpg",
      name: "Emily Carter",
      location: "California",
      stars: 5,
      reviewText: "Every exam with Exam Support Online feels like a win-win. I started feeling more confident because of their support."
    }
  ];

  return (
    <ClientReviews 
      badgeTitle="Honest Feedback"
      mainTitle="Reviews of Our Satisfied Clients"
      description="Discover why students trust us for their HESI exam needs. Our professional service and personalized support ensure your success and confidence in your exam results."
      buttonText="Contact Us"
      buttonLink="/contact/"
      reviews={reviewsData}
    />
  );
};

export default ClientReviewsHome;

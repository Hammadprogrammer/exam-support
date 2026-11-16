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
      reviewText: "I was very nervous about the Data Insights section of the new GMAT Focus Edition. Then I decided to get expert help from Exam Support Online. The expert tutor provided excellent guidance, and I highly recommend them to others as well!"
    },
    {
      image: "/t4.jpg", 
      name: "Sarah Mitchell",
      location: "USA",
      stars: 5,
      reviewText: "It was difficult for me to balance my full-time job, and preparation seemed impossible. I got help from Exam Support Online, and they made the entire preparation process smooth."
    },
    {
      image: "/t1.jpg",
      name: "Daniel Smith",
      location: "USA",
      stars: 5,
      reviewText: "I had doubts about how someone could help me clear my exam. But now, I think getting expert GMAT preparation support was the best decision."
    },
    {
      image: "/t3.jpg",
      name: "Emily Carter",
      location: "USA",
      stars: 5,
      reviewText: "Outstanding service! I truly love how their expert academic team handled my preparation effortlessly. Highly recommended to everyone!"
    }
  ];

  return (
    <ClientReviews 
      badgeTitle="Client Reviews"
      mainTitle="What Our Successful Candidates Say"
      description="Thousands of professionals have achieved top-tier results in their GMAT exams with our professional exam support."
      buttonText="Contact Us"
      buttonLink="/contact/"
      reviews={reviewsData}
    />
  );
};

export default ClientReviewsHome;

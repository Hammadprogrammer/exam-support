"use client";
import React from 'react';
import ClientReviews from '@/container/All-props-comp/client_reviews/client_reviews';

const ClientReviewsHome = () => {
  const reviewsData = [
    {
      image: "t2.jpg", 
      name: "Sarah Mitchell",
      location: "New York",
      stars: 5,
      reviewText: "I had experienced different sites for help on my online exam and got scammed. I was very nervous about using this website, but the tutor here provided excellent support in a timely manner, and my final score was outstanding."
    },
    {
      image: "t1.jpg", 
      name: "James Anderson",
      location: "Texas",
      stars: 5,
      reviewText: "I absolutely love their service. I needed urgent online exam help and one of their professors helped me within the very next hour."
    },
    {
      image: "t4.jpg",
      name: "Emily Roberts",
      location: "Florida",
      stars: 5,
      reviewText: "My exam preparation was carefully managed by Exam Support Online. It was well worth the money to get help from their website."
    },
    {
      image: "t3.jpg",
      name: "Daniel Carter",
      location: "California",
      stars: 5,
      reviewText: "I had no trouble managing my exam time. My grades were even higher than I had ever expected, thanks to the guidance and support I received."
    },
    {
      image: "t1.jpg",
      name: "Michael Harris",
      location: "Illinois",
      stars: 5,
      reviewText: "I was struggling with a few topics and honestly didn't know how to prepare for my exam. The tutor explained everything in a way that actually made sense. I felt much more confident going into the exam, and I'm really happy with how things turned out."
    }
  ];

  return (
    <ClientReviews 
      badgeTitle="Client Reviews"
      mainTitle="98% of Students Achieved Successful Grades With Us"
      description="Exam Support Online provides unbeatable exam support that stays accurate and private. We also offer affordable services that help boost your self-confidence and improve your academic performance."
      buttonText="Contact Us"
      buttonLink="/contact/"
      reviews={reviewsData}
    />
  );
};

export default ClientReviewsHome;
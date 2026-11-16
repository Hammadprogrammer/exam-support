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
      reviewText: "I needed a competitive score. You got me 330+, and I immediately completed my GRE exam."
    },
    {
      image: "/t4.jpg", 
      name: "Sarah Mitchell",
      location: "Texas",
      stars: 5,
      reviewText: "Initially, I was panicking when I heard about the time limit. But after getting help from them, they completed every task in a timely manner while helping me work towards my target score."
    },
    {
      image: "/t1.jpg",
      name: "Daniel Smith",
      location: "Florida",
      stars: 5,
      reviewText: "The GRE was very tough for me because, a month ago, I had an accident and needed the right support. Luckily, I found Exam Support Online, and they made the preparation process much easier for me."
    },
    {
      image: "/t3.jpg",
      name: "Emily Carter",
      location: "California",
      stars: 5,
      reviewText: "Secure, reliable, and on-time support. I highly recommend them!"
    }
  ];

  return (
    <ClientReviews 
      badgeTitle="Client Review"
      mainTitle="Trusted By Future Graduate Students"
      description="We are providing top-notch services across the USA. We have helped thousands of students achieve scores of 320+ with a proven 95% success rate."
      buttonText="Contact Us"
      buttonLink="/contact/"
      reviews={reviewsData}
    />
  );
};

export default ClientReviewsHome;

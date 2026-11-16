"use client";
import React from 'react';
import ClientReviews from '@/container/All-props-comp/client_reviews/client_reviews';

const ClientReviewsHome = () => {
  const reviewsData = [
    {
      image: "/t2.jpg", 
      name: "Olivia Bennett",
      location: "New York",
      stars: 5,
      reviewText: "I lost my job and had to support my family. During that time, I also had to attempt my insurance exam. It was very difficult for me to figure out how to pass it. But Exam Support Online supported me a lot and provided me with urgent help, which I will never forget."
    },
    {
      image: "/t4.jpg", 
      name: "Daniel Foster",
      location: "Texas",
      stars: 5,
      reviewText: "This is one of the most secure, reliable, and on-time support services. I highly recommend their service!"
    },
    {
      image: "/t1.jpg",
      name: "Sophia Mitchell",
      location: "Florida",
      stars: 5,
      reviewText: "My friend suggested this site to me, and they saved my exam. Their tutors are highly professional and support you at any time of the day."
    },
    {
      image: "/t3.jpg",
      name: "Ethan Parker",
      location: "California",
      stars: 5,
      reviewText: "I was confident about my general insurance exam, but a few days before the exam, I lost confidence. Their tutor helped me a lot in achieving my dream grades."
    }
  ];

  return (
    <ClientReviews 
      badgeTitle="Client Reviews"
      mainTitle="Real Success Stories"
      description="We take pride in delivering top-notch insurance exam support to students all over the USA. Our simple and effective exam support is helping thousands to get their dream results. Let's read their reviews."
      buttonText="Contact Us"
      buttonLink="/contact/"
      reviews={reviewsData}
    />
  );
};

export default ClientReviewsHome;

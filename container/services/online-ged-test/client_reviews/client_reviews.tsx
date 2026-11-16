"use client";
import React from 'react';
import ClientReviews from '@/container/All-props-comp/client_reviews/client_reviews';

const ClientReviewsHome = () => {
  const reviewsData = [
    {
      image: "/t2.jpg", 
      name: "Emily Carter",
      location: "USA",
      stars: 5,
      reviewText: "I always received poor grades in maths and was nervous about this time as well. But Exam Support Online helped me learn the material, and I received my highest score ever this time!"
    },
    {
      image: "/t4.jpg", 
      name: "Jessica Miller",
      location: "USA",
      stars: 5,
      reviewText: "I was in urgent need of my GED to get a job promotion, and I had a deadline. Their tutor helped me secure the grade that I always thought of. Thank you so much!"
    },
    {
      image: "/t1.jpg",
      name: "Michael Anderson",
      location: "USA",
      stars: 5,
      reviewText: "I was just close to my exam and urgently approached Exam Support Online. They supported me instantly and helped me score high grades."
    },
    {
      image: "/t3.jpg",
      name: "Sarah Williams",
      location: "USA",
      stars: 5,
      reviewText: "Highly recommend! On time, accurate, and safe service."
    }
  ];

  return (
    <ClientReviews 
      badgeTitle="Honest Reviews"
      mainTitle="What Are Students Saying?"
      description="Our reviews speak for themselves. With a 95% passing rate, students from all over the USA have earned their GED credentials and moved forward in their education and careers."
      buttonText="Contact Us"
      buttonLink="/contact/"
      reviews={reviewsData}
    />
  );
};

export default ClientReviewsHome;

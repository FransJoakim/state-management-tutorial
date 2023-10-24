"use client";
import React, { createContext, useState } from "react";
import { type Review } from "@/api/types";

const useReviewState = (initialReviews: Review[]) =>
  useState<Review[]>(initialReviews);

export const ReviewContext = createContext<ReturnType<
  typeof useReviewState
> | null>(null);

export const useReview = () => {
  const review = React.useContext(ReviewContext);
  if (!review) {
    throw new Error("useReview must be used within a ReviewProvider");
  }
  return review;
};

const ReviewProvider = ({
  reviews: initialReviews,
  children,
}: {
  reviews: Review[];
  children: React.ReactNode;
}) => {
  const [review, setReview] = useReviewState(initialReviews);

  return (
    <ReviewContext.Provider value={[review, setReview]}>
      {children}
    </ReviewContext.Provider>
  );
};

export default ReviewProvider;

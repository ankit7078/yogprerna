// This function removes HTML tags and limits the string to a certain number of characters.
export const stripHtmlAndLimit = (html: string, limit: number = 100): string => {
  if (!html) return "";
  const text = html.replace(/<[^>]*>/g, "");
  if (text.length <= limit) {
    return text;
  }
  return text.slice(0, limit) + "...";
};

// This function creates a URL-friendly slug from a title.
export const generateSlug = (title: string): string => {
  if (!title) return "";
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

import { ReviewProps } from "@/types/types";

// Calculates the average rating from an array of reviews
export const getAverageRating = (reviews: ReviewProps[] = []): string => {
  if (!reviews || reviews.length === 0) {
    return "N/A";
  }
  const total = reviews.reduce((acc, review) => acc + review.rating, 0);
  const average = total / reviews.length;
  return average.toFixed(1);
};


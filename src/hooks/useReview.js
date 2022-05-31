import { useState } from "react";
import { useEffect } from "react";

const useReview = () => {
  const [reviews, setReviews] = useState([]);
  const [reviewLodaing, setReviewLoading] = useState(true);

  const url = "https://thawing-savannah-63615.herokuapp.com/reviews";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setReviewLoading(false);
      });
  }, []);

  return [reviews, setReviews, reviewLodaing];
};

export default useReview;

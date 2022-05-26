import React from 'react';
import StarRatings from 'react-star-ratings/build/star-ratings';
import useReview from '../../../hooks/useReview';
import Review from '../Review/Review';


const Reviews = () => {

  const [reviews, setReviews] = useReview();

    return (
      <div >
        {
          reviews.slice(0,3).map(review=><Review
          key={review._id}
          review={review}
          ></Review>)
        }
      </div>
    );
};

export default Reviews;
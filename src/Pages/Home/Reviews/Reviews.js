import React from 'react';
import StarRatings from 'react-star-ratings/build/star-ratings';
import useReview from '../../../hooks/useReview';
import Review from '../Review/Review';
import Loading from './../../Shared/Loading/Loading';


const Reviews = () => {

  const [reviews, setReviews,reviewLoading] = useReview();
  
  if(reviewLoading){
    console.log("Loading...");
    return <Loading></Loading>;
  }

    return (
      <div className="lg:grid grid-cols-3">
        {reviews.slice(0, 3).map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    );
};

export default Reviews;
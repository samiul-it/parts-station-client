import React from 'react';
import StarRatings from 'react-star-ratings/build/star-ratings';

const Review = ({review}) => {
    return (
      <div>
        <div className="flex flex-col w-full ">
          <div className="grid card bg-base-200  place-items-center">
            <div className="card w-80 bg-base-100 shadow-xl">
              <div className="card-body m-2">
                <div className="card-actions justify-center">
                  <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src="https://api.lorem.space/image/face?hash=3174" />
                    </div>
                  </div>
                </div>
                <StarRatings
                  rating={review?.rating }
                  starRatedColor="green"
                  numberOfStars={5}
                  name="rating"
                  starDimension="30px"
                />
                <h1 className='text-xl'>{review.review}</h1>
                <h1 className='text-xsm'>By {review.email}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;
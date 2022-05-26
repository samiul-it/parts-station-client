import React, { useEffect, useState } from "react";
import useReview from "./../../../hooks/useReview";
import auth from "./../../../Firebase/firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import StarRatings from "react-star-ratings";
import { toast } from 'react-toastify';

const MyReviews = () => {
  const [user, loading, error] = useAuthState(auth);

  const url = `https://thawing-savannah-63615.herokuapp.com/reviews/${user.email}`;

  const [myReview, setMyReview] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyReview(data));
  }, [user]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const passToDb = {
      rating,
      review: data.review,
    };

    fetch(`https://thawing-savannah-63615.herokuapp.com/reviews/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(passToDb),
    }).then((res) => {
      res.json();
      toast.success("Review Added");
    });
  };

  return (
    <div>
      <p>My Review</p>
      {/* {myReview.length >= 0 ? (
        <>
          {myReview.map((review) => (
            <div key={review._id}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                  <label className="label">
                    <span className="label-text">Your Review</span>
                  </label>

                  <StarRatings
                    rating={review?.rating || 0}
                    starRatedColor="green"
                    numberOfStars={5}
                    name="rating"
                    starDimension="30px"
                  />

                  <input
                    className="input input-bordered input-primary w-full max-w-xs"
                    type="text"
                    readOnly
                    value={review?.review}
                  />
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <StarRatings
                rating={rating}
                starRatedColor="green"
                changeRating={setRating}
                numberOfStars={5}
                name="rating"
                starDimension="30px"
              />
              <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                  <span className="label-text">Add your quotes</span>
                </label>
                <input
                  className="input input-bordered input-primary w-full max-w-xs"
                  type="text"
                  {...register("review", { required: true })}
                />

                <button className="btn btn-success m-4">Add Review</button>
              </form>
            </div>
          </div>
        </>
      )} */}

      {myReview.map((review) => (
        <div key={review._id}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <label className="label">
                <span className="label-text">Your Review</span>
              </label>

              <StarRatings
                rating={review?.rating || 0}
                starRatedColor="green"
                numberOfStars={5}
                name="rating"
                starDimension="30px"
              />

              <input
                className="input input-bordered input-primary w-full max-w-xs"
                type="text"
                readOnly
                value={review?.review}
              />
            </div>
          </div>
        </div>
      ))}
      <>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <StarRatings
              rating={rating}
              starRatedColor="green"
              changeRating={setRating}
              numberOfStars={5}
              name="rating"
              starDimension="30px"
            />
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="label">
                <span className="label-text">Add your quotes</span>
              </label>
              <input
                className="input input-bordered input-primary w-full max-w-xs"
                type="text"
                {...register("review", { required: true })}
              />

              <button className="btn btn-success m-4">Update Review</button>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default MyReviews;

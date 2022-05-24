import React, { useEffect, useState } from 'react';
import useReview from './../../../hooks/useReview';
import auth from './../../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyReviews = () => {
    
    const [user, loading, error] = useAuthState(auth);

    const url = `http://localhost:5000/reviews/${user.email}`;

    const [myReview, setMyReview] = useState([]);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMyReview(data));
    }, []);

    
    return (
        <div>
            <p>My Reviews {myReview.length} </p>
        </div>
    );
};

export default MyReviews;

import { useState } from 'react';
import { useEffect } from 'react';

const useReview = () => {
    const [reviews,setReviews]=useState([]);

    const url = "http://localhost:5000/reviews";
    useEffect(()=>{
        
        fetch(url)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return [reviews,setReviews];
};

export default useReview;
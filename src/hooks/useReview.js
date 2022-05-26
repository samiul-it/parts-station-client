
import { useState } from 'react';
import { useEffect } from 'react';

const useReview = () => {
    const [reviews,setReviews]=useState([]);

    const url = "https://thawing-savannah-63615.herokuapp.com/reviews";
    useEffect(()=>{
        
        fetch(url)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return [reviews,setReviews];
};

export default useReview;
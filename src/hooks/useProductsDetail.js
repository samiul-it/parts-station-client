
import { useState } from 'react';
import { useEffect } from 'react';

const useProductsDetail = (id) => {
    const [productDetail,setProductDetail]=useState({});
    const url = `https://parts-station-server.onrender.com/products/${id}`;

    useEffect(()=>{
        fetch(url)
          .then((res) => res.json())
          .then((data) => setProductDetail(data));
    },[])

    return [productDetail];
    
};

export default useProductsDetail;
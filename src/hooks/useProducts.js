import { useState, useEffect } from 'react';


const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("https://thawing-savannah-63615.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);

    return [products,setProducts];
};

export default useProducts;

import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
      <div>
        <div className="grid lg:grid-cols-3 my-10 justify-center mx-10 mb-10	">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
      </div>
    );
};

export default Products;
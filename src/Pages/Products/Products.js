import React, { useState } from 'react';
import { useEffect } from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import Loading from '../Shared/Loading/Loading';

const Products = () => {

  const [products,setProducts,productsLoading]=useProducts();
  
  if(productsLoading){
    return <Loading></Loading>;
  }

    return (
      <div>
        <div className="grid lg:grid-cols-3 my-10 justify-center mx-10 mb-10	">
          {products.slice(0,9).map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    );
};

export default Products;
import React, { useState } from 'react';
import { useEffect } from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {

  const [products,setProducts]=useProducts();

    return (
      <div>
        <div className="grid lg:grid-cols-3 my-10 justify-center mx-10 mb-10	">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    );
};

export default Products;
import React from 'react';

const Product = ({product}) => {
    return (
      <div>
        <div className="card w-80 bg-base-100 shadow-xl m-8">
          <figure>
            <img className="w-64 h-48" src={product.img} alt="product-img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Product;
import React from 'react';

const Product = ({product}) => {
  const {img,productName,stock,description,price,minOrder}=product;
    return (
      <div>
        <div className="card w-80 bg-base-100 shadow-xl m-8">
          <figure>
            <img className="w-64 h-48" src={img} alt="product-img" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{productName}</h2>
            <p>Technology:{description}</p>
            <p>Stock:{stock}</p>
            <h1 className='text-xl text-red-400'>$ {price}</h1>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Purchase Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Product;
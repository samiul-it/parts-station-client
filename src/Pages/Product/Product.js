import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
  const {_id,img,productName,stock,description,price,minOrder}=product;
  const navigate=useNavigate();

  const navigateToPurchaseNow=(productId)=>{
    navigate(`/products/${productId}`);
  }


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
            <h1 className='text-xl text-red-400'>$ {price} <small>/per unit</small></h1>

            <div className="card-actions justify-end">
              <button onClick={()=>navigateToPurchaseNow(_id)} className="btn btn-primary">Purchase Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Product;
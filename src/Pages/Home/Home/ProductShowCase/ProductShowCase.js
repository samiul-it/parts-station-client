import React from 'react';
import engineBlock from '../../../../Resources/Images/engine-block.jpg';
import { Link } from 'react-router-dom';

const ProductShowCase = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={engineBlock}
              className="max-w-sm w-80 rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Engien Blcok</h1>
              <p className="py-6">
                World Class Build Quality Engine Block,Will provide you 5 years
                money back gurantee.An engine block is the structure which
                contains the cylinders of an internal combustion engine. he
                engine block consisted of just the cylinder block, to which a
                separate crankcase was attached
              </p>
              <Link className="btn btn-secondary" to="/products">
                See More Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductShowCase;
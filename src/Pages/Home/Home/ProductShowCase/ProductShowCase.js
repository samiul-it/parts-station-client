import React from 'react';
import engineBlock from '../../../../Resources/Images/engine-block.jpg';

const ProductShowCase = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={engineBlock} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Engien Blcok</h1>
              <p className="py-6">
                World Class Build Quality Engine Block,Will provide you 5 years
                money back gurantee.An engine block is the structure which
                contains the cylinders, and other parts, of an internal
                combustion engine. In an early automotive engine, the engine
                block consisted of just the cylinder block, to which a separate
                crankcase was attached
              </p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductShowCase;
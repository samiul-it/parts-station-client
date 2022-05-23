import React from 'react';
import homeHero from "../../../../Resources/Images/auto_parts.jpg";

const HomeHero = () => {
    return (
      <div>
        <div
          className="hero h-96"
          style={{
            background: `url(${homeHero})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl lg: text-6xl font-bold text-sky-400">
                Parts Station
              </h1>
              <p className="mb-5">
                Parts Station provides you different kind of Car Parts accorss
                different barnds.We have Quality products that will last longer
                than other parts.Also we have customized parts manufacturing
                options available.
              </p>
              <button className="btn btn-outline btn-success">Register Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HomeHero;
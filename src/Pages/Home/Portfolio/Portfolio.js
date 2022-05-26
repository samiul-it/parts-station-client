import React from "react";
import { Link } from "react-router-dom";
import samiul from "../../../Resources/Images/samiul.png";

const Portfolio = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img src={samiul} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">Samiul Islam Talukdar</h1>
            <p class="py-6 text-3xl">BSc in Computer Science Engineering</p>
            <div className="div">
              <a className="text-blue-400" href="https://www.linkedin.com/in/samiul-islam-a92402162/">
                Linkedin
              </a>  ||  
              <a className="text-blue-400" href="https://github.com/samiul1998">Github</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

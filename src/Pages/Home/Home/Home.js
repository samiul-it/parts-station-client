import React from 'react';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner/Banner';
import Divider from './Divider/Divider';
import HomeHero from './HomeHero/HomeHero';
import ProductShowCase from './ProductShowCase/ProductShowCase';
import Products from './../../Products/Products';
import { useState } from 'react';


const Home = () => {
  const [homeLoading,setHomeLoading]=useState(true);
  
    return (
      <div>
        <Banner></Banner>
        <Divider></Divider>
        <HomeHero></HomeHero>
        <Products></Products>
        <ProductShowCase></ProductShowCase>
        <Reviews></Reviews>
      </div>
    );
};

export default Home;
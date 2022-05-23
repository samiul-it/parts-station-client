import React from 'react';
import Banner from './Banner/Banner';
import Divider from './Divider/Divider';
import HomeHero from './HomeHero/HomeHero';
import ProductShowCase from './ProductShowCase/ProductShowCase';


const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Divider></Divider>
        <HomeHero></HomeHero>
        <ProductShowCase></ProductShowCase>
      </div>
    );
};

export default Home;
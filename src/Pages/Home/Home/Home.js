import React from 'react';
import Reviews from '../Reviews/Reviews';
import Banner from './Banner/Banner';
import Divider from './Divider/Divider';
import HomeHero from './HomeHero/HomeHero';
import ProductShowCase from './ProductShowCase/ProductShowCase';
import Products from './../../Products/Products';


const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Divider></Divider>
        <HomeHero></HomeHero>
        <Reviews></Reviews>
        <Products></Products>
        <ProductShowCase></ProductShowCase>
      </div>
    );
};

export default Home;
import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import Story from '../components/Story';
import FeaturedProduct from '../components/FeaturedProduct';
import ValueProps from '../components/ValueProps';
import ProductShowcase from '../components/ProductShowcase';

const Home = () => {
    return (
        <>
            <Hero />
            <Testimonials />
            <Story />
            <FeaturedProduct />
            <ValueProps />
            <ProductShowcase />
        </>
    );
};

export default Home;

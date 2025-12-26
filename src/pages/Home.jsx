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
            <section className="snap-section min-h-screen">
                <Hero />
            </section>
            <section className="snap-section">
                <Testimonials />
            </section>
            <section className="snap-section">
                <Story />
            </section>
            <section className="snap-section">
                <FeaturedProduct />
            </section>
            <section className="snap-section">
                <ValueProps />
            </section>
            <section className="snap-section">
                <ProductShowcase />
            </section>
        </>
    );
};

export default Home;

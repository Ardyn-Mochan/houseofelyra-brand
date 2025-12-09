import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Story from './components/Story';

import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Shop from './pages/Shop'; // Added import for Shop
import Home from './pages/Home'; // Added import for Home
import Discover from './pages/Discover'; // Added import for Discover
import ProductDetail from './pages/ProductDetail'; // Added import for ProductDetail
import Blog from './pages/Blog'; // Added import for Blog
import BlogPost from './pages/BlogPost'; // Added import for BlogPost
import Contact from './pages/Contact';
import ElyraApp from './pages/ElyraApp';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Changed root path element to Home */}
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} /> {/* Added route for shop categories */}
          <Route path="/discover" element={<Discover />} /> {/* Added new route for /discover */}
          <Route path="/blog" element={<Blog />} /> {/* Added new route for /blog */}
          <Route path="/blog/:slug" element={<BlogPost />} /> {/* Blog post detail pages */}
          <Route path="/product/:slug" element={<ProductDetail />} /> {/* Dynamic product pages */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/elyra" element={<ElyraApp />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

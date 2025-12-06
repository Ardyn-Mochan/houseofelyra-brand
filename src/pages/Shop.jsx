import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { scentFamilies } from '../data/scentFamilies';

const Shop = () => {
    const { addToCart } = useCart();
    const { category } = useParams();
    const navigate = useNavigate();

    // Filter products based on the selected category
    const filteredProducts = useMemo(() => {
        if (!category) return products;

        const selectedFamily = scentFamilies.find(f => f.id === category);
        if (!selectedFamily) return products;

        return products.filter(product => selectedFamily.products.includes(product.name));
    }, [category]);

    // Get current category name for display
    const currentCategoryName = useMemo(() => {
        if (!category) return "All Scents";
        const family = scentFamilies.find(f => f.id === category);
        return family ? family.name : "All Scents";
    }, [category]);

    return (
        <div className="bg-[#1a1816] min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-cinzel text-elyra-cream mb-4 tracking-wide">
                        {currentCategoryName}
                    </h1>
                    <p className="text-elyra-cream/60 max-w-lg mx-auto text-sm font-light tracking-widest uppercase">
                        Discover your signature fragrance
                    </p>
                </motion.div>

                {/* Category Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-white/10 pb-6">
                    <button
                        onClick={() => navigate('/shop')}
                        className={`px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-300 ${!category
                            ? 'text-elyra-soft-gold border-b border-elyra-soft-gold'
                            : 'text-elyra-cream/60 hover:text-elyra-cream'
                            }`}
                    >
                        All
                    </button>
                    {scentFamilies.map((family) => (
                        <button
                            key={family.id}
                            onClick={() => navigate(`/shop/${family.id}`)}
                            className={`px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-300 ${category === family.id
                                ? 'text-elyra-soft-gold border-b border-elyra-soft-gold'
                                : 'text-elyra-cream/60 hover:text-elyra-cream'
                                }`}
                        >
                            {family.name}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.6 }}
                            className="group flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <Link to={`/product/${product.slug}`} className="relative aspect-[4/5] overflow-hidden bg-elyra-earth/20 mb-6 border border-white/5 block">
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-white/5" />
                                )}

                                {/* Quick Add Button (Visible on Hover) */}
                                <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" onClick={(e) => e.preventDefault()}>
                                    <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(product); }} className="w-full py-3 bg-[#1a1816]/95 backdrop-blur-sm text-elyra-cream text-xs uppercase tracking-[0.2em] hover:bg-elyra-soft-gold hover:text-[#1a1816] transition-colors duration-300 border border-white/10">
                                        Quick Add
                                    </button>
                                </div>
                            </Link>

                            {/* Product Details */}
                            <div className="flex flex-col items-center text-center space-y-2 flex-grow w-full">
                                <Link to={`/product/${product.slug}`}>
                                    <h3 className="font-cinzel text-xl text-elyra-cream tracking-wide group-hover:text-elyra-soft-gold transition-colors duration-300">
                                        {product.name}
                                    </h3>
                                </Link>
                                <p className="text-xs text-elyra-cream/50 italic font-light">
                                    Inspired by: {product.inspiration}
                                </p>
                                <p className="text-xs text-elyra-cream/40 uppercase tracking-wider">
                                    {product.scentFamily}
                                </p>
                                <div className="pt-2">
                                    <span className="text-md font-medium text-elyra-cream tracking-wide">
                                        ${product.price}
                                    </span>
                                </div>

                                {/* Mobile Add to Cart (Always visible on mobile, hidden on desktop if using hover effect) */}
                                <button onClick={() => addToCart(product)} className="md:hidden w-full mt-auto py-3 border border-white/20 text-elyra-cream text-xs uppercase tracking-[0.2em]">
                                    Add to Cart
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-elyra-cream/50 font-light text-lg">No products found in this category.</p>
                        <button
                            onClick={() => navigate('/shop')}
                            className="mt-6 px-8 py-3 border border-elyra-soft-gold text-elyra-cream text-xs uppercase tracking-[0.2em] hover:bg-elyra-soft-gold hover:text-[#1a1816] transition-all duration-300"
                        >
                            View All Scents
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;

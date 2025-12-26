import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Sparkles, ShoppingBag } from 'lucide-react';

const FeaturedProduct = () => {
    const { addToCart } = useCart();
    const [addedId, setAddedId] = useState(null);

    const bestsellers = [
        {
            id: 5,
            name: "Lunar Silk",
            slug: "lunar-silk",
            tagline: "Most Loved",
            description: "A mesmerizing blend of lavender and vanilla orchid, Lunar Silk wraps you in elegance—soft, sensual, and utterly captivating.",
            price: 39.99,
            image: "/images/lunar-silk.jpg",
            badge: "#1 Bestseller"
        },
        {
            id: 3,
            name: "Solstice Aura",
            slug: "solstice-aura",
            tagline: "Fresh & Vibrant",
            description: "Citrus sunshine meets aromatic bergamot in this refreshing masterpiece. Perfect for those who radiate confidence.",
            price: 39.99,
            image: "/solstice-aura.jpg",
            badge: "Fan Favorite"
        },
        {
            id: 1,
            name: "Nebula Gold",
            slug: "nebula-gold",
            tagline: "Bold & Magnetic",
            description: "An intoxicating dance of saffron and ambergris, wrapped in the warmth of cedarwood—mysterious, magnetic, unforgettable.",
            price: 39.99,
            image: "/nebula-gold.jpg",
            badge: "Signature Scent"
        }
    ];

    const handleAddToCart = (product) => {
        addToCart({
            id: product.id,
            name: product.name,
            price: `$${product.price}`,
            image: product.image
        });
        setAddedId(product.id);
        setTimeout(() => setAddedId(null), 2000);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0f0e0c] via-[#1a1816] to-[#0f0e0c] overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-elyra-soft-gold/[0.03] rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
            </div>

            {/* Decorative Lines */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-elyra-soft-gold/30 to-transparent" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-elyra-soft-gold text-xs tracking-[0.3em] uppercase mb-4 font-light flex items-center justify-center gap-2">
                        <span className="w-8 h-px bg-elyra-soft-gold/50" />
                        Our Bestselling Signatures
                        <span className="w-8 h-px bg-elyra-soft-gold/50" />
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel text-elyra-cream mb-6">
                        Customer <span className="italic text-elyra-soft-gold">Favorites</span>
                    </h2>
                    <p className="font-cormorant text-elyra-cream/60 max-w-xl mx-auto text-lg md:text-xl font-light">
                        The scents our community keeps coming back for.
                    </p>
                </motion.div>

                {/* Bestsellers Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                >
                    {bestsellers.map((product, index) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            className="group relative"
                        >
                            {/* Product Card */}
                            <div className="relative overflow-hidden border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-elyra-soft-gold/30 transition-all duration-500">
                                {/* Image */}
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] font-medium ${index === 0
                                                ? 'bg-elyra-soft-gold text-[#1a1816]'
                                                : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
                                            }`}>
                                            {product.badge}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Tagline */}
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-elyra-soft-gold/70 mb-2">
                                        {product.tagline}
                                    </p>

                                    {/* Name */}
                                    <h3 className="font-cinzel text-xl md:text-2xl text-elyra-cream mb-3 group-hover:text-elyra-soft-gold transition-colors duration-300">
                                        {product.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="font-cormorant text-elyra-cream/60 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {product.description}
                                    </p>

                                    {/* Price & Actions */}
                                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                                        <p className="text-elyra-soft-gold text-lg font-light">
                                            ${product.price}
                                        </p>
                                        <div className="flex gap-2">
                                            <motion.button
                                                onClick={() => handleAddToCart(product)}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`p-2.5 transition-all duration-300 ${addedId === product.id
                                                        ? 'bg-green-900/80 text-white'
                                                        : 'bg-white/5 text-elyra-cream hover:bg-elyra-soft-gold hover:text-[#1a1816]'
                                                    }`}
                                            >
                                                {addedId === product.id ? (
                                                    <Sparkles size={18} />
                                                ) : (
                                                    <ShoppingBag size={18} />
                                                )}
                                            </motion.button>
                                            <Link to={`/product/${product.slug}`}>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="px-4 py-2.5 text-[10px] uppercase tracking-[0.15em] border border-white/20 text-elyra-cream hover:border-elyra-soft-gold hover:text-elyra-soft-gold transition-all duration-300"
                                                >
                                                    View
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link to="/shop">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium border border-elyra-soft-gold/50 text-elyra-soft-gold hover:bg-elyra-soft-gold hover:text-[#1a1816] transition-all duration-300"
                        >
                            Explore All Fragrances
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProduct;

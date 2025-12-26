import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Amanda Marie",
            rating: 5,
            products: ["Golden Stardust", "Lunar Silk"],
            text: "I am going to get my sister to buy from you, these are so good and you're saving me a lot of money!",
            verified: true
        },
        {
            id: 2,
            name: "Birhan Fasika",
            rating: 5,
            products: ["Ancient Ember", "Amber Radiance", "Ember Pulse"],
            text: "My wife really liked it, she said that you now have a lifetime customer.",
            verified: true
        },
        {
            id: 3,
            name: "Nikita Thatte",
            rating: 5,
            products: ["Lunar Silk"],
            text: "These are so good, the fragrance just fills the room!",
            verified: true
        },
        {
            id: 4,
            name: "Dayana Joseph",
            rating: 5,
            products: ["Midnight Aura"],
            text: "I've been wearing your scents for a while and in this short while, I got like 2..3 compliments which is huge!",
            verified: true
        },
        {
            id: 5,
            name: "Mahnoor Khokhar",
            rating: 5,
            products: ["Lunar Silk"],
            text: "The Lunar Silk is so good, I just love the scent!",
            verified: true
        },
        {
            id: 6,
            name: "Simran Kaur",
            rating: 5,
            products: ["Lunar Silk"],
            text: "My partner told me that I smell so nice, and he usually doesn't do that...",
            verified: true
        },
        {
            id: 7,
            name: "Aleksandr",
            rating: 5,
            products: ["Solstice Aura"],
            text: "This is the closest I got from a perfume which smells closest to the original for a fraction of the price. The solid complimentary perfume you gave along with it just elevates the whole vibe and boosts its longevity.",
            verified: true
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section className="py-24 md:py-32 bg-gradient-to-b from-[#1a1816] via-[#1f1c19] to-[#1a1816] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-elyra-soft-gold/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[100px]" />
            </div>

            {/* Decorative Quote Mark */}
            <div className="absolute top-20 left-10 md:left-20 opacity-[0.02]">
                <Quote size={200} strokeWidth={1} className="text-elyra-soft-gold" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <p className="text-elyra-soft-gold text-xs tracking-[0.3em] uppercase mb-4 font-light">
                        From Our Community
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel text-elyra-cream mb-6">
                        Real Words, <span className="italic text-elyra-soft-gold">Real People</span>
                    </h2>
                    <p className="font-cormorant text-elyra-cream/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                        We're a small brand building something special from the ground up. These are genuine reviews from our early supporters who believed in us—and we're endlessly grateful.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            variants={itemVariants}
                            className="group relative p-8 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] hover:border-elyra-soft-gold/30 hover:bg-white/[0.05] transition-all duration-500"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                                <Quote size={40} strokeWidth={1} className="text-elyra-soft-gold" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={14}
                                        className="text-elyra-soft-gold fill-elyra-soft-gold"
                                    />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="font-cormorant text-elyra-cream/80 text-lg leading-relaxed mb-6 italic">
                                "{testimonial.text}"
                            </p>

                            {/* Reviewer Info */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-elyra-cream font-medium text-sm flex items-center gap-2">
                                        {testimonial.name}
                                        {testimonial.verified && (
                                            <span className="text-[9px] uppercase tracking-wider text-green-400 bg-green-900/30 border border-green-500/20 px-2 py-0.5 rounded-full">
                                                Verified
                                            </span>
                                        )}
                                    </p>
                                </div>
                                <div className="text-right max-w-[180px]">
                                    <p className="text-[10px] uppercase tracking-widest text-elyra-cream/40 mb-1">Purchased</p>
                                    <div className="flex flex-wrap justify-end gap-1">
                                        {testimonial.products.map((product, idx) => (
                                            <Link
                                                key={idx}
                                                to={`/product/${product.toLowerCase().replace(/ /g, '-')}`}
                                                className="text-elyra-soft-gold text-xs font-medium hover:text-elyra-cream transition-colors duration-200 underline decoration-elyra-soft-gold/30 hover:decoration-elyra-soft-gold"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                {product}{idx < testimonial.products.length - 1 ? ',' : ''}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Accent */}
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-elyra-soft-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-elyra-cream/30 mb-6">
                        Trusted & Secure
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                        <div className="text-elyra-cream/40 text-sm font-light">🔒 Secure Checkout</div>
                        <div className="text-elyra-cream/40 text-sm font-light">💳 All Cards Accepted</div>
                        <div className="text-elyra-cream/40 text-sm font-light">🎁 Gift-Ready Packaging</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;

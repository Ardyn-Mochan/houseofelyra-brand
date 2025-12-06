import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="bg-[#1a1816] min-h-screen pt-20">
            {/* Main Content Section */}
            <section className="py-24 px-8 container mx-auto">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    {/* Pulsing Sigil */}
                    <motion.div
                        className="md:w-1/2 flex justify-center md:justify-start"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <motion.img
                            src="/elyra-symbol.png"
                            alt="Elyra Sigil"
                            className="w-full max-w-md h-auto object-contain"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0.85, 1, 0.85],
                            }}
                            transition={{
                                opacity: {
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            style={{
                                filter: "sepia(0.4) saturate(0.6) brightness(1.1) drop-shadow(0 0 30px rgba(180, 160, 130, 0.8)) drop-shadow(0 0 60px rgba(180, 160, 130, 0.6)) drop-shadow(0 0 90px rgba(180, 160, 130, 0.4))"
                            }}
                        />
                    </motion.div>

                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <p className="text-elyra-soft-gold text-xs tracking-[0.3em] uppercase mb-6 font-light">
                            The Soul of Scent
                        </p>
                        <h1 className="text-5xl md:text-7xl font-cinzel text-elyra-cream mb-12">
                            OUR STORY
                        </h1>

                        <p className="font-cormorant text-elyra-cream/90 text-xl md:text-2xl font-light leading-relaxed mb-6">
                            At the House of Elyra, we started with one clear idea: everyone deserves to smell amazing without paying luxury prices.
                        </p>

                        <p className="font-cormorant text-elyra-cream/90 text-xl md:text-2xl font-light leading-relaxed mb-6">
                            We kept noticing the same thing — people loved great fragrances, but most were too expensive, didn't last long, or felt overhyped. So we decided to do things differently.
                        </p>

                        <p className="font-cormorant text-elyra-cream/90 text-xl md:text-2xl font-light leading-relaxed mb-8">
                            We blend our perfumes in small batches, using high-quality ingredients and extrait-strength formulas that actually perform. No shortcuts. No watered-down scents. Just fragrances made with care, precision, and honesty.
                        </p>

                        <motion.h2
                            className="text-3xl md:text-4xl font-cinzel text-elyra-cream leading-tight"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3, duration: 1.5, ease: "easeOut" }}
                        >
                            Perfume that finally <br />
                            <span className="italic text-elyra-soft-gold">feels personal.</span>
                        </motion.h2>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

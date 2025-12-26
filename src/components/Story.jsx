import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Story = () => {
    const sectionRef = useRef(null);

    // Track scroll progress relative to this section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"] // From when section enters to when it leaves
    });

    // Parallax transforms - image moves slower than scroll
    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.05, 1]);
    const decorativeY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.4, 0.5]);

    return (
        <section ref={sectionRef} className="min-h-screen py-20 relative overflow-hidden flex items-center">
            {/* Full-width Image Background with Parallax */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 w-full h-full z-0"
                style={{ y: imageY, scale: imageScale }}
            >
                <div className="relative w-full h-full">
                    <img
                        src="/images/elyra-bottle-final.png"
                        alt="Elyra Perfume Bottle"
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Dynamic Overlay for text readability */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-elyra-cream via-elyra-cream/60 to-transparent"
                        style={{ opacity: overlayOpacity }}
                    />
                </div>
            </motion.div>

            {/* Decorative Background Element with Counter-Parallax */}
            <motion.div
                className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-[1]"
                style={{ y: decorativeY }}
            >
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-elyra-soft-gold/10 blur-3xl rounded-full" />
                <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-elyra-taupe/10 blur-3xl rounded-full" />
            </motion.div>

            <div className="container mx-auto px-6 md:px-12 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:w-1/2 max-w-2xl"
                    >
                        <p className="text-elyra-soft-gold text-xs tracking-[0.3em] uppercase mb-6 font-light">
                            Our Story
                        </p>

                        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-cinzel text-elyra-soft-brown mb-8 leading-[1.15]">
                            <span className="block">Where Your Memories</span>
                            <span className="block text-gradient-terracotta italic">Find Their Fragrance</span>
                        </h2>

                        <p className="font-cormorant text-elyra-earth/90 text-xl md:text-2xl leading-relaxed mb-8 font-light">
                            Some scents stay with us forever.<br className="hidden md:inline" />
                            They remind us of where we’ve been — and who we’ve become.
                        </p>

                        <p className="font-cormorant text-elyra-earth/90 text-xl md:text-2xl leading-relaxed mb-8 font-light">
                            <strong>Elyra perfumes</strong> are crafted to feel personal:<br className="hidden md:inline" />
                            comfort on hard days, confidence on good ones,<br className="hidden md:inline" />
                            and a quiet reminder of the moments that matter most.
                        </p>

                        <p className="font-cormorant text-elyra-earth/90 text-xl md:text-2xl leading-relaxed mb-12 font-light italic">
                            Because your scent should feel like something you belong to.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                            <Link to="/about" className="block w-fit">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative pr-8 pl-0 py-4 border-b-2 border-elyra-taupe/30 text-elyra-soft-brown uppercase tracking-[0.2em] text-sm hover:border-elyra-soft-gold transition-all duration-300 inline-block"
                                >
                                    <span className="group-hover:text-elyra-soft-gold transition-colors duration-300">Explore Our Story</span>
                                    <span className="inline-block ml-3 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                                </motion.div>
                            </Link>

                            <Link to="/shop" className="block w-fit">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative pr-8 pl-0 py-4 border-b-2 border-elyra-taupe/30 text-elyra-soft-brown uppercase tracking-[0.2em] text-sm hover:border-elyra-soft-gold transition-all duration-300 inline-block"
                                >
                                    <span className="group-hover:text-elyra-soft-gold transition-colors duration-300">Explore Our Collection</span>
                                    <span className="inline-block ml-3 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Spacer for layout balance on desktop - bottle visible here */}
                    <div className="lg:w-1/2 hidden lg:block" />
                </div>
            </div>
        </section>
    );
};

export default Story;

import React from 'react';
import { motion } from 'framer-motion';
import { Scroll } from '@react-three/drei';

const ScrollSection = () => {
    return (
        <Scroll html style={{ width: '100%' }}>
            {/* Hero Section Content */}
            <section className="h-screen w-full flex items-center justify-center pointer-events-none">
                <div className="text-center px-4 mix-blend-difference">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-elyra-gold text-xs md:text-sm tracking-[0.5em] uppercase mb-6 font-medium"
                    >
                        The New Collection
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-6xl md:text-8xl lg:text-[10rem] font-cinzel text-white leading-none tracking-tighter"
                    >
                        ESSENCE <br />
                        <span className="italic font-light text-elyra-gold/90">ETERNITY</span>
                    </motion.h1>
                </div>
            </section>

            {/* Second Section - Editorial Left */}
            <section className="h-screen w-full flex items-center px-8 md:px-32 pointer-events-none">
                <div className="w-full md:w-1/2 text-left">
                    <span className="block text-elyra-gold text-xs tracking-widest uppercase mb-4">01 — The Origin</span>
                    <h2 className="text-5xl md:text-7xl font-cinzel text-white mb-8 leading-tight">
                        Timeless <br /> <span className="italic font-light">Elegance</span>
                    </h2>
                    <p className="text-white/80 text-xl leading-relaxed font-light max-w-md mix-blend-difference">
                        Crafted for those who seek the extraordinary. A scent that lingers like a beautiful memory, transcending the boundaries of time and space.
                    </p>
                </div>
            </section>

            {/* Third Section - Editorial Right */}
            <section className="h-screen w-full flex items-center justify-end px-8 md:px-32 pointer-events-none">
                <div className="w-full md:w-1/2 text-right flex flex-col items-end">
                    <span className="block text-elyra-gold text-xs tracking-widest uppercase mb-4">02 — The Craft</span>
                    <h2 className="text-5xl md:text-7xl font-cinzel text-white mb-8 leading-tight">
                        Pure <br /> <span className="italic font-light">Gold</span>
                    </h2>
                    <p className="text-white/80 text-xl leading-relaxed font-light max-w-md mix-blend-difference">
                        Infused with rare ingredients and captured in a vessel of pure artistry. The gold accents reflect the precious nature of the liquid within.
                    </p>
                </div>
            </section>

            {/* Fourth Section - Minimalist CTA */}
            <section className="h-screen w-full flex items-center justify-center pointer-events-none">
                <div className="text-center">
                    <h2 className="text-4xl md:text-6xl font-cinzel text-white mb-12">Make it Yours</h2>
                    <button className="pointer-events-auto px-16 py-5 border border-white/20 text-white hover:bg-white hover:text-elyra-charcoal transition-all duration-500 uppercase tracking-[0.2em] text-xs font-bold backdrop-blur-sm">
                        Shop Collection
                    </button>
                </div>
            </section>

            {/* Footer Section */}
            <section className="h-auto w-full bg-elyra-charcoal pointer-events-auto">
                <div className="py-24 text-center text-white/30 text-xs uppercase tracking-widest">
                    &copy; 2025 House of Elyra
                </div>
            </section>
        </Scroll>
    );
};

export default ScrollSection;

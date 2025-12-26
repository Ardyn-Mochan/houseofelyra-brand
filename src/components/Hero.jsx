import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const [showVideo, setShowVideo] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const handleEnded = () => {
                // Smooth transition after video ends
                setTimeout(() => {
                    setShowVideo(false);
                }, 300);
            };

            video.addEventListener('ended', handleEnded);
            return () => video.removeEventListener('ended', handleEnded);
        }
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center">
            {/* Video/Image Background */}
            <div className="absolute inset-0 z-0" style={{ willChange: 'transform' }}>
                <AnimatePresence mode="wait">
                    {showVideo ? (
                        <motion.video
                            key="video"
                            ref={videoRef}
                            autoPlay
                            muted
                            playsInline
                            initial={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{
                                transform: 'translate3d(0, 0, 0)',
                                backfaceVisibility: 'hidden',
                                perspective: 1000,
                            }}
                        >
                            <source src="/hero-video.mp4" type="video/mp4" />
                        </motion.video>
                    ) : (
                        <motion.img
                            key="image"
                            src="/hero-static.jpg"
                            alt="House of Elyra"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{
                                transform: 'translate3d(0, 0, 0)',
                            }}
                        />
                    )}
                </AnimatePresence>
                {/* Very Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent" style={{ willChange: 'opacity' }} />
                {/* Bottom Blend */}
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-elyra-cream-light via-elyra-cream-light/70 to-transparent" style={{ willChange: 'opacity' }} />
            </div>

            <motion.div
                style={{ opacity, willChange: 'opacity, transform' }}
                className="relative z-10 px-8 md:px-16 lg:px-24 max-w-2xl"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.8, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cinzel mb-6 leading-tight tracking-wide"
                    style={{
                        color: '#ffffff',
                        fontWeight: 300,
                        letterSpacing: '0.05em',
                        textShadow: `
                            0 0 20px rgba(255, 255, 255, 0.8),
                            0 0 40px rgba(255, 255, 255, 0.6),
                            0 0 80px rgba(255, 255, 255, 0.4)
                        `,
                        willChange: 'transform'
                    }}
                >
                    YOUR AURA, PERFECTED.
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    className="text-base md:text-lg font-cormorant font-light mb-10 max-w-md"
                    style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        letterSpacing: '0.02em',
                        textShadow: '0 0 30px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    Luxury-inspired fragrances crafted for those who leave an impression.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.6, delay: 1.0, ease: [0.19, 1, 0.22, 1] }}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                >
                    {/* Primary CTA Button */}
                    <Link to="/shop">
                        <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium overflow-hidden group"
                            style={{
                                background: 'linear-gradient(135deg, #D4C4A8 0%, #B8A888 50%, #D4C4A8 100%)',
                                color: '#1a1816',
                                boxShadow: '0 4px 30px rgba(212, 196, 168, 0.4), 0 0 60px rgba(212, 196, 168, 0.2)'
                            }}
                        >
                            <span className="relative z-10">Explore Collection</span>
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                        </motion.button>
                    </Link>

                    {/* Secondary CTA */}
                    <Link to="/discover" className="group flex items-center gap-2">
                        <span
                            className="text-sm uppercase tracking-[0.15em] font-light border-b border-white/40 pb-1 group-hover:border-white transition-colors duration-300"
                            style={{
                                color: '#ffffff',
                                textShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
                            }}
                        >
                            Find Your Scent
                        </span>
                        <motion.svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="text-white transform group-hover:translate-x-1 transition-transform duration-300"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </motion.svg>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-white/60"
                    >
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;

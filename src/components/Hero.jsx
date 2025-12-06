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
                    className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-cinzel mb-8 leading-tight tracking-wide"
                    style={{
                        color: '#ffffff',
                        fontWeight: 300,
                        letterSpacing: '0.05em',
                        // Optimized glow: fewer layers, similar visual impact
                        textShadow: `
                            0 0 20px rgba(255, 255, 255, 0.8),
                            0 0 40px rgba(255, 255, 255, 0.6),
                            0 0 80px rgba(255, 255, 255, 0.4)
                        `,
                        willChange: 'transform' // Hint to browser to promote to layer
                    }}
                >
                    YOUR AURA, PERFECTED.
                </motion.h1>

                <Link to="/shop">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.6, delay: 1.0, ease: [0.19, 1, 0.22, 1] }}
                        className="flex items-center gap-3 group cursor-pointer"
                    >
                        <p
                            className="text-sm md:text-base font-light"
                            style={{
                                color: '#ffffff',
                                fontWeight: 200,
                                letterSpacing: '0.03em',
                                textShadow: `
                                    0 0 20px rgba(255, 255, 255, 0.6),
                                    0 0 40px rgba(255, 255, 255, 0.3)
                                `
                            }}
                        >
                            Discover your soul's signature.
                        </p>
                        <motion.svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="transform group-hover:translate-x-1 transition-transform duration-700 ease-out"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.4, delay: 1.4, ease: [0.19, 1, 0.22, 1] }}
                            style={{
                                color: '#ffffff',
                                filter: `
                                    drop-shadow(0 0 5px rgba(255, 255, 255, 0.9))
                                    drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))
                                    drop-shadow(0 0 15px rgba(255, 255, 255, 0.5))
                                `
                            }}
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </motion.svg>
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero;

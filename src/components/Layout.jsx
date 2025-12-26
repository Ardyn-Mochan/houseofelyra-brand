import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from './Footer';
import Cart from './Cart';
import SearchModal from './SearchModal';
import { useCart } from '../context/CartContext';
import Lenis from 'lenis';

const Layout = ({ children }) => {
    const [searchParams] = useSearchParams();
    const { setIsCartOpen, getCartItemsCount, clearCart } = useCart();
    const cartCount = getCartItemsCount();
    const { pathname } = useLocation();
    const lenisRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Track scroll position for nav background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (searchParams.get('success')) {
            clearCart();
            setShowSuccessMessage(true);
            // Clean URL
            window.history.replaceState({}, '', window.location.pathname);

            // Auto hide after 5 seconds
            const timer = setTimeout(() => setShowSuccessMessage(false), 5000);
            return () => clearTimeout(timer);
        }

        if (searchParams.get('canceled')) {
            // Optional: handle cancel state
            // Clean URL
            window.history.replaceState({}, '', window.location.pathname);
        }
    }, [searchParams, clearCart]);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
        setIsMobileMenuOpen(false); // Close mobile menu on route change
        // Close success message on route change if wanted, but timeout handles it mostly
    }, [pathname]);

    return (
        <div className="min-h-screen bg-elyra-cream-light text-elyra-earth selection:bg-elyra-taupe selection:text-elyra-cream">
            <header className={`fixed top-0 left-0 w-full z-50 py-4 px-8 flex justify-between items-center transition-all duration-500 ${isScrolled
                ? 'bg-[#1a1816]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/5'
                : 'bg-transparent'
                }`}>
                <div className="flex items-center gap-3 z-50">
                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white/90 hover:text-white transition-colors duration-300 mr-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>

                    {/* Logo Icon */}
                    <Link to="/">
                        <img src="/logo.png" alt="House of Elyra Perfumes Logo" className="w-6 h-6 md:w-7 md:h-7 opacity-90" />
                    </Link>
                    <Link to="/" className="text-lg md:text-xl font-cinzel font-light tracking-[0.2em] text-white hidden sm:block">
                        HOUSE OF ELYRA
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10 text-sm tracking-[0.15em] uppercase font-light">
                    <Link to="/" className="relative group text-white/90 hover:text-white transition-colors duration-300">
                        Home
                    </Link>
                    <Link to="/shop" className="relative group text-white/90 hover:text-white transition-colors duration-300">
                        Shop
                    </Link>
                    <Link to="/discover" className="relative group text-white/90 hover:text-white transition-colors duration-300">
                        Discover
                    </Link>
                    <Link to="/about" className="relative group text-white/90 hover:text-white transition-colors duration-300">
                        About
                    </Link>
                    <Link to="/blog" className="relative group text-white/90 hover:text-white transition-colors duration-300">
                        Journal
                    </Link>
                    <Link to="/elyra" className="relative group text-white/90 hover:text-white transition-colors duration-300">
                        Elyra
                    </Link>
                </nav>

                <div className="flex items-center gap-6 z-50">
                    {/* Search Icon */}
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="text-white/90 hover:text-white transition-colors duration-300"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.35-4.35" />
                        </svg>
                    </button>
                    {/* Cart Icon */}
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative text-white/90 hover:text-white transition-colors duration-300"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-elyra-soft-gold text-[#1a1816] text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay - Enhanced */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-40 bg-[#1a1816]/95 backdrop-blur-lg flex flex-col justify-center items-center md:hidden overflow-hidden"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-elyra-soft-gold/10 rounded-full blur-[100px]" />
                            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-900/20 rounded-full blur-[120px]" />
                        </div>

                        {/* Menu Links with Staggered Animation */}
                        <nav className="relative z-10 flex flex-col space-y-6 text-center">
                            {[
                                { to: '/', label: 'Home' },
                                { to: '/shop', label: 'Shop' },
                                { to: '/discover', label: 'Discover' },
                                { to: '/about', label: 'About' },
                                { to: '/blog', label: 'Journal' },
                                { to: '/elyra', label: 'Elyra' }
                            ].map((link, index) => (
                                <motion.div
                                    key={link.to}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{
                                        delay: index * 0.08,
                                        duration: 0.5,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                >
                                    <Link
                                        to={link.to}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-3xl font-cinzel text-elyra-cream hover:text-elyra-soft-gold transition-all duration-300 tracking-[0.2em] py-2"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Bottom Decorative Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-elyra-soft-gold to-transparent"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Success Message Toast */}
            <AnimatePresence>
                {showSuccessMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, x: '-50%' }}
                        exit={{ opacity: 0, y: -50, x: '-50%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed top-28 left-1/2 z-[60] bg-elyra-soft-gold text-[#1a1816] px-6 py-4 rounded-sm shadow-2xl flex items-center gap-4 min-w-[300px]"
                    >
                        <div className="bg-black/10 p-2 rounded-full">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-cinzel font-bold text-sm tracking-wider uppercase">Order Confirmed</h4>
                            <p className="text-xs font-medium opacity-80">Thank you for your purchase.</p>
                        </div>
                        <button onClick={() => setShowSuccessMessage(false)} className="ml-2 hover:bg-black/10 p-1 rounded-full transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <main>
                {children}
            </main>

            <Cart />
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <Footer />
        </div>
    );
};

export default Layout;

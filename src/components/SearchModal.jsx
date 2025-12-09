import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search as SearchIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const SearchModal = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);

    // Auto-focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current.focus(), 100);
        }
    }, [isOpen]);

    // Search logic
    useEffect(() => {
        if (query.trim() === '') {
            setResults([]);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const filtered = products.filter(product => {
            return (
                product.name.toLowerCase().includes(lowerQuery) ||
                product.description.toLowerCase().includes(lowerQuery) ||
                product.scentFamily.toLowerCase().includes(lowerQuery) ||
                product.inspiration.toLowerCase().includes(lowerQuery) ||
                (product.topNotes && product.topNotes.some(note => note.toLowerCase().includes(lowerQuery))) ||
                (product.middleNotes && product.middleNotes.some(note => note.toLowerCase().includes(lowerQuery))) ||
                (product.baseNotes && product.baseNotes.some(note => note.toLowerCase().includes(lowerQuery)))
            );
        });
        setResults(filtered);
    }, [query]);

    // Handle escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] bg-[#1a1816]/95 backdrop-blur-xl flex flex-col"
                >
                    {/* Header / Search Bar */}
                    <div className="w-full max-w-5xl mx-auto px-6 py-8 md:py-12 flex flex-col gap-8">
                        <div className="flex justify-end">
                            <button
                                onClick={onClose}
                                className="text-elyra-cream/60 hover:text-elyra-soft-gold transition-colors p-2 hover:bg-white/5 rounded-full"
                            >
                                <X size={32} strokeWidth={1} />
                            </button>
                        </div>

                        <div className="relative border-b border-white/10 pb-4">
                            <SearchIcon className="absolute left-0 top-1/2 -translate-y-1/2 text-elyra-cream/40" size={32} />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search fragrances, notes, or feelings..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full bg-transparent text-2xl md:text-5xl font-cinzel text-elyra-cream placeholder:text-elyra-cream/20 focus:outline-none pl-12 md:pl-16 pb-2"
                            />
                        </div>
                    </div>

                    {/* Results Area */}
                    <div className="flex-1 overflow-y-auto w-full max-w-7xl mx-auto px-6 pb-20 scrollbar-hide">
                        {query && (
                            <div className="mb-8 text-elyra-cream/60 text-sm uppercase tracking-widest">
                                {results.length} results for "{query}"
                            </div>
                        )}

                        {results.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
                                {results.map((product, index) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            to={`/shop?product=${product.id}`} // Or a dedicated product page route if it exists
                                            onClick={onClose}
                                            className="group block space-y-4"
                                        >
                                            <div className="aspect-[4/5] bg-elyra-earth/20 overflow-hidden relative">
                                                {product.image ? (
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-white/5" />
                                                )}
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                                                {/* Hover Overlay */}
                                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <span className="bg-elyra-soft-gold text-[#1a1816] px-6 py-2 uppercase tracking-widest text-xs font-semibold">View</span>
                                                </div>
                                            </div>

                                            <div className="text-center space-y-1">
                                                <h3 className="font-cinzel text-elyra-cream text-lg group-hover:text-elyra-soft-gold transition-colors">
                                                    {product.name}
                                                </h3>
                                                <p className="text-xs text-elyra-cream/50 uppercase tracking-wider">
                                                    {product.scentFamily}
                                                </p>
                                                <p className="text-elyra-soft-gold text-sm font-medium mt-2">
                                                    ${product.price}
                                                </p>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        ) : query ? (
                            <div className="text-center py-20">
                                <p className="text-elyra-cream/40 text-lg font-light italic">
                                    No fragrances found. Try a different scent note or name.
                                </p>
                            </div>
                        ) : (
                            // Empty State Suggestions
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-60">
                                <div className="space-y-4">
                                    <h4 className="text-elyra-soft-gold text-xs uppercase tracking-widest border-b border-white/10 pb-2">Popular Searches</h4>
                                    <ul className="space-y-2 text-sm text-elyra-cream/70">
                                        <li><button onClick={() => setQuery('Oud')} className="hover:text-white transition-colors">Oud</button></li>
                                        <li><button onClick={() => setQuery('Vanilla')} className="hover:text-white transition-colors">Vanilla</button></li>
                                        <li><button onClick={() => setQuery('Floral')} className="hover:text-white transition-colors">Floral</button></li>
                                        <li><button onClick={() => setQuery('Summer')} className="hover:text-white transition-colors">Summer Scents</button></li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-elyra-soft-gold text-xs uppercase tracking-widest border-b border-white/10 pb-2">Collections</h4>
                                    <ul className="space-y-2 text-sm text-elyra-cream/70">
                                        <li><Link to="/shop" onClick={onClose} className="hover:text-white transition-colors">Best Sellers</Link></li>
                                        <li><Link to="/shop" onClick={onClose} className="hover:text-white transition-colors">New Arrivals</Link></li>
                                        <li><Link to="/shop" onClick={onClose} className="hover:text-white transition-colors">Gift Sets</Link></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchModal;

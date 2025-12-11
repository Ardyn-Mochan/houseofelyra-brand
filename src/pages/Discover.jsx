import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { getFullSchema } from '../data/seoSchema';
import { ChevronDown, Sparkles, Sun, Moon, Heart, Briefcase, Star, Leaf, Snowflake, Flower } from 'lucide-react';

import { scentFamilies, genderClassification, occasionClassification, seasonClassification } from '../data/scentFamilies';
import { products } from '../data/products';

const Discover = () => {
    const schemaData = getFullSchema();
    const navigate = useNavigate();

    // Active filter section
    const [activeSection, setActiveSection] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState({
        gender: null,
        occasion: null,
        season: null
    });

    // Get filtered products based on selection
    const getFilteredProducts = (type, value) => {
        let productNames = [];

        if (type === 'gender') {
            productNames = genderClassification[value] || [];
        } else if (type === 'occasion') {
            productNames = occasionClassification[value] || [];
        } else if (type === 'season') {
            productNames = seasonClassification[value] || [];
        }

        return products.filter(p => productNames.includes(p.name));
    };

    const handleFilterClick = (type, value) => {
        setSelectedFilters(prev => ({
            ...prev,
            [type]: prev[type] === value ? null : value
        }));
    };

    const filteredProducts = useMemo(() => {
        if (selectedFilters.gender) {
            return getFilteredProducts('gender', selectedFilters.gender);
        }
        if (selectedFilters.occasion) {
            return getFilteredProducts('occasion', selectedFilters.occasion);
        }
        if (selectedFilters.season) {
            return getFilteredProducts('season', selectedFilters.season);
        }
        return [];
    }, [selectedFilters]);

    const activeFilterLabel = selectedFilters.gender || selectedFilters.occasion || selectedFilters.season;

    return (
        <>
            <Helmet>
                <title>Discover House of Elyra – Premium Designer-Inspired & Niche-Style Fragrances | Luxury Perfumes Canada, USA, UAE</title>
                <meta name="description" content="Explore House of Elyra's curated collection of long-lasting, luxury-inspired perfumes and niche-style dupes. Discover unisex, men's and women's scents with woody, amber, fresh, floral, oriental and citrus profiles — perfect designer alternatives under $80. Ships to Canada, USA, UAE, India." />
                <meta name="keywords" content="designer-inspired perfumes, niche fragrance dupes, Tom Ford alternatives, luxury perfumes under $80, long-lasting perfume Canada, best perfumes Toronto, Dubai fragrance, woody amber perfume, fresh citrus cologne, floral romantic scent, oriental spicy fragrance, unisex perfume, House of Elyra" />
                <link rel="canonical" href="https://www.houseofelyra.com/discover" />

                {/* Open Graph / Social Media */}
                <meta property="og:title" content="Discover House of Elyra – Luxury-Inspired Fragrances" />
                <meta property="og:description" content="Premium designer-inspired perfumes and niche-style dupes. Long-lasting fragrances under $80." />
                <meta property="og:url" content="https://www.houseofelyra.com/discover" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.houseofelyra.com/images/og-discover.jpg" />
                <meta property="og:site_name" content="House of Elyra" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Discover House of Elyra – Luxury-Inspired Fragrances" />
                <meta name="twitter:description" content="Premium designer-inspired perfumes and niche-style dupes. Long-lasting fragrances under $80." />

                {/* Geo Targeting */}
                <meta name="geo.region" content="CA-ON" />
                <meta name="geo.placename" content="Toronto" />
                <meta name="geo.position" content="43.653226;-79.383184" />
                <meta name="ICBM" content="43.653226, -79.383184" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>

            <div className="bg-[#1a1816] min-h-screen pt-32 pb-24">
                <div className="container mx-auto px-6 md:px-12">

                    {/* Hero Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-3xl md:text-5xl font-cinzel text-elyra-cream mb-6 tracking-wide leading-tight">
                            Discover Your Signature Scent
                        </h1>
                        <p className="text-elyra-cream/70 font-cormorant text-xl md:text-2xl leading-relaxed">
                            Explore our curated collection by scent family, gender, occasion, or season. Find the perfect fragrance that speaks to your identity.
                        </p>
                    </motion.header>

                    {/* Quick Filters - Interactive Cards */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-20"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                            {/* By Gender */}
                            <div className="border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                                <button
                                    onClick={() => setActiveSection(activeSection === 'gender' ? null : 'gender')}
                                    className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <Sparkles className="w-5 h-5 text-elyra-soft-gold" />
                                        <span className="text-elyra-cream font-cinzel tracking-wide">By Gender</span>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 text-elyra-cream/50 transition-transform ${activeSection === 'gender' ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {activeSection === 'gender' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-white/10"
                                        >
                                            <div className="p-6 space-y-3">
                                                {['Feminine', 'Masculine', 'Unisex'].map(gender => (
                                                    <button
                                                        key={gender}
                                                        onClick={() => handleFilterClick('gender', gender)}
                                                        className={`w-full text-left px-4 py-3 text-sm uppercase tracking-widest transition-all ${selectedFilters.gender === gender
                                                                ? 'bg-elyra-soft-gold text-[#1a1816]'
                                                                : 'text-elyra-cream/70 hover:bg-white/10 hover:text-elyra-cream'
                                                            }`}
                                                    >
                                                        {gender}
                                                        <span className="float-right text-xs opacity-60">
                                                            {genderClassification[gender]?.length || 0} scents
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* By Occasion */}
                            <div className="border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                                <button
                                    onClick={() => setActiveSection(activeSection === 'occasion' ? null : 'occasion')}
                                    className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <Star className="w-5 h-5 text-elyra-soft-gold" />
                                        <span className="text-elyra-cream font-cinzel tracking-wide">By Occasion</span>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 text-elyra-cream/50 transition-transform ${activeSection === 'occasion' ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {activeSection === 'occasion' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-white/10"
                                        >
                                            <div className="p-6 space-y-3">
                                                {Object.keys(occasionClassification).map(occasion => (
                                                    <button
                                                        key={occasion}
                                                        onClick={() => handleFilterClick('occasion', occasion)}
                                                        className={`w-full text-left px-4 py-3 text-sm uppercase tracking-widest transition-all flex items-center gap-3 ${selectedFilters.occasion === occasion
                                                                ? 'bg-elyra-soft-gold text-[#1a1816]'
                                                                : 'text-elyra-cream/70 hover:bg-white/10 hover:text-elyra-cream'
                                                            }`}
                                                    >
                                                        {occasion === 'Daytime' && <Sun className="w-4 h-4" />}
                                                        {occasion === 'Evening' && <Moon className="w-4 h-4" />}
                                                        {occasion === 'Special Occasions' && <Sparkles className="w-4 h-4" />}
                                                        {occasion === 'Date Night' && <Heart className="w-4 h-4" />}
                                                        {occasion}
                                                        <span className="ml-auto text-xs opacity-60">
                                                            {occasionClassification[occasion]?.length || 0}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* By Season */}
                            <div className="border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                                <button
                                    onClick={() => setActiveSection(activeSection === 'season' ? null : 'season')}
                                    className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex items-center gap-3">
                                        <Leaf className="w-5 h-5 text-elyra-soft-gold" />
                                        <span className="text-elyra-cream font-cinzel tracking-wide">By Season</span>
                                    </div>
                                    <ChevronDown className={`w-4 h-4 text-elyra-cream/50 transition-transform ${activeSection === 'season' ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {activeSection === 'season' && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-white/10"
                                        >
                                            <div className="p-6 space-y-3">
                                                {Object.keys(seasonClassification).map(season => (
                                                    <button
                                                        key={season}
                                                        onClick={() => handleFilterClick('season', season)}
                                                        className={`w-full text-left px-4 py-3 text-sm uppercase tracking-widest transition-all flex items-center gap-3 ${selectedFilters.season === season
                                                                ? 'bg-elyra-soft-gold text-[#1a1816]'
                                                                : 'text-elyra-cream/70 hover:bg-white/10 hover:text-elyra-cream'
                                                            }`}
                                                    >
                                                        {season === 'Spring' && <Flower className="w-4 h-4" />}
                                                        {season === 'Summer' && <Sun className="w-4 h-4" />}
                                                        {season === 'Fall' && <Leaf className="w-4 h-4" />}
                                                        {season === 'Winter' && <Snowflake className="w-4 h-4" />}
                                                        {season}
                                                        <span className="ml-auto text-xs opacity-60">
                                                            {seasonClassification[season]?.length || 0}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Filtered Products Display */}
                        <AnimatePresence>
                            {activeFilterLabel && filteredProducts.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="mt-12 max-w-6xl mx-auto"
                                >
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-xl font-cinzel text-elyra-cream">
                                            {activeFilterLabel} Scents
                                            <span className="text-elyra-soft-gold ml-2">({filteredProducts.length})</span>
                                        </h3>
                                        <button
                                            onClick={() => setSelectedFilters({ gender: null, occasion: null, season: null })}
                                            className="text-xs uppercase tracking-widest text-elyra-cream/50 hover:text-elyra-soft-gold transition-colors"
                                        >
                                            Clear Filter
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                        {filteredProducts.slice(0, 10).map((product, index) => (
                                            <motion.div
                                                key={product.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <Link
                                                    to={`/product/${product.slug}`}
                                                    className="group block"
                                                >
                                                    <div className="aspect-[4/5] bg-elyra-earth/20 overflow-hidden border border-white/5 mb-3">
                                                        {product.image ? (
                                                            <img
                                                                src={product.image}
                                                                alt={product.name}
                                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full bg-white/5" />
                                                        )}
                                                    </div>
                                                    <h4 className="font-cinzel text-sm text-elyra-cream group-hover:text-elyra-soft-gold transition-colors text-center">
                                                        {product.name}
                                                    </h4>
                                                    <p className="text-xs text-elyra-cream/40 text-center mt-1">
                                                        ${product.price}
                                                    </p>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {filteredProducts.length > 10 && (
                                        <div className="text-center mt-8">
                                            <Link
                                                to="/shop"
                                                className="inline-block px-8 py-3 border border-elyra-soft-gold/50 text-elyra-cream text-xs uppercase tracking-[0.15em] hover:bg-elyra-soft-gold hover:text-[#1a1816] transition-all duration-300"
                                            >
                                                View All {filteredProducts.length} Scents
                                            </Link>
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.section>

                    {/* Scent Families Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-24"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-cinzel text-elyra-cream mb-4">
                                Explore Our Scent Families
                            </h2>
                            <p className="text-elyra-cream/60 font-light">
                                Browse by aromatic identity — because fragrance is personal, expressive, and atmospheric.
                            </p>
                        </div>

                        <div className="space-y-20">
                            {scentFamilies.map((family, index) => (
                                <motion.div
                                    key={family.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.8 }}
                                    className="grid md:grid-cols-2 gap-10 items-center border-t border-white/5 pt-12"
                                >
                                    {/* Text Content - Alternating sides */}
                                    <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                        <h3 className="text-xl md:text-2xl font-cinzel text-elyra-cream mb-2 tracking-wide flex items-center gap-3">
                                            {family.name}
                                            <span className="text-elyra-soft-gold">»</span>
                                        </h3>
                                        <p className="text-elyra-soft-gold font-light text-sm uppercase tracking-widest mb-4">
                                            {family.tagline}
                                        </p>
                                        <p className="text-elyra-cream/60 font-cormorant text-lg leading-relaxed mb-6">
                                            {family.description}
                                        </p>

                                        {/* Featured Products */}
                                        <div className="mb-6">
                                            <p className="text-xs uppercase tracking-widest text-elyra-cream/40 mb-3">Featured Scents ({family.products.length})</p>
                                            <div className="flex flex-wrap gap-2">
                                                {family.products.slice(0, 5).map((product) => (
                                                    <Link
                                                        key={product}
                                                        to={`/product/${product.toLowerCase().replace(/ /g, '-')}`}
                                                        className="px-3 py-1.5 bg-white/5 text-elyra-cream/70 text-xs border border-white/10 hover:bg-white/10 hover:text-elyra-soft-gold transition-colors duration-300"
                                                    >
                                                        {product}
                                                    </Link>
                                                ))}
                                                {family.products.length > 5 && (
                                                    <span className="px-3 py-1.5 text-elyra-cream/40 text-xs">
                                                        +{family.products.length - 5} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <Link
                                            to={`/shop/${family.id}`}
                                            className="inline-block px-6 py-2.5 border border-elyra-soft-gold/50 text-elyra-cream text-xs uppercase tracking-[0.15em] hover:bg-elyra-soft-gold hover:text-[#1a1816] transition-all duration-300"
                                        >
                                            Explore {family.name.split(' ')[0]} Scents
                                        </Link>
                                    </div>

                                    {/* Image */}
                                    <div className={`relative group ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                        <div className="aspect-[4/5] overflow-hidden border border-white/10">
                                            <img
                                                src={family.image}
                                                alt={family.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Featured Scents & Bestsellers */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-24 border-t border-white/10 pt-16"
                    >
                        <h2 className="text-2xl md:text-3xl font-cinzel text-elyra-cream mb-6 text-center">
                            Featured Scents & Bestseller Highlights
                        </h2>
                        <p className="text-elyra-cream/60 font-cormorant text-lg text-center max-w-3xl mx-auto mb-10">
                            Our top-rated perfumes — best sellers across men's, women's, and unisex lines — praised for longevity, projection, and their uncanny resemblance to beloved designer classics.
                        </p>
                        <div className="text-center">
                            <Link
                                to="/shop"
                                className="inline-block px-8 py-3 border border-elyra-soft-gold text-elyra-cream text-xs uppercase tracking-[0.2em] hover:bg-elyra-soft-gold hover:text-[#1a1816] transition-all duration-300"
                            >
                                View Bestsellers
                            </Link>
                        </div>
                    </motion.section>

                    {/* Why Elyra Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-24 border-t border-white/10 pt-16"
                    >
                        <h2 className="text-2xl md:text-3xl font-cinzel text-elyra-cream mb-6 text-center">
                            Why Elyra? Affordable Dupes & Niche-Inspired Fragrances
                        </h2>
                        <div className="max-w-3xl mx-auto text-center space-y-6">
                            <p className="text-elyra-cream/70 font-cormorant text-lg leading-relaxed">
                                At Elyra, we believe that high-performance, long-lasting perfume should be accessible. Our collection bridges the gap between elite designer scents and budget constraints — delivering <em className="text-elyra-soft-gold">designer-inspired perfumes</em> and <em className="text-elyra-soft-gold">niche alternatives</em> for men, women, and those who embrace unisex elegance.
                            </p>
                            <p className="text-elyra-cream/60 font-light text-base">
                                Whether you're searching for "perfumes similar to <strong className="text-elyra-cream">Tom Ford</strong>" or "amber woody unisex fragrances under $80," Elyra offers refined, high-value options engineered to perform.
                            </p>
                        </div>
                    </motion.section>

                    {/* CTA Footer */}
                    <motion.footer
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center border-t border-white/10 pt-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-cinzel text-elyra-cream mb-6">
                            Ready to Discover Your Signature Scent?
                        </h2>
                        <p className="text-elyra-cream/60 font-cormorant text-xl mb-8 max-w-2xl mx-auto">
                            Browse our full collection, explore scent families, and find your match — because fragrance is more than scent; it's identity, memory, emotion.
                        </p>
                        <Link
                            to="/shop"
                            className="inline-block px-12 py-4 bg-elyra-soft-gold text-[#1a1816] text-sm uppercase tracking-[0.2em] hover:bg-elyra-cream transition-all duration-300"
                        >
                            Shop All Elyra Perfumes
                        </Link>
                    </motion.footer>

                    {/* Hidden SEO Keywords */}
                    <div className="hidden" aria-hidden="true">
                        Designer-inspired perfumes, niche fragrance dupes, Tom Ford alternatives, luxury perfumes under $80, long-lasting perfume, unisex woody amber fragrance, affordable designer dupes, premium quality perfume, men's cologne alternatives, women's perfume dupes, citrus fresh cologne, oriental spicy fragrance, floral romantic scent, woody citrus aromatic, marine fresh perfume, signature scent finder
                    </div>
                </div>
            </div>
        </>
    );
};

export default Discover;

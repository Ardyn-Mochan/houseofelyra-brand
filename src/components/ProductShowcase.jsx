import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const products = [
    {
        id: 1,
        name: "Nebula Gold",
        description: "Inspired by: Baccarat Rouge 540",
        scent: "Scent Family: Amber–Woody",
        color: "from-purple-300 to-purple-600",
        price: "$39.99",
        image: "/nebula-gold.jpg"
    },
    {
        id: 2,
        name: "Helios Peak",
        description: "Inspired by: Creed Aventus",
        scent: "Scent Family: Fruity–Woody–Chypre",
        color: "from-amber-200 to-amber-500",
        price: "$39.99",
        image: "/helios-peak.jpg"
    },
    {
        id: 3,
        name: "Solstice Aura",
        description: "Inspired by: Louis Vuitton Imagination",
        scent: "Scent Family: Citrus–Aromatic",
        color: "from-cyan-200 to-cyan-500",
        price: "$39.99",
        image: "/solstice-aura.jpg"
    },
    {
        id: 4,
        name: "Frost Zenith",
        description: "Inspired by: Creed Silver Mountain Water",
        scent: "Scent Family: Fresh–Aromatic–Musky",
        color: "from-blue-300 to-blue-400",
        price: "$39.99",
        image: "/images/frost-zenith.jpg"
    },
    {
        id: 5,
        name: "Lunar Silk",
        description: "Inspired by: YSL Libre Intense",
        scent: "Scent Family: Amber–Floral",
        color: "from-purple-200 to-pink-300",
        price: "$39.99",
        image: "/images/lunar-silk.jpg"
    },
    {
        id: 6,
        name: "Ember Pulse",
        description: "Inspired by: Stronger With You Intensely",
        scent: "Scent Family: Amber–Vanilla–Spicy",
        color: "from-rose-200 to-rose-400",
        price: "$39.99",
        image: "/ember-pulse.jpg"
    },
    {
        id: 7,
        name: "Eternal Ember",
        description: "Inspired by: Parfums de Marly Althair",
        scent: "Scent Family: Amber–Vanilla",
        color: "from-amber-300 to-amber-600",
        price: "$39.99",
        image: "/images/eternal-ember.jpg"
    },
    {
        id: 8,
        name: "Shadow Rift",
        description: "Inspired by: Tom Ford Oud Wood",
        scent: "Scent Family: Woody–Amber",
        color: "from-amber-700 to-amber-900",
        price: "$39.99",
        image: "/images/shadow-rift.jpg"
    },
    {
        id: 9,
        name: "Starlit Femme",
        description: "Inspired by: Carolina Herrera Good Girl",
        scent: "Scent Family: Amber–Floral–Gourmand",
        color: "from-pink-300 to-purple-500",
        price: "$39.99",
        image: "/images/starlit-femme.jpg?v=1"
    },
    {
        id: 10,
        name: "Celestial Rose",
        description: "Inspired by: Chanel Coco Mademoiselle",
        scent: "Scent Family: Floral–Oriental",
        color: "from-rose-300 to-rose-500",
        price: "$39.99",
        image: "/images/celestial-rose.jpg"
    },
    {
        id: 11,
        name: "Solar Prism",
        description: "Inspired by: Nishane Hacivat",
        scent: "Scent Family: Fruity–Woody–Fresh",
        color: "from-yellow-200 to-green-400",
        price: "$39.99",
        image: "/images/solar-prism.jpg"
    },
    {
        id: 12,
        name: "Volcanic Crown",
        description: "Inspired by: SHL 777 God of Fire",
        scent: "Scent Family: Amber–Fruity–Spicy",
        color: "from-orange-400 to-red-600",
        price: "$39.99",
        image: "/images/volcanic-crown.jpg"
    },
    {
        id: 13,
        name: "Nightforge",
        description: "Inspired by: Dior Sauvage Elixir",
        scent: "Scent Family: Fougere–Spicy–Amber",
        color: "from-gray-700 to-gray-900",
        price: "$39.99",
        image: "/images/nightforge.jpg"
    },
    {
        id: 14,
        name: "Tidal Origin",
        description: "Inspired by: Acqua di Gio Parfum",
        scent: "Scent Family: Fresh–Marine–Aromatic",
        color: "from-blue-200 to-blue-500",
        price: "$39.99",
        image: "/images/tidal-origin.jpg"
    },
    {
        id: 15,
        name: "Cosmic Noir",
        description: "Inspired by: Bleu de Chanel",
        scent: "Scent Family: Woody–Aromatic",
        color: "from-blue-600 to-blue-900",
        price: "$39.99",
        image: "/images/cosmic-noir.jpg"
    },
    {
        id: 16,
        name: "Aegean Surge",
        description: "Inspired by: Versace Dylan Blue",
        scent: "Scent Family: Fresh–Aromatic–Woody",
        color: "from-cyan-400 to-blue-600",
        price: "$39.99",
        image: "/images/aegean-surge.jpg"
    },
    {
        id: 17,
        name: "Azure Pulse",
        description: "Inspired by: D&G Light Blue Intense",
        scent: "Scent Family: Fresh–Citrus–Marine",
        color: "from-sky-200 to-blue-400",
        price: "$39.99",
        image: "/images/azure-pulse.jpg"
    },
    {
        id: 18,
        name: "Ember Royale",
        description: "Inspired by: Paco Rabanne 1 Million Elixir",
        scent: "Scent Family: Amber–Spicy–Woody",
        color: "from-amber-500 to-red-700",
        price: "$39.99",
        image: "/images/ember-royale.jpg"
    },
    {
        id: 19,
        name: "Serpent Star",
        description: "Inspired by: Gucci Guilty Pour Homme",
        scent: "Scent Family: Woody–Aromatic",
        color: "from-green-700 to-gray-800",
        price: "$39.99",
        image: "/images/serpent-star.jpg"
    },
    {
        id: 20,
        name: "Lunar Bloom",
        description: "Inspired by: Gucci Bloom",
        scent: "Scent Family: Floral–White–Creamy",
        color: "from-pink-100 to-pink-300",
        price: "$39.99",
        image: "/images/lunar-bloom.jpg"
    },
    {
        id: 21,
        name: "Starborn Drift",
        description: "Inspired by: Dior Sauvage EDP",
        scent: "Scent Family: Fresh–Spicy–Aromatic",
        color: "from-gray-400 to-blue-600",
        price: "$39.99",
        image: "/images/starborn-drift.jpg"
    },
    {
        id: 22,
        name: "Ember Noir",
        description: "Inspired by: Tom Ford Noir Extreme",
        scent: "Scent Family: Amber–Gourmand–Spicy",
        color: "from-orange-600 to-gray-900",
        price: "$39.99",
        image: "/images/ember-noir.jpg"
    },
    {
        id: 23,
        name: "Solar Noir",
        description: "Inspired by: Tom Ford Black Orchid",
        scent: "Scent Family: Floral–Amber–Spicy",
        color: "from-yellow-600 to-gray-900",
        price: "$39.99",
        image: "/images/solar-noir.jpg"
    },
    {
        id: 24,
        name: "Aether Santal",
        description: "Inspired by: Le Labo Santal 33",
        scent: "Scent Family: Woody–Leather–Aromatic",
        color: "from-stone-300 to-stone-600",
        price: "$39.99",
        image: "/images/aether-santal.jpg"
    },
    {
        id: 25,
        name: "Blossom Ray",
        description: "Inspired by: Marc Jacobs Daisy",
        scent: "Scent Family: Floral–Fruity–Fresh",
        color: "from-yellow-200 to-pink-300",
        price: "$39.99",
        image: "/images/blossom-ray.jpg"
    },
    {
        id: 26,
        name: "Midnight Petal",
        description: "Inspired by: Marc Jacobs Decadence",
        scent: "Scent Family: Amber–Floral–Woody",
        color: "from-purple-500 to-purple-900",
        price: "$39.99",
        image: "/images/midnight-petal.jpg"
    },
    {
        id: 27,
        name: "Aegean Star",
        description: "Inspired by: Versace Pour Homme",
        scent: "Scent Family: Citrus–Aromatic",
        color: "from-blue-300 to-cyan-500",
        price: "$39.99",
        image: "/images/aegean-star.jpg"
    },
    {
        id: 28,
        name: "Radiant Eclipse",
        description: "Inspired by: Paco Rabanne Invictus",
        scent: "Scent Family: Fresh–Woody–Marine",
        color: "from-indigo-400 to-purple-700",
        price: "$39.99",
        image: "/images/radiant-eclipse.jpg"
    },
    {
        id: 29,
        name: "Aurora Bloom",
        description: "Inspired by: Miss Dior (EDP)",
        scent: "Scent Family: Floral–Fresh–Soft",
        color: "from-pink-200 to-rose-400",
        price: "$39.99",
        image: "/images/aurora-bloom.jpg"
    },
    {
        id: 30,
        name: "Stellar Velvet",
        description: "Inspired by: Chanel Chance Eau Tendre",
        scent: "Scent Family: Floral–Fruity–Fresh",
        color: "from-pink-100 to-pink-400",
        price: "$39.99",
        image: "/images/stellar-velvet.jpg"
    },
    {
        id: 31,
        name: "Rose Nebula",
        description: "Inspired by: Lancôme La Vie Est Belle",
        scent: "Scent Family: Floral–Gourmand–Sweet",
        color: "from-rose-300 to-pink-500",
        price: "$39.99",
        image: "/images/rose-nebula.jpg"
    },
    {
        id: 32,
        name: "Midnight Aura",
        description: "Inspired by: YSL Black Opium",
        scent: "Scent Family: Gourmand–Amber–Floral",
        color: "from-purple-700 to-black",
        price: "$39.99",
        image: "/images/midnight-aura.jpg"
    },
    {
        id: 33,
        name: "Petal Sphere",
        description: "Inspired by: Chloe Nomade",
        scent: "Scent Family: Floral–Fruity–Woody",
        color: "from-pink-200 to-amber-300",
        price: "$39.99",
        image: "/images/petal-sphere.jpg"
    },
    {
        id: 34,
        name: "Cloud Meadow",
        description: "Inspired by: Jo Malone English Pear & Freesia",
        scent: "Scent Family: Fresh–Fruity–Floral",
        color: "from-green-200 to-yellow-300",
        price: "$39.99",
        image: "/images/cloud-meadow.jpg"
    },
    {
        id: 35,
        name: "Iris Halo",
        description: "Inspired by: Le Labo Iris 39",
        scent: "Scent Family: Floral–Woody–Powdery",
        color: "from-purple-200 to-indigo-400",
        price: "$39.99",
        image: "/images/iris-halo.jpg"
    },
    {
        id: 36,
        name: "Amber Radiance",
        description: "Inspired by: Kilian Angel Share",
        scent: "Scent Family: Gourmand–Amber–Spicy",
        color: "from-amber-400 to-orange-600",
        price: "$39.99",
        image: "/images/amber-radiance.jpg"
    },
    {
        id: 37,
        name: "Fire Blossom",
        description: "Inspired by: Viktor&Rolf Flowerbomb",
        scent: "Scent Family: Floral–Amber–Sweet",
        color: "from-pink-400 to-red-500",
        price: "$39.99",
        image: "/images/fire-blossom.jpg"
    },
    {
        id: 38,
        name: "Ember Strike",
        description: "Inspired by: Paco Rabanne Phantom",
        scent: "Scent Family: Woody–Aromatic–Creamy",
        color: "from-red-500 to-orange-700",
        price: "$39.99",
        image: "/images/ember-strike.jpg"
    },
    {
        id: 39,
        name: "Oceanic Halo",
        description: "Inspired by: Replica Lazy Sunday Morning",
        scent: "Scent Family: Fresh–Clean–Soft Floral",
        color: "from-blue-100 to-sky-300",
        price: "$39.99",
        image: "/images/oceanic-halo.jpg"
    },
    {
        id: 40,
        name: "Nightfall Ember",
        description: "Inspired by: Replica Jazz Club",
        scent: "Scent Family: Warm–Spicy–Woody",
        color: "from-amber-700 to-gray-900",
        price: "$39.99",
        image: "/images/nightfall-ember.jpg"
    },
    {
        id: 41,
        name: "Nightfall Rose",
        description: "Inspired by: Givenchy L'Interdit (EDP)",
        scent: "Scent Family: Floral–Amber–Woody",
        color: "from-rose-600 to-gray-800",
        price: "$39.99",
        image: "/images/nightfall-rose.jpg"
    },
    {
        id: 42,
        name: "Flora Nova",
        description: "Inspired by: Balenciaga Florabotanica",
        scent: "Scent Family: Floral–Green–Modern",
        color: "from-green-400 to-emerald-600",
        price: "$39.99",
        image: "/images/flora-nova.jpg"
    },
    {
        id: 43,
        name: "Solar Bloom",
        description: "Inspired by: Valentino Donna Born in Roma",
        scent: "Scent Family: Floral–Vanilla–Modern",
        color: "from-purple-300 to-amber-500",
        price: "$39.99",
        image: "/images/solar-bloom.jpg"
    },
    {
        id: 44,
        name: "Crystal Dawn",
        description: "Inspired by: MFK Amyris Femme",
        scent: "Scent Family: Floral–Woody–Sweet",
        color: "from-yellow-100 to-amber-300",
        price: "$39.99",
        image: "/images/crystal-dawn.jpg"
    },
    {
        id: 45,
        name: "Stellar Bloom",
        description: "Inspired by: Gucci Flora Gorgeous Gardenia",
        scent: "Scent Family: Floral–Fruity–Sweet",
        color: "from-white to-pink-400",
        price: "$39.99",
        image: "/images/stellar-bloom.jpg"
    },
    {
        id: 46,
        name: "Astral Wonder",
        description: "Inspired by: Prada Paradoxe",
        scent: "Scent Family: Floral–Ambery–Musk",
        color: "from-pink-300 to-amber-400",
        price: "$39.99",
        image: "/images/astral-wonder.jpg"
    },
    {
        id: 47,
        name: "Golden Stardust",
        description: "Inspired by: Armani Si",
        scent: "Scent Family: Floral–Fruity–Amber",
        color: "from-yellow-300 to-amber-600",
        price: "$39.99",
        image: "/images/golden-stardust.jpg"
    },
    {
        id: 48,
        name: "Velvet Cosmos",
        description: "Inspired by: Burberry Her (EDP)",
        scent: "Scent Family: Fruity–Gourmand–Floral",
        color: "from-red-300 to-pink-600",
        price: "$39.99",
        image: "/images/velvet-cosmos.jpg"
    },
    {
        id: 49,
        name: "Mystic Oud",
        description: "Inspired by: Jo Malone Oud & Bergamot",
        scent: "Scent Family: Oud–Citrus–Woody",
        color: "from-amber-800 to-gray-900",
        price: "$39.99",
        image: "/images/mystic-oud.jpg"
    },
    {
        id: 50,
        name: "Ancient Ember",
        description: "Inspired by: Mugler Alien",
        scent: "Scent Family: Amber–Woody–Floral",
        color: "from-purple-600 to-indigo-900",
        price: "$39.99",
        image: "/images/ancient-ember.jpg"
    },
    {
        id: 51,
        name: "Solar Apex",
        description: "Inspired by: Creed Aventus Absolu",
        scent: "Scent Family: Fresh–Fruity–Woody Chypre",
        color: "from-yellow-400 to-amber-700",
        price: "$39.99",
        image: "/images/solar-apex.jpg"
    }
];

const ProductShowcase = () => {
    const containerRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const [scrollDirection, setScrollDirection] = useState(null);
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect (subtle -5% to work with infinite scroll width)
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

    // Triple the products to create an infinite loop buffer
    const extendedProducts = [...products, ...products, ...products];

    useEffect(() => {
        // Set initial scroll position to the middle set
        if (scrollContainerRef.current) {
            const scrollWidth = scrollContainerRef.current.scrollWidth;
            const singleSetWidth = scrollWidth / 3;
            scrollContainerRef.current.scrollLeft = singleSetWidth;
        }
    }, []);

    useEffect(() => {
        let animationFrame;
        const scrollSpeed = 8; // Adjust speed as needed

        const animateScroll = () => {
            if (scrollContainerRef.current) {
                const container = scrollContainerRef.current;

                // Apply scroll based on direction
                if (scrollDirection) {
                    container.scrollLeft += scrollDirection === 'right' ? scrollSpeed : -scrollSpeed;
                }

                // Infinite Scroll Logic (Seamless Looping)
                const scrollWidth = container.scrollWidth;
                const singleSetWidth = scrollWidth / 3;

                // If scrolled past the second set (towards right end), jump back to start of second set
                if (container.scrollLeft >= 2 * singleSetWidth) {
                    container.scrollLeft = singleSetWidth;
                }
                // If scrolled past the first set (towards left start), jump forward to start of second set
                else if (container.scrollLeft <= 0) {
                    container.scrollLeft = singleSetWidth;
                }

                animationFrame = requestAnimationFrame(animateScroll);
            }
        };

        animationFrame = requestAnimationFrame(animateScroll);

        return () => cancelAnimationFrame(animationFrame);
    }, [scrollDirection]);

    return (
        <section ref={containerRef} className="py-32 bg-elyra-cream-light relative overflow-hidden">
            <div className="container mx-auto px-8 mb-20 flex justify-between items-end">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-cinzel text-elyra-soft-brown mb-6">
                        Signature <span className="italic text-elyra-soft-gold">Collection</span>
                    </h2>
                    <p className="font-cormorant text-elyra-earth/80 max-w-xl text-xl md:text-2xl font-light leading-relaxed">
                        Discover our curated selection of premium fragrances, each crafted to evoke a unique emotion and memory.
                    </p>
                    <div className="w-32 h-[2px] bg-gradient-to-r from-elyra-soft-gold to-transparent mt-8"></div>
                </motion.div>
            </div>

            <div className="relative w-full group">
                {/* Left Hover Zone */}
                <div
                    className="absolute top-0 left-0 w-24 md:w-32 h-full z-20 cursor-w-resize flex items-center justify-start pl-4 bg-gradient-to-r from-elyra-cream-light/90 via-elyra-cream-light/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onMouseEnter={() => setScrollDirection('left')}
                    onMouseLeave={() => setScrollDirection(null)}
                >
                    <ChevronLeft className="text-elyra-soft-brown/80 drop-shadow-lg" size={40} strokeWidth={1} />
                </div>

                {/* Right Hover Zone */}
                <div
                    className="absolute top-0 right-0 w-24 md:w-32 h-full z-20 cursor-e-resize flex items-center justify-end pr-4 bg-gradient-to-l from-elyra-cream-light/90 via-elyra-cream-light/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onMouseEnter={() => setScrollDirection('right')}
                    onMouseLeave={() => setScrollDirection(null)}
                >
                    <ChevronRight className="text-elyra-soft-brown/80 drop-shadow-lg" size={40} strokeWidth={1} />
                </div>

                <div
                    ref={scrollContainerRef}
                    className="relative w-full overflow-x-auto hide-scrollbar pl-8 md:pl-0"
                >
                    <motion.div
                        className="flex space-x-6 md:space-x-8 px-8 min-w-max"
                        style={{ x }}
                    >
                        {extendedProducts.map((product, index) => (
                            <motion.div
                                key={`${product.id}-${index}`}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % products.length) * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                onClick={() => navigate(`/product/${product.name.toLowerCase().replace(/ /g, '-')}`)}
                                className={`group relative w-[300px] md:w-[380px] h-[520px] bg-elyra-ivory border border-elyra-taupe/20 flex flex-col justify-end overflow-hidden transition-all duration-700 hover:border-elyra-soft-gold/40 hover:shadow-[0_0_40px_rgba(212,196,168,0.15)] hover:backdrop-blur-sm cursor-pointer ${product.image ? 'p-6' : 'p-8'}`}
                            >
                                {/* Product Image (if exists) */}
                                {product.image ? (
                                    <div className="absolute inset-0">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 group-hover:blur-[3px]"
                                        />
                                        {/* Dark overlay for text visibility */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                    </div>
                                ) : (
                                    <>
                                        {/* Abstract Bottle Gradient */}
                                        <div className={`absolute top-0 left-0 w-full h-full opacity-15 bg-gradient-to-br ${product.color} group-hover:opacity-25 transition-all duration-700 group-hover:blur-[2px]`} />

                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                            <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-gradient-to-br ${product.color} blur-3xl opacity-20`} />
                                        </div>
                                    </>
                                )}

                                {/* Product Number - Top Right */}
                                <div className="absolute top-6 right-6 text-5xl md:text-6xl font-cinzel text-elyra-soft-gold/15 group-hover:text-elyra-soft-gold/25 transition-colors duration-700 leading-none">
                                    {String((index % products.length) + 1).padStart(2, '0')}
                                </div>

                                {/* Product Details - Bottom */}
                                <div className="absolute bottom-6 left-6 right-6 z-10 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-700 space-y-0">
                                    <h3 className={`font-cinzel tracking-wide ${product.image ? 'text-2xl text-white !text-white' : 'text-3xl text-elyra-soft-brown'}`} style={product.image ? { color: '#ffffff', textShadow: '0 0 40px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,0.9), 0 4px 8px rgba(0,0,0,0.8)' } : {}}>{product.name}</h3>

                                    {/* Description and Cart/Price on same line */}
                                    <div className="flex items-center justify-between gap-4">
                                        <p className={`font-light leading-tight ${product.image ? 'text-xs text-white !text-white' : 'text-sm text-elyra-earth/70'}`} style={product.image ? { color: '#ffffff', textShadow: '0 0 35px rgba(0,0,0,1), 0 0 25px rgba(0,0,0,1), 0 0 15px rgba(0,0,0,0.9), 0 3px 6px rgba(0,0,0,0.8)' } : {}}>{product.description}</p>

                                        {/* Shopping Bag Icon with Price */}
                                        <button
                                            onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                                            className="flex flex-col items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 flex-shrink-0"
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                className={`${product.image ? 'text-white' : 'text-elyra-soft-brown'} flex-shrink-0`}
                                            >
                                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                                <line x1="3" y1="6" x2="21" y2="6" />
                                                <path d="M16 10a4 4 0 0 1-8 0" />
                                            </svg>
                                            <span className={`text-[8px] font-medium leading-none ${product.image ? 'text-white' : 'text-elyra-soft-brown'}`} style={product.image ? { textShadow: '0 0 20px rgba(0,0,0,0.8)' } : {}}>
                                                {product.price}
                                            </span>
                                        </button>
                                    </div>

                                    {product.scent && (
                                        <p className={`font-light italic leading-tight ${product.image ? 'text-[10px] text-white !text-white' : 'text-xs text-elyra-earth/60'}`} style={product.image ? { color: '#ffffff', textShadow: '0 0 35px rgba(0,0,0,1), 0 0 25px rgba(0,0,0,1), 0 0 15px rgba(0,0,0,0.9), 0 3px 6px rgba(0,0,0,0.8)' } : {}}>{product.scent}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-elyra-soft-gold/10 blur-3xl rounded-full pointer-events-none" />
        </section>
    );
};

export default ProductShowcase;

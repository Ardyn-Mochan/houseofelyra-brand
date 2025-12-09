import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useCart } from '../context/CartContext';
import { getProductBySlug, getSimilarProducts } from '../data/products';
import { Clock, Wind, User, AlertCircle, Droplets, Sparkles, Layers } from 'lucide-react';

const ProductDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('notes');
    const [addedToCart, setAddedToCart] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const product = getProductBySlug(slug);
    const similarProducts = product ? getSimilarProducts(product, 4) : [];

    useEffect(() => {
        if (!product) {
            navigate('/shop');
        }
        window.scrollTo(0, 0);
    }, [product, navigate, slug]);

    if (!product) return null;

    const handleAddToCart = () => {
        // Add multiple times based on quantity
        for (let i = 0; i < quantity; i++) {
            addToCart({
                id: product.id,
                name: product.name,
                price: `$${product.price}`,
                image: product.image
            });
        }
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };

    // Helper to render performance dots
    const PerformanceMeter = ({ label, value }) => {
        // Convert string values to 1-5 scale roughly
        let score = 3;
        if (value.toLowerCase().includes('moderate')) score = 3;
        if (value.toLowerCase().includes('long') || value.toLowerCase().includes('strong')) score = 4;
        if (value.toLowerCase().includes('eternal') || value.toLowerCase().includes('enormous')) score = 5;
        if (value.toLowerCase().includes('intimate')) score = 2;

        return (
            <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs uppercase tracking-widest text-elyra-cream/80">
                    <span>{label}</span>
                    <span>{value}</span>
                </div>
                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                            key={dot}
                            className={`h-1 flex-1 rounded-full transition-colors duration-500 ${dot <= score ? 'bg-elyra-soft-gold' : 'bg-white/10'
                                }`}
                        />
                    ))}
                </div>
            </div>
        );
    };

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "description": product.description,
        "image": `https://www.houseofelyra.com${product.image}`,
        "brand": { "@type": "Brand", "name": "House of Elyra" },
        "sku": `ELYRA-${product.id.toString().padStart(3, '0')}`,
        "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": product.price,
            "availability": "https://schema.org/InStock",
            "url": `https://www.houseofelyra.com/product/${product.slug}`
        }
    };

    return (
        <>
            <Helmet>
                <title>{product.name} | House of Elyra – Inspired by {product.inspiration}</title>
                <meta name="description" content={`${product.name} – ${product.description.slice(0, 150)}... Inspired by ${product.inspiration}. Long-lasting ${product.scentFamily} fragrance. $${product.price}`} />
                <meta property="og:title" content={`${product.name} | House of Elyra`} />
                <meta property="og:description" content={product.description} />
                <meta property="og:image" content={`https://www.houseofelyra.com${product.image}`} />
                <link rel="canonical" href={`https://www.houseofelyra.com/product/${product.slug}`} />
                <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
            </Helmet>

            <div className="bg-[#1a1816] min-h-screen pt-24 pb-20 relative overflow-hidden">

                {/* Subtle Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-elyra-soft-gold/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

                {/* Breadcrumb */}
                <div className="container mx-auto px-6 md:px-12 py-4 mb-8">
                    <nav className="text-xs text-elyra-cream/40 uppercase tracking-widest flex items-center gap-2">
                        <Link to="/" className="hover:text-elyra-soft-gold transition">Home</Link>
                        <span>/</span>
                        <Link to="/shop" className="hover:text-elyra-soft-gold transition">Shop</Link>
                        <span>/</span>
                        <span className="text-elyra-soft-gold">{product.name}</span>
                    </nav>
                </div>

                {/* Main Product Section */}
                <section className="container mx-auto px-6 md:px-12">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

                        {/* Product Image (Left - larger on desktop) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-7 relative group"
                        >
                            <div className="aspect-square relative overflow-hidden border border-white/5 bg-gradient-to-b from-[#25221e] to-[#141210] shadow-2xl">
                                <motion.img
                                    src={product.image}
                                    alt={product.name}
                                    className={`w-full h-full object-cover object-center transition-all duration-1000 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                                    onLoad={() => setImageLoaded(true)}
                                />
                                {/* Hover sheen effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            </div>


                        </motion.div>

                        {/* Product Info (Right) */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-5 flex flex-col justify-center"
                        >
                            {/* Header */}
                            <div className="mb-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="inline-block px-3 py-1 border border-white/10 text-[10px] uppercase tracking-[0.2em] text-elyra-cream/60">
                                        {product.scentFamily}
                                    </span>
                                    <span className="text-elyra-soft-gold text-xs italic font-cormorant">
                                        Inspired by {product.inspiration}
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-cinzel text-elyra-cream mb-4 font-medium leading-tight">
                                    {product.name}
                                </h1>
                                <div className="flex items-end gap-4 mb-6">
                                    <p className="text-3xl font-light text-elyra-soft-gold">
                                        ${product.price}
                                    </p>
                                    <p className="text-sm text-elyra-cream/40 mb-2 font-light">
                                        50ml / 1.7oz Extrait de Parfum
                                    </p>
                                </div>

                                {/* Performance Stats Visualized */}
                                <div className="grid grid-cols-2 gap-6 p-6 bg-white/[0.03] border border-white/5 rounded-sm">
                                    <PerformanceMeter label="Longevity" value={product.longevity} />
                                    <PerformanceMeter label="Sillage" value={product.sillage} />
                                </div>
                            </div>

                            {/* Narrative Description */}
                            <div className="mb-10 relative">
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-elyra-soft-gold/0 via-elyra-soft-gold/50 to-elyra-soft-gold/0" />
                                <p className="text-elyra-cream/80 font-cormorant text-xl leading-relaxed pl-6">
                                    {product.description}
                                </p>
                            </div>

                            {/* Add to Cart Section */}
                            <div className="space-y-4 mb-12">
                                <div className="flex gap-4">
                                    {/* Quantity Stepper */}
                                    <div className="flex border border-white/20 h-14 w-32">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="flex-1 hover:bg-white/5 text-elyra-cream transition text-lg"
                                        >
                                            −
                                        </button>
                                        <div className="flex items-center justify-center text-elyra-cream w-10 font-light border-x border-white/10">
                                            {quantity}
                                        </div>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="flex-1 hover:bg-white/5 text-elyra-cream transition text-lg"
                                        >
                                            +
                                        </button>
                                    </div>

                                    {/* Main Button */}
                                    <button
                                        onClick={handleAddToCart}
                                        className={`flex-1 h-14 uppercase tracking-[0.2em] text-sm font-semibold transition-all duration-300 relative overflow-hidden group ${addedToCart
                                            ? 'bg-green-900/80 text-white border border-green-500/30'
                                            : 'bg-elyra-soft-gold text-[#1a1816] hover:bg-elyra-cream'
                                            }`}
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            {addedToCart ? (
                                                <>
                                                    <Sparkles size={16} /> Added to Sanctuary
                                                </>
                                            ) : (
                                                'Add to Cart'
                                            )}
                                        </span>
                                    </button>
                                </div>
                                <p className="text-center text-[10px] uppercase tracking-widest text-elyra-cream/40">
                                    Free Shipping to Canada & USA
                                </p>
                            </div>

                            {/* Accordion / Tabs */}
                            <div className="border-t border-white/10">
                                <div className="flex">
                                    {['notes', 'details', 'pairings'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`flex-1 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors ${activeTab === tab
                                                ? 'text-elyra-soft-gold border-b border-elyra-soft-gold bg-white/[0.02]'
                                                : 'text-elyra-cream/40 border-b border-transparent hover:text-elyra-cream/70'
                                                }`}
                                        >
                                            {tab === 'pairings' ? 'Best For' : tab}
                                        </button>
                                    ))}
                                </div>

                                <div className="py-8 min-h-[200px]">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeTab}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {activeTab === 'notes' && (
                                                <div className="space-y-8">
                                                    <div className="flex gap-4">
                                                        <div className="w-8 flex flex-col items-center gap-1.5 pt-1">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                                                            <div className="w-px h-full bg-gradient-to-b from-rose-400/50 to-transparent" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-xs uppercase tracking-widest text-rose-300 mb-2">Top Notes</h4>
                                                            <p className="text-elyra-cream/80 font-cormorant text-lg">{product.topNotes.join(', ')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <div className="w-8 flex flex-col items-center gap-1.5 pt-1">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                                                            <div className="w-px h-full bg-gradient-to-b from-amber-400/50 to-transparent" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-xs uppercase tracking-widest text-amber-300 mb-2">Heart Notes</h4>
                                                            <p className="text-elyra-cream/80 font-cormorant text-lg">{product.middleNotes.join(', ')}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <div className="w-8 flex flex-col items-center gap-1.5 pt-1">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-amber-700" />
                                                            <div className="w-px h-full bg-gradient-to-b from-amber-700/50 to-transparent" />
                                                        </div>
                                                        <div>
                                                            <h4 className="text-xs uppercase tracking-widest text-amber-700 mb-2">Base Notes</h4>
                                                            <p className="text-elyra-cream/80 font-cormorant text-lg">{product.baseNotes.join(', ')}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {activeTab === 'details' && (
                                                <ul className="space-y-4">
                                                    <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                                                        <span className="text-elyra-cream/50 flex items-center gap-2"><Droplets size={14} /> Concentration</span>
                                                        <span className="text-elyra-cream">Extrait (30% Oil)</span>
                                                    </li>
                                                    <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                                                        <span className="text-elyra-cream/50 flex items-center gap-2"><User size={14} /> Gender</span>
                                                        <span className="text-elyra-cream">{product.gender}</span>
                                                    </li>
                                                    <li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                                                        <span className="text-elyra-cream/50 flex items-center gap-2"><Layers size={14} /> Family</span>
                                                        <span className="text-elyra-cream">{product.scentFamily}</span>
                                                    </li>
                                                </ul>
                                            )}

                                            {activeTab === 'pairings' && (
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="text-[10px] uppercase tracking-widest text-elyra-cream/40 mb-3">Occasions</h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {product.occasion.map(o => (
                                                                <span key={o} className="px-3 py-1.5 border border-white/10 text-elyra-cream/70 text-xs">
                                                                    {o}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-[10px] uppercase tracking-widest text-elyra-cream/40 mb-3">Seasons</h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {product.season.map(s => (
                                                                <span key={s} className="px-3 py-1.5 border border-white/10 text-elyra-cream/70 text-xs">
                                                                    {s}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </section>

                {/* Similar Products */}
                {similarProducts.length > 0 && (
                    <section className="container mx-auto px-6 md:px-12 py-24 border-t border-white/5 mt-12 bg-gradient-to-b from-[#1a1816] to-[#141210]">
                        <h2 className="text-3xl font-cinzel text-elyra-cream mb-12 text-center text-elyra-soft-gold">
                            Curated Recommendations
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
                            {similarProducts.map((p) => (
                                <Link
                                    key={p.id}
                                    to={`/product/${p.slug}`}
                                    className="group block"
                                >
                                    <div className="aspect-[3/4] overflow-hidden border border-white/5 bg-[#1a1816] mb-4 relative">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <p className="text-elyra-soft-gold text-xs uppercase tracking-widest">View</p>
                                        </div>
                                    </div>
                                    <h3 className="text-elyra-cream font-cinzel text-lg group-hover:text-elyra-soft-gold transition-colors">
                                        {p.name}
                                    </h3>
                                    <p className="text-elyra-cream/50 text-xs uppercase tracking-wider mt-1">{p.scentFamily}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </>
    );
};

export default ProductDetail;

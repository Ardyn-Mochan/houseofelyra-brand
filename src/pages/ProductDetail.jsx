import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useCart } from '../context/CartContext';
import { getProductBySlug, getSimilarProducts, products } from '../data/products';

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

            <div className="bg-[#1a1816] min-h-screen pt-24">
                {/* Breadcrumb */}
                <div className="container mx-auto px-6 md:px-12 py-4">
                    <nav className="text-sm text-elyra-cream/50">
                        <Link to="/" className="hover:text-elyra-soft-gold transition">Home</Link>
                        <span className="mx-2">/</span>
                        <Link to="/shop" className="hover:text-elyra-soft-gold transition">Shop</Link>
                        <span className="mx-2">/</span>
                        <span className="text-elyra-cream">{product.name}</span>
                    </nav>
                </div>

                {/* Main Product Section */}
                <section className="container mx-auto px-6 md:px-12 py-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Product Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-square overflow-hidden border border-white/10 bg-[#141210]">
                                <motion.img
                                    src={product.image}
                                    alt={product.name}
                                    className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                                    onLoad={() => setImageLoaded(true)}
                                />
                            </div>

                            {/* Inspiration Badge */}
                            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 border border-white/20">
                                <p className="text-xs uppercase tracking-widest text-elyra-soft-gold">Inspired by</p>
                                <p className="text-sm text-elyra-cream font-light">{product.inspiration}</p>
                            </div>
                        </motion.div>

                        {/* Product Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col"
                        >
                            {/* Header */}
                            <div className="mb-8">
                                <p className="text-xs uppercase tracking-[0.2em] text-elyra-soft-gold mb-2">
                                    {product.scentFamily}
                                </p>
                                <h1 className="text-4xl md:text-5xl font-cinzel text-elyra-cream mb-4 tracking-wide">
                                    {product.name}
                                </h1>
                                <p className="text-3xl text-elyra-cream font-light">
                                    ${product.price}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="text-elyra-cream/70 font-cormorant text-lg leading-relaxed mb-8 border-l-2 border-elyra-soft-gold/30 pl-6">
                                {product.description}
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                <div className="border border-white/10 p-4 text-center">
                                    <p className="text-xs uppercase tracking-widest text-elyra-cream/50 mb-1">Longevity</p>
                                    <p className="text-elyra-cream font-light">{product.longevity}</p>
                                </div>
                                <div className="border border-white/10 p-4 text-center">
                                    <p className="text-xs uppercase tracking-widest text-elyra-cream/50 mb-1">Sillage</p>
                                    <p className="text-elyra-cream font-light">{product.sillage}</p>
                                </div>
                                <div className="border border-white/10 p-4 text-center">
                                    <p className="text-xs uppercase tracking-widest text-elyra-cream/50 mb-1">For</p>
                                    <p className="text-elyra-cream font-light">{product.gender}</p>
                                </div>
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="flex gap-4 mb-8">
                                <div className="flex border border-white/20">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-12 h-12 text-elyra-cream hover:bg-white/10 transition flex items-center justify-center"
                                    >
                                        −
                                    </button>
                                    <div className="w-16 h-12 flex items-center justify-center text-elyra-cream border-x border-white/20">
                                        {quantity}
                                    </div>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-12 h-12 text-elyra-cream hover:bg-white/10 transition flex items-center justify-center"
                                    >
                                        +
                                    </button>
                                </div>

                                <motion.button
                                    onClick={handleAddToCart}
                                    whileTap={{ scale: 0.98 }}
                                    className={`flex-1 py-4 text-sm uppercase tracking-[0.2em] transition-all duration-300 ${addedToCart
                                            ? 'bg-green-600 text-white'
                                            : 'bg-elyra-soft-gold text-[#1a1816] hover:bg-elyra-cream'
                                        }`}
                                >
                                    {addedToCart ? '✓ Added to Cart' : 'Add to Cart'}
                                </motion.button>
                            </div>

                            {/* Tabs */}
                            <div className="border-t border-white/10 pt-8">
                                <div className="flex gap-8 mb-6">
                                    {['notes', 'details', 'occasions'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`text-xs uppercase tracking-[0.15em] pb-2 border-b-2 transition ${activeTab === tab
                                                    ? 'text-elyra-soft-gold border-elyra-soft-gold'
                                                    : 'text-elyra-cream/50 border-transparent hover:text-elyra-cream'
                                                }`}
                                        >
                                            {tab === 'notes' ? 'Scent Notes' : tab === 'details' ? 'Details' : 'Best For'}
                                        </button>
                                    ))}
                                </div>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {activeTab === 'notes' && (
                                            <div className="space-y-6">
                                                <div>
                                                    <h4 className="text-sm uppercase tracking-widest text-elyra-soft-gold/80 mb-3">Top Notes</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {product.topNotes.map((note) => (
                                                            <span key={note} className="px-4 py-2 bg-rose-500/10 text-rose-300 text-sm border border-rose-500/20">
                                                                {note}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm uppercase tracking-widest text-elyra-soft-gold/80 mb-3">Middle Notes</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {product.middleNotes.map((note) => (
                                                            <span key={note} className="px-4 py-2 bg-amber-500/10 text-amber-300 text-sm border border-amber-500/20">
                                                                {note}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm uppercase tracking-widest text-elyra-soft-gold/80 mb-3">Base Notes</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {product.baseNotes.map((note) => (
                                                            <span key={note} className="px-4 py-2 bg-stone-500/10 text-stone-300 text-sm border border-stone-500/20">
                                                                {note}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'details' && (
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div className="flex justify-between py-3 border-b border-white/5">
                                                    <span className="text-elyra-cream/50">Size</span>
                                                    <span className="text-elyra-cream">50ml / 1.7 fl oz</span>
                                                </div>
                                                <div className="flex justify-between py-3 border-b border-white/5">
                                                    <span className="text-elyra-cream/50">Concentration</span>
                                                    <span className="text-elyra-cream">Eau de Parfum</span>
                                                </div>
                                                <div className="flex justify-between py-3 border-b border-white/5">
                                                    <span className="text-elyra-cream/50">Longevity</span>
                                                    <span className="text-elyra-cream">{product.longevity}</span>
                                                </div>
                                                <div className="flex justify-between py-3 border-b border-white/5">
                                                    <span className="text-elyra-cream/50">Sillage</span>
                                                    <span className="text-elyra-cream">{product.sillage}</span>
                                                </div>
                                                <div className="flex justify-between py-3 border-b border-white/5">
                                                    <span className="text-elyra-cream/50">Scent Family</span>
                                                    <span className="text-elyra-cream">{product.scentFamily}</span>
                                                </div>
                                                <div className="flex justify-between py-3 border-b border-white/5">
                                                    <span className="text-elyra-cream/50">Gender</span>
                                                    <span className="text-elyra-cream">{product.gender}</span>
                                                </div>
                                            </div>
                                        )}

                                        {activeTab === 'occasions' && (
                                            <div className="space-y-6">
                                                <div>
                                                    <h4 className="text-sm uppercase tracking-widest text-elyra-cream/50 mb-3">Perfect For</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {product.occasion.map((occ) => (
                                                            <span key={occ} className="px-4 py-2 bg-white/5 text-elyra-cream/80 text-sm border border-white/10">
                                                                {occ}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm uppercase tracking-widest text-elyra-cream/50 mb-3">Best Seasons</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {product.season.map((ssn) => (
                                                            <span key={ssn} className="px-4 py-2 bg-white/5 text-elyra-cream/80 text-sm border border-white/10">
                                                                {ssn}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Similar Products */}
                {similarProducts.length > 0 && (
                    <section className="container mx-auto px-6 md:px-12 py-16 border-t border-white/10 mt-12">
                        <h2 className="text-2xl font-cinzel text-elyra-cream mb-8 text-center">
                            You May Also Like
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {similarProducts.map((p) => (
                                <Link
                                    key={p.id}
                                    to={`/product/${p.slug}`}
                                    className="group"
                                >
                                    <div className="aspect-square overflow-hidden border border-white/10 mb-4">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <p className="text-xs uppercase tracking-widest text-elyra-cream/50 mb-1">
                                        {p.scentFamily.split('–')[0]}
                                    </p>
                                    <h3 className="text-elyra-cream font-cinzel group-hover:text-elyra-soft-gold transition">
                                        {p.name}
                                    </h3>
                                    <p className="text-elyra-cream/70 text-sm mt-1">${p.price}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Back to Shop */}
                <div className="container mx-auto px-6 md:px-12 py-12 text-center">
                    <Link
                        to="/shop"
                        className="inline-block px-8 py-3 border border-white/20 text-elyra-cream text-xs uppercase tracking-[0.2em] hover:bg-white/5 transition"
                    >
                        ← Back to Shop
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;

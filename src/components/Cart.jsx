import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUBLISHABLE_KEY } from '../config/stripe';
import { products } from '../data/products';

const Cart = () => {
    const {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartItemsCount
    } = useCart();

    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const handleCheckout = async () => {
        setIsCheckingOut(true);
        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: cartItems.map(item => ({
                        id: item.id,
                        quantity: item.quantity,
                        // Note: Passing price from client is insecure for production validation
                        price: typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price,
                        name: item.name
                    })),
                }),
            });

            if (!response.ok) {
                let errorMessage = 'Network response was not ok';
                try {
                    const errorData = await response.json();
                    errorMessage = errorData.message || errorMessage;
                } catch (e) {
                    // Could not parse JSON, fallback to status text or default
                    errorMessage = response.statusText || errorMessage;
                }

                if (response.status === 404) {
                    errorMessage = "Checkout backend endpoint not found (/api/create-checkout-session).";
                }

                throw new Error(`[${response.status}] ${errorMessage}`);
            }

            const session = await response.json();

            // Redirect to Stripe Checkout using the session URL
            if (session.url) {
                window.location.href = session.url;
            } else {
                throw new Error('No checkout URL returned from server');
            }
        } catch (error) {
            console.error("Error during checkout:", error);
            alert(`Checkout Failed: ${error.message} (See console for details)`);
            setIsCheckingOut(false);
        }
    };

    const freeShippingThreshold = 100;
    const currentTotal = getCartTotal();
    const remainingForFreeShipping = freeShippingThreshold - currentTotal;
    const progressPercentage = Math.min((currentTotal / freeShippingThreshold) * 100, 100);

    // Smart Suggestions: Get 2 random products not in cart
    const suggestedProducts = useMemo(() => {
        const cartIds = new Set(cartItems.map(item => item.id));
        const available = products.filter(p => !cartIds.has(p.id));
        // Simple distinct random selection
        const shuffled = [...available].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 2);
    }, [cartItems]);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Cart Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-[#1a1816]/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex flex-col p-6 border-b border-white/10 bg-[#1a1816]/50">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <ShoppingBag className="text-elyra-soft-gold" size={20} strokeWidth={1.5} />
                                    <h2 className="text-xl font-cinzel text-elyra-cream tracking-wide">
                                        Your Cart
                                    </h2>
                                    <span className="bg-white/10 text-elyra-cream text-xs px-2 py-1 rounded-full font-inter">
                                        {getCartItemsCount()}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="text-elyra-cream/60 hover:text-elyra-soft-gold transition-colors p-2 hover:bg-white/5 rounded-full"
                                >
                                    <X size={20} strokeWidth={1.5} />
                                </button>
                            </div>

                            {/* Free Shipping Progress */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-xs text-elyra-cream/80 uppercase tracking-wider font-medium">
                                    {remainingForFreeShipping > 0 ? (
                                        <span>Add <strong>${remainingForFreeShipping.toFixed(2)}</strong> for Free Shipping</span>
                                    ) : (
                                        <span className="text-elyra-soft-gold flex items-center gap-1">✨ You've unlocked Free Shipping</span>
                                    )}
                                </div>
                                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progressPercentage}%` }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className={`h-full rounded-full ${remainingForFreeShipping <= 0 ? 'bg-elyra-soft-gold' : 'bg-elyra-cream/40'}`}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {cartItems.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center p-8">
                                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 animate-pulse">
                                        <ShoppingBag className="text-elyra-cream/30" size={32} strokeWidth={1} />
                                    </div>
                                    <p className="text-elyra-cream font-cinzel text-xl mb-2">Your cart is empty</p>
                                    <p className="text-elyra-cream/40 text-sm font-light mb-8 max-w-[200px]">
                                        Discover our collection of designer-inspired fragrances.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setIsCartOpen(false);
                                            window.location.href = '/shop';
                                        }}
                                        className="px-8 py-3 bg-white/5 border border-white/10 hover:border-elyra-soft-gold hover:text-elyra-soft-gold text-elyra-cream text-xs uppercase tracking-[0.2em] transition-all duration-300"
                                    >
                                        Discover Collection
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    {cartItems.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: 100 }}
                                            className="group flex gap-5"
                                        >
                                            {/* Product Image */}
                                            <div className="w-28 h-28 bg-elyra-earth/20 overflow-hidden flex-shrink-0 relative">
                                                {item.image ? (
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                ) : (
                                                    <div className={`w-full h-full bg-gradient-to-br ${item.color} opacity-20`} />
                                                )}
                                                <div className="absolute inset-0 border border-white/5 group-hover:border-white/20 transition-colors pointer-events-none" />
                                            </div>

                                            {/* Product Details */}
                                            <div className="flex-1 flex flex-col justify-between py-1">
                                                <div>
                                                    <div className="flex justify-between items-start gap-4">
                                                        <h3 className="font-cinzel text-elyra-cream text-lg leading-tight cursor-pointer hover:text-elyra-soft-gold transition-colors">
                                                            {item.name}
                                                        </h3>
                                                        <p className="text-elyra-cream font-medium">
                                                            ${((typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price) * item.quantity).toFixed(2)}
                                                        </p>
                                                    </div>
                                                    <p className="text-elyra-cream/50 text-xs italic mt-1 line-clamp-1">
                                                        {item.description}
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between mt-4">
                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center border border-white/10 rounded-sm bg-white/5">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="p-2 hover:bg-white/10 text-elyra-cream/60 hover:text-elyra-cream transition-colors"
                                                        >
                                                            <Minus size={12} strokeWidth={1.5} />
                                                        </button>
                                                        <span className="text-elyra-cream text-xs w-8 text-center font-medium">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="p-2 hover:bg-white/10 text-elyra-cream/60 hover:text-elyra-cream transition-colors"
                                                        >
                                                            <Plus size={12} strokeWidth={1.5} />
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-elyra-cream/40 hover:text-red-400 text-[10px] uppercase tracking-wider underline decoration-transparent hover:decoration-red-400 underline-offset-4 transition-all"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {/* Smart Suggestions - Upsell */}
                            {cartItems.length > 0 && suggestedProducts.length > 0 && (
                                <div className="mt-10 pt-6 border-t border-white/5">
                                    <h3 className="text-[10px] text-elyra-cream/40 uppercase tracking-[0.2em] mb-4">You Might Also Like</h3>
                                    <div className="space-y-3">
                                        {suggestedProducts.map(product => (
                                            <div key={product.id} className="group flex items-center justify-between p-2 hover:bg-white/5 rounded-sm transition-colors border border-transparent hover:border-white/5">
                                                <div className="flex items-center gap-3">
                                                    {/* Image */}
                                                    <div className="w-10 h-10 bg-elyra-earth/20 overflow-hidden flex-shrink-0">
                                                        {product.image && (
                                                            <img
                                                                src={product.image}
                                                                alt={product.name}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                            />
                                                        )}
                                                    </div>
                                                    {/* Info */}
                                                    <div>
                                                        <p className="text-elyra-cream font-cinzel text-sm leading-none mb-1 group-hover:text-elyra-soft-gold transition-colors">{product.name}</p>
                                                        <p className="text-elyra-cream/50 text-[10px]">${product.price}</p>
                                                    </div>
                                                </div>
                                                {/* Add Button */}
                                                <button
                                                    onClick={() => addToCart(product)}
                                                    className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-elyra-cream/60 hover:text-[#1a1816] hover:bg-elyra-soft-gold hover:border-elyra-soft-gold transition-all"
                                                    title="Add to Cart"
                                                >
                                                    <Plus size={12} strokeWidth={1.5} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="bg-[#1a1816] p-6 space-y-4 border-t border-white/10">
                                {/* Summary Rows */}
                                <div className="space-y-2 pb-4 border-b border-white/5">
                                    <div className="flex justify-between text-elyra-cream/60 text-sm">
                                        <span>Subtotal</span>
                                        <span>${currentTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-elyra-cream/60 text-sm">
                                        <span>Shipping</span>
                                        <span className={remainingForFreeShipping <= 0 ? "text-elyra-soft-gold" : ""}>
                                            {remainingForFreeShipping <= 0 ? "Free" : "Calculated at next step"}
                                        </span>
                                    </div>
                                </div>

                                {/* Total */}
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-elyra-cream font-cinzel text-lg">Total</span>
                                    <span className="text-2xl font-cinzel text-elyra-soft-gold">
                                        ${currentTotal.toFixed(2)}
                                    </span>
                                </div>

                                {/* Checkout Button */}
                                <div className="space-y-3 pt-2">
                                    <button
                                        onClick={handleCheckout}
                                        disabled={isCheckingOut}
                                        className="w-full py-4 bg-elyra-soft-gold text-[#1a1816] font-semibold uppercase tracking-[0.2em] text-xs hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 group relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                        <span className="relative z-10 flex items-center gap-2">
                                            {isCheckingOut ? (
                                                <>
                                                    <span className="w-4 h-4 border-2 border-[#1a1816]/30 border-t-[#1a1816] rounded-full animate-spin"></span>
                                                    Processing...
                                                </>
                                            ) : (
                                                <>
                                                    Secure Checkout
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                    </svg>
                                                </>
                                            )}
                                        </span>
                                    </button>
                                </div>

                                {/* Trust Badges */}
                                <div className="flex justify-center items-center gap-6 pt-2 opacity-50">
                                    <div className="flex items-center gap-1.5" title="Secure Payment">
                                        <svg className="w-3 h-3 text-elyra-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <span className="text-[10px] text-elyra-cream uppercase tracking-wider">Secure</span>
                                    </div>
                                    <div className="flex items-center gap-1.5" title="Fast Shipping">
                                        <svg className="w-3 h-3 text-elyra-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <span className="text-[10px] text-elyra-cream uppercase tracking-wider">Fast Ship</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Cart;

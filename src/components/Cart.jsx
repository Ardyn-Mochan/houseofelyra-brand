import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUBLISHABLE_KEY } from '../config/stripe';

const Cart = () => {
    const {
        cartItems,
        isCartOpen,
        setIsCartOpen,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        getCartItemsCount
    } = useCart();

    const handleCheckout = async () => {
        const stripe = await loadStripe(STRIPE_PUBLISHABLE_KEY);

        // TODO: Replace with your actual backend endpoint to create a checkout session
        // This is a placeholder structure
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
                // If 404, it means the backend route doesn't exist yet
                if (response.status === 404) {
                    alert("Checkout backend not connected yet. Refer to documentation to set up '/api/create-checkout-session'.");
                    return;
                }
                throw new Error('Network response was not ok');
            }

            const session = await response.json();

            // Redirect to Stripe Checkout
            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
                console.error(result.error.message);
                alert(result.error.message);
            }
        } catch (error) {
            console.error("Error during checkout:", error);
            alert("Unable to initiate checkout. Please ensure backend is running.");
        }
    };

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
                        className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-[#1a1816] shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="text-elyra-soft-gold" size={24} strokeWidth={1.5} />
                                <h2 className="text-2xl font-cinzel text-elyra-cream tracking-wide">
                                    Your Cart
                                </h2>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="text-elyra-cream/60 hover:text-elyra-cream transition-colors"
                            >
                                <X size={24} strokeWidth={1.5} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {cartItems.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <ShoppingBag className="text-elyra-cream/20 mb-4" size={64} strokeWidth={1} />
                                    <p className="text-elyra-cream/60 text-lg font-light">Your cart is empty</p>
                                    <p className="text-elyra-cream/40 text-sm mt-2">Add some fragrances to get started</p>
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
                                            className="flex gap-4 pb-6 border-b border-white/10"
                                        >
                                            {/* Product Image */}
                                            <div className="w-24 h-24 bg-elyra-earth/20 border border-white/5 overflow-hidden flex-shrink-0">
                                                {item.image ? (
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className={`w-full h-full bg-gradient-to-br ${item.color} opacity-20`} />
                                                )}
                                            </div>

                                            {/* Product Details */}
                                            <div className="flex-1 flex flex-col">
                                                <h3 className="font-cinzel text-elyra-cream text-lg mb-1">
                                                    {item.name}
                                                </h3>
                                                <p className="text-elyra-cream/50 text-xs italic mb-2">
                                                    {item.description}
                                                </p>
                                                <p className="text-elyra-cream/40 text-xs uppercase tracking-wider mb-3">
                                                    {item.scentFamily}
                                                </p>

                                                <div className="flex items-center justify-between mt-auto">
                                                    {/* Quantity Controls */}
                                                    <div className="flex items-center gap-3 border border-white/20 rounded-sm">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="p-2 hover:bg-white/5 transition-colors"
                                                        >
                                                            <Minus size={14} className="text-elyra-cream" strokeWidth={1.5} />
                                                        </button>
                                                        <span className="text-elyra-cream text-sm w-8 text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="p-2 hover:bg-white/5 transition-colors"
                                                        >
                                                            <Plus size={14} className="text-elyra-cream" strokeWidth={1.5} />
                                                        </button>
                                                    </div>

                                                    {/* Price */}
                                                    <div className="text-right">
                                                        <p className="text-elyra-cream font-medium">
                                                            ${((typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price) * item.quantity).toFixed(2)}
                                                        </p>
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="text-elyra-cream/40 hover:text-red-400 text-xs mt-1 transition-colors"
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="border-t border-white/10 p-6 space-y-4">
                                {/* Subtotal */}
                                <div className="flex justify-between items-center">
                                    <span className="text-elyra-cream/60 uppercase tracking-wider text-sm">
                                        Subtotal ({getCartItemsCount()} {getCartItemsCount() === 1 ? 'item' : 'items'})
                                    </span>
                                    <span className="text-2xl font-cinzel text-elyra-cream">
                                        ${getCartTotal().toFixed(2)}
                                    </span>
                                </div>

                                {/* Checkout Button */}
                                <button
                                    onClick={handleCheckout}
                                    className="w-full py-4 bg-elyra-soft-gold text-[#1a1816] font-medium uppercase tracking-[0.2em] text-sm hover:bg-elyra-soft-gold/90 transition-colors"
                                >
                                    Proceed to Checkout
                                </button>

                                {/* Continue Shopping */}
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="w-full py-3 border border-white/20 text-elyra-cream text-sm uppercase tracking-[0.2em] hover:bg-white/5 transition-colors"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Cart;

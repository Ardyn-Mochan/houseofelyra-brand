import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <div className="pt-32 pb-20 min-h-screen container mx-auto px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20"
            >
                {/* Left Column: Info */}
                <div className="space-y-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-cinzel text-elyra-soft-brown mb-6">Get in Touch</h1>
                        <p className="text-elyra-earth/70 font-light leading-relaxed text-lg">
                            Whether you have questions about our fragrances, need assistance with an order, or just want to share your scent journey, we are here to listen.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-elyra-soft-gold/10 rounded-full text-elyra-soft-brown">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h3 className="font-cinzel text-lg text-elyra-earth mb-1">Email Us</h3>
                                <p className="text-elyra-earth/60 font-light text-sm">Our team typically replies within 24 hours.</p>
                                <a href="mailto:houseofelyra@gmail.com" className="text-elyra-soft-brown hover:text-elyra-soft-gold transition-colors mt-2 block font-medium">
                                    houseofelyra@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-elyra-soft-gold/10 rounded-full text-elyra-soft-brown">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="font-cinzel text-lg text-elyra-earth mb-1">Based In</h3>
                                <p className="text-elyra-earth/60 font-light text-sm">
                                    Toronto, Ontario<br />
                                    Canada
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-elyra-taupe/20">
                        <h3 className="font-cinzel text-lg text-elyra-earth mb-6">Follow Our Journey</h3>
                        <div className="flex gap-6">
                            <a href="https://www.instagram.com/houseofelyra_/" target="_blank" rel="noopener noreferrer" className="p-3 border border-elyra-taupe/30 rounded-full text-elyra-earth/60 hover:text-elyra-soft-brown hover:border-elyra-soft-brown transition-all hover:scale-105">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61584381554924" target="_blank" rel="noopener noreferrer" className="p-3 border border-elyra-taupe/30 rounded-full text-elyra-earth/60 hover:text-elyra-soft-brown hover:border-elyra-soft-brown transition-all hover:scale-105">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-3 border border-elyra-taupe/30 rounded-full text-elyra-earth/60 hover:text-elyra-soft-brown hover:border-elyra-soft-brown transition-all hover:scale-105">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-white/50 backdrop-blur-sm p-8 md:p-12 rounded-sm border border-elyra-taupe/10 shadow-sm relative">
                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-elyra-soft-gold/20 to-transparent rounded-tr-sm pointer-events-none" />

                    {isSent ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                        >
                            <div className="w-20 h-20 bg-elyra-soft-gold/20 rounded-full flex items-center justify-center text-elyra-soft-brown">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-cinzel text-elyra-earth">Message Sent</h3>
                            <p className="text-elyra-earth/60 font-light max-w-xs">
                                Thank you for reaching out. We have received your message and will get back to you shortly.
                            </p>
                            <button
                                onClick={() => setIsSent(false)}
                                className="mt-8 text-elyra-soft-brown text-sm uppercase tracking-widest hover:text-elyra-soft-gold transition-colors underline underline-offset-4"
                            >
                                Send Another Message
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h3 className="font-cinzel text-2xl text-elyra-earth mb-8">Send a Message</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-elyra-earth/60 font-medium">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-elyra-cream border border-elyra-taupe/20 p-4 font-light text-elyra-earth focus:outline-none focus:border-elyra-soft-brown transition-colors"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-elyra-earth/60 font-medium">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-elyra-cream border border-elyra-taupe/20 p-4 font-light text-elyra-earth focus:outline-none focus:border-elyra-soft-brown transition-colors"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs uppercase tracking-widest text-elyra-earth/60 font-medium">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-elyra-cream border border-elyra-taupe/20 p-4 font-light text-elyra-earth focus:outline-none focus:border-elyra-soft-brown transition-colors"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest text-elyra-earth/60 font-medium">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-elyra-cream border border-elyra-taupe/20 p-4 font-light text-elyra-earth focus:outline-none focus:border-elyra-soft-brown transition-colors resize-none"
                                    placeholder="Write your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-elyra-soft-brown text-elyra-cream py-4 uppercase tracking-[0.2em] font-semibold hover:bg-elyra-earth transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-4 flex justify-center items-center gap-2 group"
                            >
                                {isSubmitting ? 'Sending...' : (
                                    <>
                                        Send Message
                                        <ArrowLongRight className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

const ArrowLongRight = ({ className }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default Contact;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckSquare, BookOpen, Target, Heart, Wind, ArrowRight, Play } from 'lucide-react';

const ElyraApp = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isJoined, setIsJoined] = useState(false);

    const handleJoinWaitlist = (e) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsJoined(true);
            setEmail('');
        }, 1500);
    };

    const features = [
        {
            icon: Target,
            title: "Build Habits",
            description: "Track daily rituals and build consistency with our intuitive habit streak system."
        },
        {
            icon: Sparkles,
            title: "Manifest Goals",
            description: "Visualize your future with digital vision boards and guided scripting exercises."
        },
        {
            icon: BookOpen,
            title: "Reflective Journaling",
            description: "Document your journey with mood tracking and prompted daily reflections."
        },
        {
            icon: Heart,
            title: "Holistic Wellness",
            description: "Monitor your cycle, symptoms, and energy levels in one cohesive view."
        },
        {
            icon: CheckSquare,
            title: "Mindful Productivity",
            description: "Organize tasks with intention. Balance efficiency with mental well-being."
        },
        {
            icon: Wind,
            title: "Breathe & Meditate",
            description: "Find your center with built-in breathwork and timer-based meditation."
        }
    ];

    return (
        <div className="pt-20 min-h-screen bg-[#1a1816]">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1a1816] via-[#2a2620] to-[#1a1816]" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]" />

                <div className="container mx-auto px-8 relative z-10 flex flex-col md:flex-row items-center gap-20">
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-elyra-soft-gold text-sm uppercase tracking-[0.2em] border border-elyra-soft-gold/30 px-3 py-1 rounded-full">Coming Soon</span>
                            <h1 className="text-5xl md:text-7xl font-cinzel text-elyra-cream mt-6 leading-tight">
                                Wellness, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-teal-300">Reimagined.</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-elyra-cream/70 text-lg font-light leading-relaxed max-w-xl"
                        >
                            Elyra represents a new era of digital well-being. Seamlessly blend productivity with mindfulness, tracking your habits, mood, and manifestations in one beautiful space.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex gap-4"
                        >
                            <a href="#waitlist" className="bg-elyra-soft-gold text-[#1a1816] px-8 py-4 uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300">
                                Join Waitlist
                            </a>
                            <button className="flex items-center gap-3 border border-white/20 text-elyra-cream px-8 py-4 uppercase tracking-[0.2em] font-semibold hover:bg-white/5 transition-colors duration-300 group">
                                <Play size={16} className="group-hover:fill-current" />
                                <span>Watch Video</span>
                            </button>
                        </motion.div>
                    </div>

                    {/* App Mockup with Real Image */}
                    <div className="flex-1 relative flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative z-10 w-[320px] rounded-[40px] border-[12px] border-[#2a2620] shadow-2xl overflow-hidden bg-[#1a1816]"
                        >
                            <img
                                src="/images/app-preview.png"
                                alt="Elyra App Interface"
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>

                        {/* Glow behind phone */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-elyra-soft-gold/20 rounded-full blur-[80px] -z-10" />
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-32 bg-[#161412]">
                <div className="container mx-auto px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-cinzel text-elyra-cream mb-4">The Pillars of Balance</h2>
                        <div className="w-24 h-px bg-elyra-soft-gold mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
                            >
                                <feature.icon className="w-10 h-10 text-elyra-soft-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
                                <h3 className="text-xl font-cinzel text-elyra-cream mb-3">{feature.title}</h3>
                                <p className="text-elyra-cream/60 font-light leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA / Waitlist Form */}
            <section id="waitlist" className="py-32 bg-gradient-to-t from-[#1a1816] to-[#2a2620] text-center">
                <div className="container mx-auto px-8 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-cinzel text-elyra-cream mb-8">Begin Your Journey</h2>
                    <p className="text-elyra-cream/70 text-lg font-light mb-12">
                        Be among the first to experience Elyra. Sign up for early access and receive a complimentary month of Premium upon launch.
                    </p>

                    {isJoined ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-elyra-soft-gold/10 border border-elyra-soft-gold/30 p-8 rounded-sm inline-block"
                        >
                            <div className="flex flex-col items-center gap-4">
                                <div className="p-3 bg-elyra-soft-gold rounded-full text-[#1a1816]">
                                    <Sparkles size={24} />
                                </div>
                                <h3 className="text-xl font-cinzel text-elyra-soft-gold">You are on the list.</h3>
                                <p className="text-elyra-cream/60 text-sm">Review your inbox for a confirmation.</p>
                            </div>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleJoinWaitlist} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto relative">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isSubmitting}
                                placeholder="Enter your email"
                                className="flex-1 bg-white/5 border border-white/10 px-6 py-4 text-elyra-cream focus:outline-none focus:border-elyra-soft-gold transition-colors disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-elyra-soft-gold text-[#1a1816] px-8 py-4 uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                            >
                                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ElyraApp;

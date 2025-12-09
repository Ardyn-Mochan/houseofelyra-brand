import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckSquare, BookOpen, Target, Heart, Wind, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ElyraApp = () => {
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
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
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
                            <button className="bg-elyra-soft-gold text-[#1a1816] px-8 py-4 uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300">
                                Join Waitlist
                            </button>
                            <button className="border border-white/20 text-elyra-cream px-8 py-4 uppercase tracking-[0.2em] font-semibold hover:bg-white/5 transition-colors duration-300">
                                Watch Video
                            </button>
                        </motion.div>
                    </div>

                    {/* App Mockup (CSS only for now) */}
                    <div className="flex-1 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative z-10 mx-auto w-[300px] h-[600px] bg-[#1a1816] rounded-[40px] border-[8px] border-[#2a2620] shadow-2xl overflow-hidden"
                        >
                            {/* App Interface Mockup */}
                            <div className="w-full h-full bg-[#faf9f6] relative flex flex-col">
                                {/* Status Bar */}
                                <div className="h-8 w-full bg-white flex items-center justify-between px-6">
                                    <div className="text-[10px] font-bold text-gray-800">9:41</div>
                                    <div className="flex gap-1">
                                        <div className="w-4 h-1.5 bg-gray-800 rounded-sm"></div>
                                        <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Header */}
                                <div className="p-6">
                                    <h3 className="text-gray-400 text-xs uppercase tracking-widest">Monday, 24 Oct</h3>
                                    <h2 className="text-2xl font-serif text-gray-800 mt-1">Good Morning,<br />Sarah</h2>
                                </div>

                                {/* Cards */}
                                <div className="px-6 space-y-4">
                                    {/* Intention Card */}
                                    <div className="bg-purple-100 p-4 rounded-2xl">
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="p-2 bg-white/50 rounded-full">
                                                <Sparkles size={14} className="text-purple-600" />
                                            </div>
                                            <span className="text-[10px] text-purple-600 font-bold uppercase">Daily Intention</span>
                                        </div>
                                        <p className="text-purple-900 font-medium text-sm">"I choose peace over perfection today."</p>
                                    </div>

                                    {/* Habits Row */}
                                    <div className="flex gap-4 overflow-hidden">
                                        <div className="bg-teal-100 p-4 rounded-xl flex-1 flex flex-col items-center justify-center gap-2 aspect-square">
                                            <Wind size={20} className="text-teal-600" />
                                            <span className="text-[10px] text-teal-700">Meditate</span>
                                        </div>
                                        <div className="bg-pink-100 p-4 rounded-xl flex-1 flex flex-col items-center justify-center gap-2 aspect-square">
                                            <Heart size={20} className="text-pink-600" />
                                            <span className="text-[10px] text-pink-700">Journal</span>
                                        </div>
                                        <div className="bg-blue-100 p-4 rounded-xl flex-1 flex flex-col items-center justify-center gap-2 aspect-square">
                                            <Target size={20} className="text-blue-600" />
                                            <span className="text-[10px] text-blue-700">Hydrate</span>
                                        </div>
                                    </div>

                                    {/* Task List */}
                                    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Tasks</h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full border-2 border-purple-200"></div>
                                                <span className="text-sm text-gray-600">Morning Yoga</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full border-2 border-purple-200 bg-purple-200"></div>
                                                <span className="text-sm text-gray-400 line-through">Read 10 pages</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Nav */}
                                <div className="mt-auto bg-white border-t border-gray-100 p-4 flex justify-around">
                                    <div className="text-purple-500"><CheckSquare size={20} /></div>
                                    <div className="text-gray-300"><BookOpen size={20} /></div>
                                    <div className="text-gray-300"><Target size={20} /></div>
                                </div>
                            </div>
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

            {/* CTA */}
            <section className="py-32 bg-gradient-to-t from-[#1a1816] to-[#2a2620] text-center">
                <div className="container mx-auto px-8 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-cinzel text-elyra-cream mb-8">Begin Your Journey</h2>
                    <p className="text-elyra-cream/70 text-lg font-light mb-12">
                        Be among the first to experience Elyra. Sign up for early access and receive a complimentary month of Premium upon launch.
                    </p>
                    <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-white/5 border border-white/10 px-6 py-4 text-elyra-cream focus:outline-none focus:border-elyra-soft-gold transition-colors"
                        />
                        <button className="bg-elyra-soft-gold text-[#1a1816] px-8 py-4 uppercase tracking-[0.2em] font-semibold hover:bg-white transition-colors duration-300">
                            Join
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ElyraApp;

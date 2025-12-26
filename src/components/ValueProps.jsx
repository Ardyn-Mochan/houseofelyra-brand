import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Gift, Truck, Shield, Sparkles, Heart } from 'lucide-react';

const ValueProps = () => {
    const features = [
        {
            icon: Droplets,
            title: "30% Oil Concentration",
            description: "Extrait de Parfum purity for long-lasting, skin-hugging scent that evolves beautifully throughout the day.",
            accent: "from-amber-400 to-amber-600"
        },
        {
            icon: Gift,
            title: "Luxury Presentation",
            description: "Each bottle arrives in elegant packaging, ready to gift or treasure as your own personal indulgence.",
            accent: "from-rose-400 to-rose-600"
        },
        {
            icon: Truck,
            title: "Free Shipping",
            description: "Complimentary delivery across Canada and the United States on orders above $100 CAD.",
            accent: "from-cyan-400 to-cyan-600"
        },
        {
            icon: Shield,
            title: "Quality Assured",
            description: "Crafted with premium ingredients and rigorous testing to ensure exceptional fragrance performance.",
            accent: "from-emerald-400 to-emerald-600"
        },
        {
            icon: Sparkles,
            title: "Designer-Inspired",
            description: "Experience iconic scent profiles reimagined with our signature touch at accessible prices.",
            accent: "from-purple-400 to-purple-600"
        },
        {
            icon: Heart,
            title: "Satisfaction Promise",
            description: "Your happiness matters. We stand behind every fragrance with our commitment to excellence.",
            accent: "from-pink-400 to-pink-600"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    return (
        <section className="py-24 md:py-32 bg-[#1a1816] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-elyra-soft-gold/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[120px]" />
            </div>

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(212, 196, 168, 0.5) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(212, 196, 168, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }}
            />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <p className="text-elyra-soft-gold text-xs tracking-[0.3em] uppercase mb-4 font-light">
                        The Elyra Difference
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel text-elyra-cream mb-6">
                        Why Choose <span className="italic text-elyra-soft-gold">Elyra</span>
                    </h2>
                    <p className="font-cormorant text-elyra-cream/70 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                        Every detail is intentional. From formulation to delivery, we craft experiences that transcend ordinary fragrance.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative p-8 border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-elyra-soft-gold/30 hover:bg-white/[0.04] transition-all duration-500"
                        >
                            {/* Hover Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

                            {/* Icon */}
                            <div className="relative mb-6">
                                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.accent} p-[1px]`}>
                                    <div className="w-full h-full rounded-full bg-[#1a1816] flex items-center justify-center">
                                        <feature.icon
                                            size={22}
                                            className="text-elyra-soft-gold group-hover:scale-110 transition-transform duration-500"
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="font-cinzel text-elyra-cream text-lg mb-3 group-hover:text-elyra-soft-gold transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="font-light text-elyra-cream/60 text-sm leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Bottom Accent Line */}
                            <div className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-elyra-soft-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-16"
                >
                    <p className="text-elyra-cream/50 text-sm font-light">
                        <span className="text-elyra-soft-gold">$39.99</span> for luxury that lasts
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ValueProps;

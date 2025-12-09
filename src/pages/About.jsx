import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Sparkles, Scale, HeartHandshake } from 'lucide-react';

const About = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    return (
        <div className="bg-[#1a1816] min-h-screen">

            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    {/* Using an existing dark abstract image for atmosphere */}
                    <img
                        src="/images/ember-royale.jpg"
                        alt="House of Elyra Atmosphere"
                        className="w-full h-full object-cover opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1816] via-[#1a1816]/50 to-transparent" />
                </div>

                <div className="container mx-auto px-8 relative z-10 text-center">
                    <motion.p
                        initial={{ opacity: 0, letterSpacing: '0.5em' }}
                        animate={{ opacity: 1, letterSpacing: '0.3em' }}
                        transition={{ duration: 1.5 }}
                        className="text-elyra-soft-gold text-xs md:text-sm uppercase mb-6 font-light"
                    >
                        Established 2025 • Toronto
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-5xl md:text-8xl font-cinzel text-elyra-cream mb-8"
                    >
                        THE ESSENCE <br /> OF ETERNITY
                    </motion.h1>
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 100 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-px bg-elyra-soft-gold mx-auto"
                    />
                </div>
            </div>

            {/* The Origin Story */}
            <section className="py-32 container mx-auto px-8">
                <div className="flex flex-col md:flex-row gap-20 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="md:w-1/2"
                    >
                        <h2 className="text-4xl font-cinzel text-elyra-cream mb-8">Our Origin</h2>
                        <div className="space-y-6 text-elyra-cream/70 font-cormorant text-xl leading-relaxed">
                            <p>
                                House of Elyra was born from a simple yet powerful realization: luxury shouldn't be a gatekeeper. For too long, the world of high-end perfumery has been defined by exclusive price tags rather than exclusive quality.
                            </p>
                            <p>
                                Based in Toronto, we set out to dismantle this outdated narrative. We believe that a signature scent is not a status symbol, but an extension of your soul—a way to capture memories, emotions, and dreams in a bottle.
                            </p>
                            <p className="text-elyra-soft-gold italic">
                                "We don't just sell perfume. We sell the feeling of being your highest self."
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="md:w-1/2 relative"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="aspect-[4/5] overflow-hidden border border-white/10 relative group">
                            <img
                                src="/elyra-symbol.png"
                                alt="Elyra Sigil"
                                className="w-full h-full object-contain p-20 opacity-80 group-hover:scale-105 transition-transform duration-1000"
                                style={{ filter: "drop-shadow(0 0 30px rgba(180, 160, 130, 0.4))" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1816] to-transparent opacity-60" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* The Philosophy Grid */}
            <section className="py-32 bg-white/[0.02] border-y border-white/5">
                <div className="container mx-auto px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-cinzel text-elyra-cream mb-4">Our Philosophy</h2>
                        <div className="w-24 h-px bg-elyra-soft-gold mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Droplets,
                                title: "Extrait Strength",
                                desc: "We formulate at 25-30% concentration. This means our scents don't just last—they evolve with you throughout the day."
                            },
                            {
                                icon: Scale,
                                title: "Honest Pricing",
                                desc: "No celebrity endorsements. No crystal bottles. You pay for the juice, not the marketing hype."
                            },
                            {
                                icon: Sparkles,
                                title: "Small Batch",
                                desc: "Every bottle is hand-poured in Toronto. This ensures meticulous quality control and artistic integrity in every drop."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                transition={{ delay: i * 0.2 }}
                                className="text-center group"
                            >
                                <div className="w-20 h-20 mx-auto bg-elyra-soft-gold/10 rounded-full flex items-center justify-center text-elyra-soft-gold mb-6 group-hover:bg-elyra-soft-gold group-hover:text-[#1a1816] transition-colors duration-500">
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-cinzel text-elyra-cream mb-4">{item.title}</h3>
                                <p className="text-elyra-cream/60 leading-relaxed font-light">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder's Note */}
            <section className="py-40 container mx-auto px-8 text-center bg-[url('/images/mystic-oud.jpg')] bg-cover bg-fixed relative">
                <div className="absolute inset-0 bg-[#1a1816]/90" /> {/* Heavy overlay */}

                <div className="relative z-10 max-w-4xl mx-auto">
                    <HeartHandshake className="w-12 h-12 text-elyra-soft-gold mx-auto mb-8 opacity-80" />
                    <h2 className="text-3xl md:text-5xl font-cinzel text-elyra-cream mb-10 leading-tight">
                        "Perfume is the most intense form of memory."
                    </h2>
                    <p className="text-elyra-cream/80 font-cormorant text-2xl italic mb-12">
                        — Jean-Paul Guerlain
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-elyra-cream/90 text-sm tracking-[0.2em] uppercase">Founded by</p>
                        <h3 className="text-4xl font-cinzel text-elyra-soft-gold">Mochan</h3>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;

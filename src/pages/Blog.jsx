import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
    // JSON-LD for Blog
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "House of Elyra Fragrance Journal",
        "description": "Expert insights on perfume layering, ingredient history, and the science of scent.",
        "url": "https://www.houseofelyra.com/blog",
        "blogPost": blogPosts.map(post => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.date, // Note: In a real app, format this to ISO 8601
            "author": {
                "@type": "Person",
                "name": post.author
            },
            "url": `https://www.houseofelyra.com/blog/${post.slug}`
        }))
    };

    return (
        <>
            <Helmet>
                <title>The Scent Journal – Perfume Tips, History & Trends | House of Elyra Blog</title>
                <meta name="description" content="Dive into the world of perfumery with House of Elyra. Discover articles on fragrance layering, the history of oud, scent psychology, and the latest trends in niche and designer-inspired scents." />
                <meta name="keywords" content="perfume blog, fragrance tips, scent layering, history of oud, perfume guide, niche fragrance blog, House of Elyra journal" />
                <link rel="canonical" href="https://www.houseofelyra.com/blog" />

                {/* Open Graph */}
                <meta property="og:title" content="The Scent Journal – House of Elyra" />
                <meta property="og:description" content="Expert insights on perfume layering, ingredient history, and the science of scent." />
                <meta property="og:url" content="https://www.houseofelyra.com/blog" />
                <meta property="og:type" content="blog" />

                <script type="application/ld+json">
                    {JSON.stringify(blogSchema)}
                </script>
            </Helmet>

            <div className="bg-[#1a1816] min-h-screen pt-32 pb-24">
                <div className="container mx-auto px-6 md:px-12">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20 max-w-3xl mx-auto"
                    >
                        <p className="text-elyra-soft-gold text-xs tracking-[0.3em] uppercase mb-4 font-light">
                            The Journal
                        </p>
                        <h1 className="text-4xl md:text-6xl font-cinzel text-elyra-cream mb-8 leading-tight">
                            Stories in Scent
                        </h1>
                        <p className="text-elyra-cream/70 font-cormorant text-xl leading-relaxed">
                            Explore the artistry, history, and science behind the fragrances you love.
                            From mastering the art of layering to uncovering the secrets of rare ingredients.
                        </p>
                    </motion.div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="group flex flex-col h-full"
                            >
                                {/* Image */}
                                <div className="aspect-[3/2] overflow-hidden border border-white/5 mb-6 relative">
                                    <div className="absolute inset-0 bg-elyra-earth/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    {/* Placeholder for actual image if not available, using a gradient */}
                                    <div className={`w-full h-full bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-700`} />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-elyra-soft-gold uppercase tracking-widest mb-3">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-elyra-soft-gold/50" />
                                        <span>{post.tags[0]}</span>
                                    </div>

                                    <h2 className="text-2xl font-cinzel text-elyra-cream mb-4 group-hover:text-elyra-soft-gold transition-colors duration-300">
                                        {post.title}
                                    </h2>

                                    <p className="text-elyra-cream/60 font-cormorant text-lg leading-relaxed mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-elyra-cream hover:text-elyra-soft-gold transition-colors duration-300 mt-auto"
                                    >
                                        Read Article
                                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Newsletter CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-32 border-t border-white/10 pt-20 text-center max-w-2xl mx-auto"
                    >
                        <h3 className="text-2xl md:text-3xl font-cinzel text-elyra-cream mb-6">
                            Stay Inspired
                        </h3>
                        <p className="text-elyra-cream/60 font-cormorant text-lg mb-8">
                            Join our community to receive the latest journal entries, exclusive offers, and scent styling tips directly to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow bg-white/5 border border-white/10 px-6 py-3 text-elyra-cream placeholder:text-elyra-cream/30 focus:outline-none focus:border-elyra-soft-gold transition-colors"
                            />
                            <button className="bg-elyra-soft-gold text-[#1a1816] px-8 py-3 uppercase tracking-[0.2em] text-xs font-semibold hover:bg-white transition-colors duration-300">
                                Subscribe
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </>
    );
};

export default Blog;

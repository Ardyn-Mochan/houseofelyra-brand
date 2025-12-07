import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="bg-[#1a1816] min-h-screen pt-32 pb-24 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-cinzel text-elyra-cream mb-4">Article Not Found</h1>
                    <Link to="/blog" className="text-elyra-soft-gold hover:underline">
                        ← Back to Journal
                    </Link>
                </div>
            </div>
        );
    }

    // JSON-LD for BlogPosting
    const postSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "url": `https://www.houseofelyra.com/blog/${post.slug}`,
        "publisher": {
            "@type": "Organization",
            "name": "House of Elyra",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.houseofelyra.com/logo.png"
            }
        }
    };

    return (
        <>
            <Helmet>
                <title>{post.title} | House of Elyra Journal</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={`https://www.houseofelyra.com/blog/${post.slug}`} />

                {/* Open Graph */}
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:url" content={`https://www.houseofelyra.com/blog/${post.slug}`} />
                <meta property="og:type" content="article" />

                <script type="application/ld+json">
                    {JSON.stringify(postSchema)}
                </script>
            </Helmet>

            <div className="bg-[#1a1816] min-h-screen pt-32 pb-24">
                <article className="container mx-auto px-6 md:px-12 max-w-4xl">

                    {/* Back Button */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-elyra-soft-gold hover:text-elyra-cream transition-colors mb-8 text-sm tracking-wider uppercase"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Journal
                    </Link>

                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-4 text-xs text-elyra-soft-gold uppercase tracking-widest mb-6">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 rounded-full bg-elyra-soft-gold/50" />
                            <span>{post.author}</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel text-elyra-cream mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <p className="text-xl text-elyra-cream/70 font-cormorant leading-relaxed">
                            {post.excerpt}
                        </p>
                    </motion.header>

                    {/* Featured Image */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="aspect-[16/9] mb-16 overflow-hidden border border-white/10"
                    >
                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="prose prose-invert prose-lg max-w-none"
                    >
                        <div
                            className="text-elyra-cream/80 font-cormorant text-lg leading-loose space-y-6"
                            style={{
                                whiteSpace: 'pre-line'
                            }}
                        >
                            {post.content}
                        </div>
                    </motion.div>

                    {/* Divider */}
                    <div className="my-16 border-t border-white/10" />

                    {/* Author Card */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="bg-white/5 border border-white/10 p-8 rounded-sm"
                    >
                        <p className="text-xs text-elyra-soft-gold uppercase tracking-widest mb-3">Written By</p>
                        <h3 className="text-2xl font-cinzel text-elyra-cream mb-2">{post.author}</h3>
                        <p className="text-elyra-cream/60 font-cormorant">
                            Expert insights from the House of Elyra fragrance team.
                        </p>
                    </motion.div>

                    {/* Related Articles */}
                    <div className="mt-20">
                        <h3 className="text-2xl font-cinzel text-elyra-cream mb-8">Continue Reading</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {blogPosts
                                .filter(p => p.id !== post.id)
                                .slice(0, 2)
                                .map((relatedPost) => (
                                    <Link
                                        key={relatedPost.id}
                                        to={`/blog/${relatedPost.slug}`}
                                        className="group border border-white/10 p-6 hover:border-elyra-soft-gold/50 transition-all duration-300"
                                    >
                                        <p className="text-xs text-elyra-soft-gold uppercase tracking-wider mb-3">
                                            {relatedPost.date}
                                        </p>
                                        <h4 className="text-lg font-cinzel text-elyra-cream group-hover:text-elyra-soft-gold transition-colors mb-3">
                                            {relatedPost.title}
                                        </h4>
                                        <p className="text-elyra-cream/60 text-sm font-cormorant line-clamp-2">
                                            {relatedPost.excerpt}
                                        </p>
                                    </Link>
                                ))}
                        </div>
                    </div>

                </article>
            </div>
        </>
    );
};

export default BlogPost;

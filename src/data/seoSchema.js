// SEO Schema Data for House of Elyra
// Structured data for search engines and AI retrieval

export const generateProductSchema = (product) => ({
    "@type": "Product",
    "name": product.name,
    "brand": {
        "@type": "Brand",
        "name": "House of Elyra"
    },
    "category": "Fragrance",
    "description": `${product.name} - ${product.description}. ${product.scent}. A luxury-inspired, long-lasting perfume crafted by House of Elyra.`,
    "sku": `ELYRA-${product.id.toString().padStart(3, '0')}`,
    "image": `https://www.houseofelyra.com${product.image.startsWith('/') ? '' : '/'}${product.image.replace('?v=1', '')}`,
    "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "39.99",
        "availability": "https://schema.org/InStock",
        "url": `https://www.houseofelyra.com/shop/${product.name.toLowerCase().replace(/\s+/g, '-')}`,
        "seller": {
            "@type": "Organization",
            "name": "House of Elyra"
        }
    },
    "additionalProperty": [
        {
            "@type": "PropertyValue",
            "name": "Scent Family",
            "value": product.scent.replace('Scent Family: ', '')
        },
        {
            "@type": "PropertyValue",
            "name": "Inspiration",
            "value": product.description.replace('Inspired by: ', '')
        }
    ],
    "keywords": "designer-inspired perfume, niche fragrance, long-lasting, luxury scent, affordable luxury perfume"
});

export const allProducts = [
    { id: 1, name: "Nebula Gold", description: "Inspired by: Baccarat Rouge 540", scent: "Scent Family: Amber–Woody", image: "/nebula-gold.jpg" },
    { id: 2, name: "Helios Peak", description: "Inspired by: Creed Aventus", scent: "Scent Family: Fruity–Woody–Chypre", image: "/helios-peak.jpg" },
    { id: 3, name: "Solstice Aura", description: "Inspired by: Louis Vuitton Imagination", scent: "Scent Family: Citrus–Aromatic", image: "/solstice-aura.jpg" },
    { id: 4, name: "Frost Zenith", description: "Inspired by: Creed Silver Mountain Water", scent: "Scent Family: Fresh–Aromatic–Musky", image: "/images/frost-zenith.jpg" },
    { id: 5, name: "Lunar Silk", description: "Inspired by: YSL Libre Intense", scent: "Scent Family: Amber–Floral", image: "/images/lunar-silk.jpg" },
    { id: 6, name: "Ember Pulse", description: "Inspired by: Stronger With You Intensely", scent: "Scent Family: Amber–Vanilla–Spicy", image: "/ember-pulse.jpg" },
    { id: 7, name: "Eternal Ember", description: "Inspired by: Parfums de Marly Althair", scent: "Scent Family: Amber–Vanilla", image: "/images/eternal-ember.jpg" },
    { id: 8, name: "Shadow Rift", description: "Inspired by: Tom Ford Oud Wood", scent: "Scent Family: Woody–Amber", image: "/images/shadow-rift.jpg" },
    { id: 9, name: "Starlit Femme", description: "Inspired by: Carolina Herrera Good Girl", scent: "Scent Family: Amber–Floral–Gourmand", image: "/images/starlit-femme.jpg" },
    { id: 10, name: "Celestial Rose", description: "Inspired by: Chanel Coco Mademoiselle", scent: "Scent Family: Floral–Oriental", image: "/images/celestial-rose.jpg" },
    { id: 11, name: "Solar Prism", description: "Inspired by: Nishane Hacivat", scent: "Scent Family: Fruity–Woody–Fresh", image: "/images/solar-prism.jpg" },
    { id: 12, name: "Volcanic Crown", description: "Inspired by: SHL 777 God of Fire", scent: "Scent Family: Amber–Fruity–Spicy", image: "/images/volcanic-crown.jpg" },
    { id: 13, name: "Nightforge", description: "Inspired by: Dior Sauvage Elixir", scent: "Scent Family: Fougere–Spicy–Amber", image: "/images/nightforge.jpg" },
    { id: 14, name: "Tidal Origin", description: "Inspired by: Acqua di Gio Parfum", scent: "Scent Family: Fresh–Marine–Aromatic", image: "/images/tidal-origin.jpg" },
    { id: 15, name: "Cosmic Noir", description: "Inspired by: Bleu de Chanel", scent: "Scent Family: Woody–Aromatic", image: "/images/cosmic-noir.jpg" },
    { id: 16, name: "Aegean Surge", description: "Inspired by: Versace Dylan Blue", scent: "Scent Family: Fresh–Aromatic–Woody", image: "/images/aegean-surge.jpg" },
    { id: 17, name: "Azure Pulse", description: "Inspired by: D&G Light Blue Intense", scent: "Scent Family: Fresh–Citrus–Marine", image: "/images/azure-pulse.jpg" },
    { id: 18, name: "Ember Royale", description: "Inspired by: Paco Rabanne 1 Million Elixir", scent: "Scent Family: Amber–Spicy–Woody", image: "/images/ember-royale.jpg" },
    { id: 19, name: "Serpent Star", description: "Inspired by: Gucci Guilty Pour Homme", scent: "Scent Family: Woody–Aromatic", image: "/images/serpent-star.jpg" },
    { id: 20, name: "Lunar Bloom", description: "Inspired by: Gucci Bloom", scent: "Scent Family: Floral–White–Creamy", image: "/images/lunar-bloom.jpg" },
    { id: 21, name: "Starborn Drift", description: "Inspired by: Dior Sauvage EDP", scent: "Scent Family: Fresh–Spicy–Aromatic", image: "/images/starborn-drift.jpg" },
    { id: 22, name: "Ember Noir", description: "Inspired by: Tom Ford Noir Extreme", scent: "Scent Family: Amber–Gourmand–Spicy", image: "/images/ember-noir.jpg" },
    { id: 23, name: "Solar Noir", description: "Inspired by: Tom Ford Black Orchid", scent: "Scent Family: Floral–Amber–Spicy", image: "/images/solar-noir.jpg" },
    { id: 24, name: "Aether Santal", description: "Inspired by: Le Labo Santal 33", scent: "Scent Family: Woody–Leather–Aromatic", image: "/images/aether-santal.jpg" },
    { id: 25, name: "Blossom Ray", description: "Inspired by: Marc Jacobs Daisy", scent: "Scent Family: Floral–Fruity–Fresh", image: "/images/blossom-ray.jpg" },
    { id: 26, name: "Midnight Petal", description: "Inspired by: Marc Jacobs Decadence", scent: "Scent Family: Amber–Floral–Woody", image: "/images/midnight-petal.jpg" },
    { id: 27, name: "Aegean Star", description: "Inspired by: Versace Pour Homme", scent: "Scent Family: Citrus–Aromatic", image: "/images/aegean-star.jpg" },
    { id: 28, name: "Radiant Eclipse", description: "Inspired by: Paco Rabanne Invictus", scent: "Scent Family: Fresh–Woody–Marine", image: "/images/radiant-eclipse.jpg" },
    { id: 29, name: "Aurora Bloom", description: "Inspired by: Miss Dior (EDP)", scent: "Scent Family: Floral–Fresh–Soft", image: "/images/aurora-bloom.jpg" },
    { id: 30, name: "Stellar Velvet", description: "Inspired by: Chanel Chance Eau Tendre", scent: "Scent Family: Floral–Fruity–Fresh", image: "/images/stellar-velvet.jpg" },
    { id: 31, name: "Rose Nebula", description: "Inspired by: Lancôme La Vie Est Belle", scent: "Scent Family: Floral–Gourmand–Sweet", image: "/images/rose-nebula.jpg" },
    { id: 32, name: "Midnight Aura", description: "Inspired by: YSL Black Opium", scent: "Scent Family: Gourmand–Amber–Floral", image: "/images/midnight-aura.jpg" },
    { id: 33, name: "Petal Sphere", description: "Inspired by: Chloe Nomade", scent: "Scent Family: Floral–Fruity–Woody", image: "/images/petal-sphere.jpg" },
    { id: 34, name: "Cloud Meadow", description: "Inspired by: Jo Malone English Pear & Freesia", scent: "Scent Family: Fresh–Fruity–Floral", image: "/images/cloud-meadow.jpg" },
    { id: 35, name: "Iris Halo", description: "Inspired by: Le Labo Iris 39", scent: "Scent Family: Floral–Woody–Powdery", image: "/images/iris-halo.jpg" },
    { id: 36, name: "Amber Radiance", description: "Inspired by: Kilian Angel Share", scent: "Scent Family: Gourmand–Amber–Spicy", image: "/images/amber-radiance.jpg" },
    { id: 37, name: "Fire Blossom", description: "Inspired by: Viktor&Rolf Flowerbomb", scent: "Scent Family: Floral–Amber–Sweet", image: "/images/fire-blossom.jpg" },
    { id: 38, name: "Ember Strike", description: "Inspired by: Paco Rabanne Phantom", scent: "Scent Family: Woody–Aromatic–Creamy", image: "/images/ember-strike.jpg" },
    { id: 39, name: "Oceanic Halo", description: "Inspired by: Replica Lazy Sunday Morning", scent: "Scent Family: Fresh–Clean–Soft Floral", image: "/images/oceanic-halo.jpg" },
    { id: 40, name: "Nightfall Ember", description: "Inspired by: Replica Jazz Club", scent: "Scent Family: Warm–Spicy–Woody", image: "/images/nightfall-ember.jpg" },
    { id: 41, name: "Nightfall Rose", description: "Inspired by: Givenchy L'Interdit (EDP)", scent: "Scent Family: Floral–Amber–Woody", image: "/images/nightfall-rose.jpg" },
    { id: 42, name: "Flora Nova", description: "Inspired by: Balenciaga Florabotanica", scent: "Scent Family: Floral–Green–Modern", image: "/images/flora-nova.jpg" },
    { id: 43, name: "Solar Bloom", description: "Inspired by: Valentino Donna Born in Roma", scent: "Scent Family: Floral–Vanilla–Modern", image: "/images/solar-bloom.jpg" },
    { id: 44, name: "Crystal Dawn", description: "Inspired by: MFK Amyris Femme", scent: "Scent Family: Floral–Woody–Sweet", image: "/images/crystal-dawn.jpg" },
    { id: 45, name: "Stellar Bloom", description: "Inspired by: Gucci Flora Gorgeous Gardenia", scent: "Scent Family: Floral–Fruity–Sweet", image: "/images/stellar-bloom.jpg" },
    { id: 46, name: "Astral Wonder", description: "Inspired by: Prada Paradoxe", scent: "Scent Family: Floral–Ambery–Musk", image: "/images/astral-wonder.jpg" },
    { id: 47, name: "Golden Stardust", description: "Inspired by: Armani Si", scent: "Scent Family: Floral–Fruity–Amber", image: "/images/golden-stardust.jpg" },
    { id: 48, name: "Velvet Cosmos", description: "Inspired by: Burberry Her (EDP)", scent: "Scent Family: Fruity–Gourmand–Floral", image: "/images/velvet-cosmos.jpg" },
    { id: 49, name: "Mystic Oud", description: "Inspired by: Jo Malone Oud & Bergamot", scent: "Scent Family: Oud–Citrus–Woody", image: "/images/mystic-oud.jpg" },
    { id: 50, name: "Ancient Ember", description: "Inspired by: Mugler Alien", scent: "Scent Family: Amber–Woody–Floral", image: "/images/ancient-ember.jpg" },
    { id: 51, name: "Solar Apex", description: "Inspired by: Creed Aventus Absolu", scent: "Scent Family: Fresh–Fruity–Woody Chypre", image: "/images/solar-apex.jpg" }
];

export const getFullSchema = () => {
    const productSchemas = allProducts.map(generateProductSchema);

    return {
        "@context": "https://schema.org",
        "@graph": [
            // Organization Schema
            {
                "@type": "Organization",
                "@id": "https://www.houseofelyra.com/#organization",
                "name": "House of Elyra",
                "url": "https://www.houseofelyra.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.houseofelyra.com/logo.png",
                    "width": 512,
                    "height": 512
                },
                "sameAs": [
                    "https://www.instagram.com/houseofelyra",
                    "https://www.facebook.com/houseofelyra",
                    "https://www.twitter.com/houseofelyra",
                    "https://www.tiktok.com/@houseofelyra",
                    "https://www.pinterest.com/houseofelyra"
                ],
                "description": "House of Elyra is a premium perfume house offering designer-inspired and niche-style fragrances. We craft long-lasting perfumes in woody, amber, fresh, floral, oriental, citrus and aromatic scent families for men, women, and unisex wear. Affordable luxury perfumes under $80.",
                "foundingDate": "2024",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "CA",
                    "addressLocality": "Toronto"
                },
                "areaServed": [
                    { "@type": "Country", "name": "Canada" },
                    { "@type": "Country", "name": "United States" },
                    { "@type": "Country", "name": "United Arab Emirates" },
                    { "@type": "Country", "name": "India" },
                    { "@type": "Country", "name": "United Kingdom" },
                    { "@type": "Country", "name": "Australia" }
                ],
                "knowsAbout": [
                    "Designer-inspired perfumes",
                    "Niche fragrance alternatives",
                    "Luxury perfumes",
                    "Long-lasting fragrances",
                    "Woody perfumes",
                    "Amber perfumes",
                    "Fresh fragrances",
                    "Floral scents",
                    "Oriental perfumes",
                    "Unisex fragrances"
                ]
            },
            // Website Schema
            {
                "@type": "WebSite",
                "@id": "https://www.houseofelyra.com/#website",
                "url": "https://www.houseofelyra.com",
                "name": "House of Elyra",
                "description": "Premium designer-inspired and niche-style fragrances. Luxury perfumes at affordable prices.",
                "publisher": {
                    "@id": "https://www.houseofelyra.com/#organization"
                },
                "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://www.houseofelyra.com/shop?search={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                }
            },
            // Collection Page Schema
            {
                "@type": "CollectionPage",
                "@id": "https://www.houseofelyra.com/discover/#webpage",
                "url": "https://www.houseofelyra.com/discover",
                "name": "Discover Elyra Fragrance Collection",
                "description": "Browse House of Elyra's curated collection of woody, amber, fresh, floral, oriental, citrus and aromatic perfumes — luxury-inspired fragrances and niche alternatives for men, women, and unisex wear.",
                "isPartOf": {
                    "@id": "https://www.houseofelyra.com/#website"
                },
                "about": {
                    "@id": "https://www.houseofelyra.com/#organization"
                },
                "mainEntity": {
                    "@type": "ItemList",
                    "itemListElement": productSchemas.map((product, index) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        "item": product
                    }))
                }
            },
            // Breadcrumb Schema
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.houseofelyra.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Discover",
                        "item": "https://www.houseofelyra.com/discover"
                    }
                ]
            },
            // FAQ Schema for AI Retrieval
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is House of Elyra?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "House of Elyra is a premium perfume house offering designer-inspired and niche-style fragrances. We craft long-lasting perfumes at affordable prices (under $80) in scent families including woody, amber, fresh, floral, oriental, and citrus profiles."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are Elyra perfumes long-lasting?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, House of Elyra perfumes are engineered for exceptional longevity and projection. Our fragrances typically last 8-12 hours and are designed to perform in various climates from cold Canadian winters to hot Gulf summers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Elyra ship to Canada, USA, and UAE?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, House of Elyra ships worldwide including Canada, United States, United Arab Emirates, India, United Kingdom, and Australia. We offer fast shipping to major cities like Toronto, New York, Dubai, Mumbai, and London."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What scent families does Elyra offer?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "House of Elyra offers fragrances across six main scent families: Woody & Amber (rich, sensual), Fresh & Citrus (clean, energetic), Floral & Romantic (soft, elegant), Oriental & Spicy (bold, exotic), Woody Citrus & Aromatic (unisex, sophisticated), and Fresh & Marine (airy, modern)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Are Elyra perfumes good alternatives to designer fragrances?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, House of Elyra specializes in designer-inspired perfumes that capture the essence of luxury fragrances like Tom Ford, Creed, Chanel, Dior, and more — all at affordable prices under $80 with premium quality and long-lasting performance."
                        }
                    }
                ]
            },
            // All Product Schemas
            ...productSchemas
        ]
    };
};

export const schemaString = JSON.stringify(getFullSchema());

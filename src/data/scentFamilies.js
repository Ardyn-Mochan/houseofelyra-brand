// Scent Families Data - Master Classification for House of Elyra
// Based on the comprehensive perfume classification table

export const scentFamilies = [
    {
        id: 'woody-amber',
        name: 'Woody & Amber',
        tagline: 'Rich, deep, sensual scents that linger.',
        description: 'Think amber resin, warm wood, and elegant depth — perfect for evenings, cold weather, or refined everyday wear.',
        image: '/images/mystic-oud.jpg',
        products: [
            'Nebula Gold',
            'Shadow Rift',
            'Eternal Ember',
            'Ember Noir',
            'Ember Royale',
            'Nightfall Ember',
            'Mystic Oud',
            'Ancient Ember',
            'Nightfall Rose',
            'Crystal Dawn',
            'Petal Sphere'
        ]
    },
    {
        id: 'fresh-citrus',
        name: 'Fresh & Citrus',
        tagline: 'Bright, energetic, and clean.',
        description: 'Ideal for daytime, summer, or anyone who loves crisp uplift and freshness.',
        image: '/images/aegean-star.jpg',
        products: [
            'Solstice Aura',
            'Solar Prism',
            'Aegean Star',
            'Azure Pulse',
            'Radiant Eclipse',
            'Solar Apex',
            'Frost Zenith',
            'Starborn Drift'
        ]
    },
    {
        id: 'floral-romantic',
        name: 'Floral & Romantic',
        tagline: 'Soft, expressive, evocative.',
        description: 'For those drawn to petals, romantic memory, gentle femininity — or modern interpretations of classic scents.',
        image: '/images/celestial-rose.jpg',
        products: [
            'Lunar Silk',
            'Celestial Rose',
            'Lunar Bloom',
            'Blossom Ray',
            'Aurora Bloom',
            'Stellar Velvet',
            'Rose Nebula',
            'Solar Bloom',
            'Stellar Bloom',
            'Fire Blossom',
            'Flora Nova',
            'Astral Wonder',
            'Golden Stardust',
            'Velvet Cosmos'
        ]
    },
    {
        id: 'oriental-spicy',
        name: 'Oriental & Spicy',
        tagline: 'Bold, exotic, sensual.',
        description: 'A world of incense, warm spices, resinous depth, and sensual allure — for nights, special occasions, or statement-making presence.',
        image: '/images/ember-strike.jpg',
        products: [
            'Ember Pulse',
            'Volcanic Crown',
            'Nightforge',
            'Ember Noir',
            'Solar Noir',
            'Midnight Aura',
            'Amber Radiance',
            'Nightfall Ember'
        ]
    },
    {
        id: 'woody-citrus-aromatic',
        name: 'Woody Citrus & Aromatic',
        tagline: 'A harmonious blend of bright citrus, fresh herbs, aromatic wood.',
        description: 'Ideal for unisex wear, elegant office or casual sophistication.',
        image: '/images/solar-apex.jpg',
        products: [
            'Helios Peak',
            'Solar Prism',
            'Serpent Star',
            'Cosmic Noir',
            'Aegean Surge',
            'Ember Strike',
            'Mystic Oud',
            'Solar Apex'
        ]
    },
    {
        id: 'fresh-marine-green',
        name: 'Fresh & Marine / Green & Airy',
        tagline: 'Airy, breezy, modern.',
        description: 'Subtle yet distinct fragrances for those who prefer understated elegance — clean skin-like freshness or green vegetal nuance.',
        image: '/images/oceanic-halo.jpg',
        products: [
            'Frost Zenith',
            'Tidal Origin',
            'Azure Pulse',
            'Radiant Eclipse',
            'Oceanic Halo',
            'Cloud Meadow',
            'Aegean Surge',
            'Solstice Aura'
        ]
    }
];

// Gender Classification - EXACT from master table
export const genderClassification = {
    Feminine: [
        'Lunar Silk',
        'Starlit Femme',
        'Celestial Rose',
        'Lunar Bloom',
        'Ember Noir',
        'Solar Noir',
        'Blossom Ray',
        'Midnight Petal',
        'Aurora Bloom',
        'Stellar Velvet',
        'Rose Nebula',
        'Midnight Aura',
        'Petal Sphere',
        'Cloud Meadow',
        'Iris Halo',
        'Fire Blossom',
        'Nightfall Rose',
        'Flora Nova',
        'Solar Bloom',
        'Crystal Dawn',
        'Stellar Bloom',
        'Astral Wonder',
        'Golden Stardust',
        'Velvet Cosmos',
        'Ancient Ember'
    ],
    Masculine: [
        'Helios Peak',
        'Frost Zenith',
        'Ember Pulse',
        'Eternal Ember',
        'Shadow Rift',
        'Solar Prism',
        'Volcanic Crown',
        'Nightforge',
        'Tidal Origin',
        'Cosmic Noir',
        'Aegean Surge',
        'Azure Pulse',
        'Ember Royale',
        'Serpent Star',
        'Starborn Drift',
        'Radiant Eclipse',
        'Ember Strike',
        'Nightfall Ember',
        'Mystic Oud',
        'Solar Apex'
    ],
    Unisex: [
        'Nebula Gold',
        'Solstice Aura',
        'Tidal Origin',
        'Aether Santal',
        'Oceanic Halo'
    ]
};

// Occasion Classification - EXACT from master table
export const occasionClassification = {
    Daytime: [
        'Solstice Aura',
        'Frost Zenith',
        'Aegean Star',
        'Azure Pulse',
        'Cloud Meadow',
        'Blossom Ray',
        'Aurora Bloom',
        'Stellar Velvet',
        'Solar Prism',
        'Oceanic Halo',
        'Velvet Cosmos'
    ],
    Evening: [
        'Nebula Gold',
        'Lunar Silk',
        'Ember Pulse',
        'Eternal Ember',
        'Shadow Rift',
        'Nightforge',
        'Solar Noir',
        'Ember Noir',
        'Ember Royale',
        'Midnight Aura',
        'Mystic Oud',
        'Nightfall Ember',
        'Ancient Ember',
        'Amber Radiance'
    ],
    'Special Occasions': [
        'Nebula Gold',
        'Eternal Ember',
        'Shadow Rift',
        'Volcanic Crown',
        'Solar Noir',
        'Mystic Oud',
        'Crystal Dawn',
        'Golden Stardust',
        'Astral Wonder',
        'Fire Blossom'
    ],
    'Date Night': [
        'Ember Pulse',
        'Ember Noir',
        'Solar Noir',
        'Rose Nebula',
        'Velvet Cosmos',
        'Midnight Aura',
        'Lunar Silk',
        'Celestial Rose',
        'Astral Wonder',
        'Golden Stardust'
    ]
};

// Season Classification - EXACT from master table
export const seasonClassification = {
    Spring: [
        'Blossom Ray',
        'Aurora Bloom',
        'Stellar Velvet',
        'Aegean Star',
        'Cloud Meadow',
        'Flora Nova',
        'Petal Sphere'
    ],
    Summer: [
        'Solstice Aura',
        'Frost Zenith',
        'Aegean Surge',
        'Azure Pulse',
        'Radiant Eclipse',
        'Solar Prism',
        'Oceanic Halo',
        'Solar Apex',
        'Starborn Drift'
    ],
    Fall: [
        'Lunar Silk',
        'Ember Pulse',
        'Eternal Ember',
        'Volcanic Crown',
        'Ember Royale',
        'Mystic Oud',
        'Crystal Dawn',
        'Stellar Bloom',
        'Velvet Cosmos'
    ],
    Winter: [
        'Nebula Gold',
        'Shadow Rift',
        'Ember Noir',
        'Solar Noir',
        'Nightforge',
        'Amber Radiance',
        'Nightfall Ember',
        'Ancient Ember',
        'Golden Stardust'
    ]
};

// Helper function to get products by scent family ID
export const getProductsByScentFamily = (familyId) => {
    const family = scentFamilies.find(f => f.id === familyId);
    return family ? family.products : [];
};

// Helper function to get scent family for a product
export const getScentFamilyForProduct = (productName) => {
    for (const family of scentFamilies) {
        if (family.products.includes(productName)) {
            return family;
        }
    }
    return null;
};

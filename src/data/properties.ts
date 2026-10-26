import { Property } from '../types/property';

export const HERO_IMAGE = '/src/assets/images/hero_luxury_villa_1792993798945.jpg';
export const SERVICES_IMAGE = '/src/assets/images/services_architecture_1792993804583.jpg';
export const ADVISOR_MARCUS_IMAGE = '/src/assets/images/advisor_marcus_lee_1792993804861.jpg';

export const PROPERTIES: Property[] = [
  {
    id: 'serenity-tower',
    name: 'Serenity Tower',
    country: 'USA',
    region: 'California',
    city: 'Los Angeles',
    locationFormatted: 'USA / California / Los Angeles',
    price: 3400000,
    priceFormatted: '$3,400,000',
    category: 'buy',
    propertyType: 'villa',
    propertyTypeLabel: 'Modern Villa',
    areaSqM: 300,
    areaSqFt: 3229,
    floors: 1,
    bedrooms: 4,
    bathrooms: 2,
    yearBuilt: 2024,
    parkingSpaces: 3,
    furnished: true,
    amenities: [
      'Cantilevered Infinity Pool',
      'Panoramic Downtown & Ocean Views',
      'Minimalist Board-Formed Concrete Walls',
      'Motorized Fleetwood Pocket Glazing',
      'Integrated Bulthaup Kitchen',
      'Poliform Wardrobes',
      'Smart Lutron Lighting & Sound',
      'Solar Battery Backup System'
    ],
    image: '/src/assets/images/property_serenity_la_1792993800516.jpg',
    gallery: [
      '/src/assets/images/property_serenity_la_1792993800516.jpg',
      '/src/assets/images/hero_luxury_villa_1792993798945.jpg',
      '/src/assets/images/services_architecture_1792993804583.jpg'
    ],
    description:
      'Perched on a private promontory above Los Angeles, Serenity Tower is an architectural masterwork conceived for seamless indoor-outdoor living. Framed by floor-to-ceiling glass and textural board-formed concrete, the residence captures cinematic golden-hour vistas spanning the Los Angeles basin to the Pacific horizon. Features a 60-foot reflecting pool, drought-resilient Japanese garden courtyards, and museum-grade finishes throughout.',
    architecturalHighlights: [
      'Cantilevered steel roof structure providing passive solar shading',
      'Full-height glass curtains retracting into subterranean pockets',
      'Honed basalt stone terrace paving with seamless zero-threshold transitions'
    ],
    projectedRentalYield: 11.2,
    annualAppreciation: 8.4,
    coordinates: {
      lat: 34.0522,
      lng: -118.2437
    },
    floorPlanRooms: [
      { name: 'Grand Living & Dining Pavilion', dimension: '12.4m x 7.8m', level: 'Ground Level' },
      { name: 'Primary Ocean-View Suite', dimension: '8.2m x 5.6m', level: 'Ground Level' },
      { name: 'Guest Suite 1 & Ensuite', dimension: '5.2m x 4.4m', level: 'Ground Level' },
      { name: 'Guest Suite 2 & Ensuite', dimension: '4.8m x 4.2m', level: 'Ground Level' },
      { name: 'Private Executive Study', dimension: '4.5m x 3.8m', level: 'Ground Level' },
      { name: 'Reflecting Infinity Terrace', dimension: '18.0m x 6.5m', level: 'Outdoor' }
    ],
    isFeatured: true
  },
  {
    id: 'island-retreat',
    name: 'Island Retreat',
    country: 'Bahamas',
    region: 'Exuma Cays',
    city: 'Exuma',
    locationFormatted: 'Caribbean / Bahamas / Exuma',
    price: 2200000,
    priceFormatted: '$2,200,000',
    category: 'buy',
    propertyType: 'villa',
    propertyTypeLabel: 'Oceanfront Estate',
    areaSqM: 250,
    areaSqFt: 2690,
    floors: 1,
    bedrooms: 4,
    bathrooms: 1,
    yearBuilt: 2023,
    parkingSpaces: 2,
    furnished: true,
    amenities: [
      'Private Sugar-Sand Beachfront',
      'Travertine Edge Lap Pool',
      'Deep-Water Yacht Mooring',
      'Outdoor Teak Sunset Pavilion',
      'Custom Coral Stone Bathrooms',
      'Off-Grid Solar Microgrid',
      'Desalination Plant',
      'Private Chef Demonstration Kitchen'
    ],
    image: '/src/assets/images/property_island_exuma_1792993800785.jpg',
    gallery: [
      '/src/assets/images/property_island_exuma_1792993800785.jpg',
      '/src/assets/images/property_comporta_portugal_1792993802659.jpg',
      '/src/assets/images/hero_luxury_villa_1792993798945.jpg'
    ],
    description:
      'Set directly on the powder sands of Great Exuma, Island Retreat embodies quiet tropical modernism. Designed with crisp horizontal white volumes, sustainable limestone, and wide hurricane-rated glass sliders, the property merges effortlessly with the turquoise Bahamian waters. Offers a private pier capable of docking vessels up to 70 feet.',
    architecturalHighlights: [
      'Bioclimatic cross-ventilation system taking advantage of trade winds',
      'Locally sourced natural coral stone surfaces treated with breathable sealants',
      'Continuous 32-meter travertine deck flanking the private marine reserve'
    ],
    projectedRentalYield: 14.5,
    annualAppreciation: 9.1,
    coordinates: {
      lat: 23.5333,
      lng: -75.8333
    },
    floorPlanRooms: [
      { name: 'Waterfront Great Room', dimension: '11.0m x 6.5m', level: 'Ground Level' },
      { name: 'Master Sunrise Suite', dimension: '7.5m x 5.0m', level: 'Ground Level' },
      { name: 'Guest Bedroom Wing A', dimension: '5.0m x 4.0m', level: 'Ground Level' },
      { name: 'Guest Bedroom Wing B', dimension: '5.0m x 4.0m', level: 'Ground Level' },
      { name: 'Sunset Dining Lanai', dimension: '8.0m x 5.0m', level: 'Outdoor' }
    ],
    isFeatured: true
  },
  {
    id: 'mountain-lodge',
    name: 'Mountain Lodge',
    country: 'USA',
    region: 'Colorado',
    city: 'Aspen',
    locationFormatted: 'USA / Colorado / Aspen',
    price: 5000000,
    priceFormatted: '$5,000,000',
    category: 'buy',
    propertyType: 'chalet',
    propertyTypeLabel: 'Alpine Chalet',
    areaSqM: 400,
    areaSqFt: 4305,
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    yearBuilt: 2025,
    parkingSpaces: 4,
    furnished: true,
    amenities: [
      'Ski-in / Ski-out Access',
      'Heated Flagstone Thermal Spa Terrace',
      'Sunken Outdoor Firepit',
      'Charred Shou Sugi Ban Wood Cladding',
      'Double-Height Glass Hearth Room',
      'Heated Driveway & Ski Locker Room',
      'Custom Cedar Sauna',
      'Sub-Zero & Wolf Appliance Suite'
    ],
    image: '/src/assets/images/property_mountain_aspen_1792993801393.jpg',
    gallery: [
      '/src/assets/images/property_mountain_aspen_1792993801393.jpg',
      '/src/assets/images/hero_luxury_villa_1792993798945.jpg',
      '/src/assets/images/services_architecture_1792993804583.jpg'
    ],
    description:
      'A tour-de-force of contemporary alpine architecture, Mountain Lodge reinterprets the Colorado mountain home with razor-sharp geometric lines, charred Japanese timber, and structural glass. Surrounded by whispering evergreens and dramatic mountain crests, the home features two expansive living levels with radiant stone heating and an outdoor hydrotherapy hot tub.',
    architecturalHighlights: [
      'Angled mono-pitch rooflines optimized for alpine snow loads and solar capture',
      'Triple-glazed thermally broken curtain walls offering R-8 thermal insulation',
      'Hand-chiseled Colorado granite fireplaces rising two full storeys'
    ],
    projectedRentalYield: 12.8,
    annualAppreciation: 10.2,
    coordinates: {
      lat: 39.1911,
      lng: -106.8175
    },
    floorPlanRooms: [
      { name: 'Cathedral Hearth & Living Salon', dimension: '13.2m x 8.0m', level: 'Main Level' },
      { name: 'Chef Kitchen & Wine Tasting Room', dimension: '7.8m x 5.2m', level: 'Main Level' },
      { name: 'Upper Master Alpine Sanctuary', dimension: '8.5m x 6.0m', level: 'Upper Level' },
      { name: 'Lower Guest & Wellness Suites', dimension: '10.0m x 7.0m', level: 'Lower Level' },
      { name: 'Thermal Heated Stone Deck', dimension: '14.0m x 8.0m', level: 'Outdoor' }
    ],
    isFeatured: true
  },
  {
    id: 'comporta-beach-lux',
    name: 'Comporta Beach Lux',
    country: 'Portugal',
    region: 'Lisbon Coast',
    city: 'Comporta',
    locationFormatted: 'Portugal / Lisbon Coast / Comporta',
    price: 2960000,
    priceFormatted: '$2,960,000',
    category: 'buy',
    propertyType: 'villa',
    propertyTypeLabel: 'Coastal Sanctuary',
    areaSqM: 220,
    areaSqFt: 2368,
    floors: 1,
    bedrooms: 3,
    bathrooms: 3,
    yearBuilt: 2024,
    parkingSpaces: 2,
    furnished: true,
    amenities: [
      'Direct Dune Beach Path',
      'Turquoise Plunge Pool',
      'Bleached Pine Shading Pergolas',
      'Microcement Seamless Flooring',
      'Lush Native Pine & Dune Garden',
      'Underfloor Ecological Geothermal Heating',
      'Outdoor Dining & Fireplace Lounge',
      'Gated Private Enclave Security'
    ],
    image: '/src/assets/images/property_comporta_portugal_1792993802659.jpg',
    gallery: [
      '/src/assets/images/property_comporta_portugal_1792993802659.jpg',
      '/src/assets/images/property_azura_mykonos_1792993803418.jpg',
      '/src/assets/images/property_tulum_eco_1792993804007.jpg'
    ],
    description:
      'Situated in the coveted coastal dunes of Comporta just an hour south of Lisbon, this residence captures the essence of refined Portuguese coastal chic. Low-slung whitewashed geometry, raw wooden trellises, and polished microcement create a calm atmosphere of understated luxury. Steps away from miles of pristine, uncrowded Atlantic sand beaches.',
    architecturalHighlights: [
      'Artisanal slatted cedar pergolas casting rhythmic linear shadow geometries',
      'Thermal mass exterior masonry maintaining ideal 21°C interior year-round',
      'Zero-threshold glass wall opening directly to indigenous dune landscaping'
    ],
    projectedRentalYield: 10.5,
    annualAppreciation: 8.8,
    coordinates: {
      lat: 38.3797,
      lng: -8.7844
    },
    floorPlanRooms: [
      { name: 'Open Sand-View Salon', dimension: '9.6m x 6.2m', level: 'Ground Level' },
      { name: 'Master Dune Bedroom & Bath', dimension: '6.5m x 4.8m', level: 'Ground Level' },
      { name: 'Guest Bedroom 1 Ensuite', dimension: '4.8m x 4.0m', level: 'Ground Level' },
      { name: 'Guest Bedroom 2 Ensuite', dimension: '4.6m x 4.0m', level: 'Ground Level' },
      { name: 'Pergola Dining & Plunge Pool', dimension: '12.0m x 5.5m', level: 'Outdoor' }
    ],
    isFeatured: true
  },
  {
    id: 'tulum-eco-retreat',
    name: 'Tulum Eco Retreat',
    country: 'Mexico',
    region: 'Yucatan Peninsula',
    city: 'Tulum',
    locationFormatted: 'Mexico / Yucatan / Tulum',
    price: 4500000,
    priceFormatted: '$4,500,000',
    category: 'buy',
    propertyType: 'retreat',
    propertyTypeLabel: 'Brutalist Eco-Villa',
    areaSqM: 150,
    areaSqFt: 1614,
    floors: 1,
    bedrooms: 3,
    bathrooms: 1,
    yearBuilt: 2024,
    parkingSpaces: 2,
    furnished: true,
    amenities: [
      'Private Jungle Cenote Pool',
      'Authentic Mayan Chukum Stucco',
      'Local Quarry Stone Masonry',
      'Rooftop Stargazing Lounge',
      'Rainwater Harvesting & Filtration',
      'Zero-Waste Greywater System',
      'High-Speed Starlink Satellite Connectivity',
      '24/7 Concierge & Security'
    ],
    image: '/src/assets/images/property_tulum_eco_1792993804007.jpg',
    gallery: [
      '/src/assets/images/property_tulum_eco_1792993804007.jpg',
      '/src/assets/images/property_serenity_la_1792993800516.jpg',
      '/src/assets/images/services_architecture_1792993804583.jpg'
    ],
    description:
      'Immersed in the lush jungle canopy of Tulum, this brutalist architectural sanctuary bridges modern raw concrete with ancient Mayan craftsmanship. Walls finished in organic waterproof chukum resin blend into local hand-stacked limestone boulders. Features an emerald-green plunge pool, outdoor shower pavilions, and open-air entertaining verandas.',
    architecturalHighlights: [
      'Sustainable chukum finish derived from native wild tree bark resin',
      'Dense palm canopy preservation allowing 85% natural canopy shade',
      'Deep cantilevered cast concrete eaves shielding from tropical downpours'
    ],
    projectedRentalYield: 15.2,
    annualAppreciation: 11.5,
    coordinates: {
      lat: 20.2114,
      lng: -87.4654
    },
    floorPlanRooms: [
      { name: 'Indoor-Outdoor Living Veranda', dimension: '8.5m x 5.8m', level: 'Ground Level' },
      { name: 'Jungle Master Sanctuary', dimension: '6.0m x 4.5m', level: 'Ground Level' },
      { name: 'Chukum Guest Suite 1', dimension: '4.8m x 4.0m', level: 'Ground Level' },
      { name: 'Chukum Guest Suite 2', dimension: '4.5m x 3.8m', level: 'Ground Level' },
      { name: 'Cenote-Style Plunge Pool Deck', dimension: '10.0m x 5.0m', level: 'Outdoor' }
    ],
    isFeatured: true
  },
  {
    id: 'azura-villa',
    name: 'Azura Villa',
    country: 'Greece',
    region: 'Cyclades',
    city: 'Mykonos',
    locationFormatted: 'Greece / Cyclades / Mykonos',
    price: 4700000,
    priceFormatted: '$4,700,000',
    category: 'buy',
    propertyType: 'villa',
    propertyTypeLabel: 'Cycladic Residence',
    areaSqM: 400,
    areaSqFt: 4305,
    floors: 2,
    bedrooms: 4,
    bathrooms: 2,
    yearBuilt: 2024,
    parkingSpaces: 3,
    furnished: true,
    amenities: [
      'Curved Infinity Edge Horizon Pool',
      'Unobstructed Aegean Sea Panorama',
      'Sculptural Handcrafted Cycladic Plaster',
      'Dry-Stone Traditional Windwalls',
      'Outdoor Kitchen & Wood-Fired Oven',
      'Private Helipad Access',
      'Direct Coastal Path Access',
      'Separate Staff Quarters'
    ],
    image: '/src/assets/images/property_azura_mykonos_1792993803418.jpg',
    gallery: [
      '/src/assets/images/property_azura_mykonos_1792993803418.jpg',
      '/src/assets/images/property_island_exuma_1792993800785.jpg',
      '/src/assets/images/property_comporta_portugal_1792993802659.jpg'
    ],
    description:
      'Poised dramatically above the Aegean waters in southern Mykonos, Azura Villa is an authentic celebration of Cycladic organic forms rendered with contemporary precision. Soft curved whitewashed parapets flow into rugged natural stone retaining walls. An iconic curved infinity pool appears to spill directly into the sapphire waters below.',
    architecturalHighlights: [
      'Traditional organic curved masonry eliminating harsh right angles',
      'Custom whitewash lime formula reflecting 92% of solar thermal radiation',
      'Deep shaded outdoor pergolas framing dramatic views of Delos island'
    ],
    projectedRentalYield: 13.9,
    annualAppreciation: 9.7,
    coordinates: {
      lat: 37.4467,
      lng: 25.3289
    },
    floorPlanRooms: [
      { name: 'Panoramic Sea-View Salon', dimension: '12.0m x 7.5m', level: 'Upper Level' },
      { name: 'Master Aegean Suite', dimension: '8.0m x 5.5m', level: 'Upper Level' },
      { name: 'Guest Suite 1 & Private Terrace', dimension: '5.5m x 4.5m', level: 'Lower Level' },
      { name: 'Guest Suite 2 & Ensuite', dimension: '5.2m x 4.2m', level: 'Lower Level' },
      { name: 'Guest Suite 3 & Ensuite', dimension: '5.0m x 4.0m', level: 'Lower Level' },
      { name: 'Curved Infinity Pool Terrace', dimension: '18.0m x 9.0m', level: 'Outdoor' }
    ],
    isFeatured: true
  }
];

export const SERVICES = [
  {
    id: 'selection',
    number: '01',
    title: 'Property Selection',
    subtitle: 'Tailored Discovery',
    shortDescription: 'Agent provides a tailored list of verified listings, includes photos, 3D tours, and offline/online viewings.',
    fullDescription: 'Our international scouts curate unlisted and premier architectural properties according to your aesthetic, financial, and lifestyle prerequisites.',
    features: ['Off-market private inventory', 'Architectural structural audits', 'Immersive 3D lidar walk-throughs']
  },
  {
    id: 'buying',
    number: '02',
    title: 'Buying Assistance',
    subtitle: 'End-to-End Escrow & Legal',
    shortDescription: 'Full cross-border legal verification, escrow protection, title deeds, and bilingual negotiation.',
    fullDescription: 'We streamline high-value cross-border acquisitions with established legal counsel, international tax optimization, and discreet transactions.',
    features: ['Multi-currency escrow accounts', 'Foreign buyer residency guidance', 'Transparent title registry clearance']
  },
  {
    id: 'selling',
    number: '03',
    title: 'Selling Properties',
    subtitle: 'Global Editorial Marketing',
    shortDescription: 'Cinematic architectural media, targeted ultra-high-net-worth distribution, and private roadshows.',
    fullDescription: 'Positioning your architectural masterpiece to high-intent buyers across London, New York, Zurich, Dubai, and Singapore.',
    features: ['Bespoke editorial photography', 'Private investor network syndication', 'Strict non-disclosure confidentiality']
  },
  {
    id: 'valuation',
    number: '04',
    title: 'Property Valuation',
    subtitle: 'Quantitative Appraisal',
    shortDescription: 'Micro-market data, comparative luxury yield analysis, and replacement cost modeling.',
    fullDescription: 'Detailed mathematical valuation assessing rarity value, architectural pedigree, historical comps, and anticipated rental yield.',
    features: ['Hedonic pricing index modeling', 'Replacement material cost analysis', 'Comparative yield forecasting']
  },
  {
    id: 'investment',
    number: '05',
    title: 'Investment Consultation',
    subtitle: 'Capital Preservation & Yield',
    shortDescription: 'Portfolio diversification, high-yield luxury vacation leases, and tax-efficient structures.',
    fullDescription: 'Strategic advisory for private family offices and sovereign clients seeking real asset preservation with 10–15% gross yield targets.',
    features: ['Golden visa eligibility advisory', 'Prime holiday rental optimization', 'Currency hedging strategies']
  },
  {
    id: 'management',
    number: '06',
    title: 'Property Management',
    subtitle: 'White-Glove Care',
    shortDescription: 'Turnkey estate upkeep, preventative maintenance, staff management, and premium guest hosting.',
    fullDescription: 'Complete operational management ensuring your luxury residence remains in immaculate condition year-round.',
    features: ['Dedicated estate manager', 'Preventative seasonal maintenance', '24/7 technical security supervision']
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Alexander & Elena Vance',
    role: 'Private Equity Director',
    location: 'Geneva, Switzerland',
    propertyPurchased: 'Mountain Lodge, Aspen',
    quote: 'Horizon Estate redefined our acquisition experience. Their architectural depth and discreet advisory were unmatched during the purchase of our Colorado home.',
    rating: 5,
    year: '2025'
  },
  {
    id: '2',
    name: 'Camilla Lindqvist',
    role: 'Design Director & Architect',
    location: 'Stockholm, Sweden',
    propertyPurchased: 'Comporta Beach Lux, Portugal',
    quote: 'As an architect, I am exceptionally demanding about structural integrity and light. Horizon presented only homes of supreme craft without wasting an hour.',
    rating: 5,
    year: '2024'
  },
  {
    id: '3',
    name: 'Tariq Al-Mansoor',
    role: 'Real Estate Investor',
    location: 'Dubai, UAE',
    propertyPurchased: 'Azura Villa, Mykonos',
    quote: 'The team facilitated seamless cross-border escrow and Greek title transfers. Our Aegean villa now commands a 14% annual net rental return.',
    rating: 5,
    year: '2025'
  }
];

export const WHY_CHOOSE_US = [
  {
    id: 'curated',
    number: '01',
    title: 'Curated Property Collection',
    description: 'We evaluate hundreds of residences to select only the top 3% meeting strict architectural, environmental, and structural standards.'
  },
  {
    id: 'guidance',
    number: '02',
    title: 'Expert Guidance',
    description: 'Bilingual licensed brokers, chartered structural surveyors, and international tax advisors guide every transaction.'
  },
  {
    id: 'transparent',
    number: '03',
    title: 'Transparent Process',
    description: 'No hidden transaction costs or markups. Complete visibility into deed histories, zoning laws, and tax ramifications.'
  },
  {
    id: 'personalised',
    number: '04',
    title: 'Personalised Assistance',
    description: 'Dedicated private client partner available round-the-clock, from initial private viewings through to interior handover.'
  }
];

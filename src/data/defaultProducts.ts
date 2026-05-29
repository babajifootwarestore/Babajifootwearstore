import { Product } from "../types";

export const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Babaji Phantom Air Max",
    price: 129.99,
    originalPrice: 179.99,
    description: "Experience ultimate cloud-like comfort with the Babaji Phantom Air Max. Featuring a dynamic air cushioning wrap-around pocket and a breathable flyknit upper, this shoe adapts perfectly to your foot shape. Ideal for both daily sprints and casual urban style.",
    category: "Sports",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.8,
    reviewsCount: 142,
    sizes: ["7", "8", "9", "10", "11"],
    inStock: true,
    featured: true
  },
  {
    id: "prod-2",
    name: "Heritage Leather Oxford",
    price: 99.50,
    originalPrice: 145.00,
    description: "Indulge in Italian elegance. Handcrafted from premium vegetable-tanned grain calfskin, these heritage Oxford shoes feature robust Goodyear-welted construction. The cushioned leather footbed molds with wear to become your most trusted, comfortable formal shoes.",
    category: "Formal",
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviewsCount: 88,
    sizes: ["8", "9", "10", "11"],
    inStock: true,
    featured: true
  },
  {
    id: "prod-3",
    name: "Retro Urban High-Top",
    price: 79.99,
    originalPrice: 99.99,
    description: "Throw back in absolute confidence. This sneaker combines an iconic 80s hoops silhouette with breathable canvas linings and durable vulcanized nonslip rubber soles. Reinforced ankle collars provide custom street protection and casual aesthetic appeal.",
    category: "Casual",
    images: [
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.6,
    reviewsCount: 215,
    sizes: ["6", "7", "8", "9", "10", "11"],
    inStock: true,
    featured: false
  },
  {
    id: "prod-4",
    name: "Cosmic Glow Street Runner",
    price: 110.00,
    originalPrice: 150.00,
    description: "Engineered to deliver high responsive energy return. Featuring laser-targeted shock pads and reflective synthetic accents, the Neon UltraBoost is built for safety and premium visual styling. Extremely fast-drying mesh lining keeps your feet fresh.",
    category: "Sports",
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552346154-21d32810abb1?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.7,
    reviewsCount: 94,
    sizes: ["7", "8", "9", "10"],
    inStock: true,
    featured: true
  },
  {
    id: "prod-5",
    name: "Vagabond Suede Loafer",
    price: 65.00,
    originalPrice: 85.00,
    description: "Effortless, classic slip-on footwear. Crafted with a velvet-soft water-resistant suede outer and an anti-fatigue cork inner sole, these loungers represent total versatility. Great with denims, casual wear, or lightweight summer shorts.",
    category: "Casual",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.5,
    reviewsCount: 61,
    sizes: ["7", "8", "9", "10", "11"],
    inStock: true,
    featured: false
  },
  {
    id: "prod-6",
    name: "Apex Waterproof Trail Boot",
    price: 145.00,
    originalPrice: 189.99,
    description: "Heavy-duty protection designed for the great outdoors. Equipped with an advanced dry-shield waterproof membrane, deep-lug traction Vibram rubber sole, and protective rubber toe bumper. Battle mud, mountain slopes, or heavy rains with zero worries.",
    category: "Boots",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=600&auto=format&fit=crop"
    ],
    rating: 4.9,
    reviewsCount: 112,
    sizes: ["8", "9", "10", "11", "12"],
    inStock: false,
    featured: false
  }
];

export const ADS_BANNER_IMAGES = [
  {
    id: "ad-1",
    title: "Official Babaji Showroom",
    subtitle: "Main Bus Stop, Aur, Nawanshahr — Step inside and explore our massive real-world footwear showroom!",
    tagline: "📞 Call / WhatsApp: +91 98888-91598 for direct booking",
    imageUrl: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=1200&auto=format&fit=crop",
    linkText: "Contact Storefront"
  },
  {
    id: "ad-2",
    title: "Guaranteed Comfort & Style",
    subtitle: "Representing authentic quality with custom packaging. We stock premium Shoes, High-tops, and daily slides.",
    tagline: "📸 Instagram: @baba_ji_foot_wear_store",
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop",
    linkText: "View Our Collection"
  },
  {
    id: "ad-3",
    title: "All Brands Under One Roof",
    subtitle: "Official range of Top Athletics, Comfort Footwear, Formals & Casuals. Proudly serving S.B.S. Nagar, Punjab!",
    tagline: "✨ Quality • Comfort • Trust | M. 98888-91598",
    imageUrl: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1200&auto=format&fit=crop",
    linkText: "Shop the Catalog"
  }
];

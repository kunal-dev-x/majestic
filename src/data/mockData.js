export const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: 89.99,
    originalPrice: 109.99,
    gender: "men",
    category: "shirts",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500"
    ],
    description: "Premium cotton blend shirt with modern fit. Perfect for business casual and formal occasions.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Blue", "Navy"],
    rating: 4.5,
    reviews: 128,
    isNew: true,
    isBestSeller: false,
    tags: ["formal", "business", "cotton"],
    occasion: "formal"
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 129.99,
    gender: "women",
    category: "jackets",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500"
    ],
    description: "Vintage-inspired denim jacket with distressed details and modern fit.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Light Blue", "Dark Blue", "Black"],
    rating: 4.7,
    reviews: 89,
    isNew: false,
    isBestSeller: true,
    tags: ["casual", "denim", "vintage"],
    occasion: "casual"
  },
  {
    id: 3,
    name: "Slim Fit Chinos",
    price: 79.99,
    gender: "men",
    category: "pants",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500",
      "https://images.unsplash.com/photo-1506629905607-d5b94b6a5f3b?w=500"
    ],
    description: "Comfortable slim-fit chinos made from premium cotton twill.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Navy", "Khaki", "Black", "Olive"],
    rating: 4.3,
    reviews: 156,
    isNew: true,
    isBestSeller: true,
    tags: ["casual", "smart-casual", "cotton"],
    occasion: "casual"
  },
  {
    id: 4,
    name: "Floral Summer Dress",
    price: 159.99,
    gender: "women",
    category: "dresses",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500"
    ],
    description: "Light and airy summer dress with beautiful floral print. Perfect for warm weather.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Floral Blue", "Floral Pink", "Floral Yellow"],
    rating: 4.8,
    reviews: 67,
    isNew: true,
    isBestSeller: false,
    tags: ["summer", "floral", "light"],
    occasion: "casual"
  },
  {
    id: 5,
    name: "Wool Blend Sweater",
    price: 119.99,
    gender: "men",
    category: "sweaters",
    images: [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500"
    ],
    description: "Cozy wool blend sweater with ribbed cuffs and hem. Essential for cold weather.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Navy", "Cream", "Forest Green"],
    rating: 4.6,
    reviews: 94,
    isNew: false,
    isBestSeller: true,
    tags: ["wool", "warm", "winter"],
    occasion: "casual"
  },
  {
    id: 6,
    name: "High-Waisted Jeans",
    price: 99.99,
    gender: "women",
    category: "jeans",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500"
    ],
    description: "High-waisted skinny jeans with stretch for comfort and flattering fit.",
    sizes: ["24", "26", "28", "30", "32", "34"],
    colors: ["Dark Blue", "Light Blue", "Black", "White"],
    rating: 4.4,
    reviews: 203,
    isNew: false,
    isBestSeller: true,
    tags: ["denim", "high-waisted", "stretch"],
    occasion: "casual"
  }
];

export const reviews = [
  {
    id: 1,
    productId: 1,
    name: "Sarah M.",
    rating: 5,
    comment: "Amazing quality! The fit is perfect and the fabric feels premium.",
    date: "2024-01-15",
    verified: true,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=100"
  },
  {
    id: 2,
    productId: 2,
    name: "Mike R.",
    rating: 4,
    comment: "Great jacket, exactly as described. Fast shipping too!",
    date: "2024-01-12",
    verified: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
  },
  {
    id: 3,
    productId: 1,
    name: "Emma L.",
    rating: 5,
    comment: "Love this shirt! Bought it in three colors. Highly recommend.",
    date: "2024-01-10",
    verified: true,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
  }
];

export const featuredOutfits = [
  {
    id: 1,
    title: "Business Casual",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    products: [1, 3],
    description: "Perfect for the modern professional"
  },
  {
    id: 2,
    title: "Weekend Vibes",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b742?w=400",
    products: [2, 6],
    description: "Casual comfort meets style"
  },
  {
    id: 3,
    title: "Date Night",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
    products: [4],
    description: "Elegant and effortless"
  }
];

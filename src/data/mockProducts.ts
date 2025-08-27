import categorySarees from "@/assets/category-sarees.jpg";
import categoryLehengas from "@/assets/category-lehengas.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  isBestseller?: boolean;
  category: string;
  material?: string;
  color?: string;
  occasion?: string;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Elegant Pink Silk Saree with Golden Border",
    price: 4999,
    originalPrice: 7999,
    image: categorySarees,
    rating: 4.5,
    reviewCount: 128,
    isNew: true,
    category: "Sarees",
    material: "Silk",
    color: "Pink",
    occasion: "Wedding"
  },
  {
    id: 2,
    name: "Royal Green Lehenga with Heavy Embroidery",
    price: 12999,
    originalPrice: 18999,
    image: categoryLehengas,
    rating: 4.8,
    reviewCount: 89,
    isBestseller: true,
    category: "Lehengas",
    material: "Velvet",
    color: "Green",
    occasion: "Bridal"
  },
  {
    id: 3,
    name: "Traditional Banarasi Silk Saree",
    price: 8999,
    originalPrice: 12999,
    image: categorySarees,
    rating: 4.6,
    reviewCount: 156,
    category: "Sarees",
    material: "Banarasi Silk",
    color: "Gold",
    occasion: "Festival"
  },
  {
    id: 4,
    name: "Designer Anarkali Suit Set",
    price: 6999,
    originalPrice: 9999,
    image: categoryLehengas,
    rating: 4.4,
    reviewCount: 73,
    isNew: true,
    category: "Salwar Suits",
    material: "Georgette",
    color: "Blue",
    occasion: "Party"
  },
  {
    id: 5,
    name: "Coral Pink Wedding Lehenga",
    price: 15999,
    originalPrice: 22999,
    image: categorySarees,
    rating: 4.9,
    reviewCount: 201,
    isBestseller: true,
    category: "Lehengas",
    material: "Net",
    color: "Coral",
    occasion: "Wedding"
  },
  {
    id: 6,
    name: "Pure Kanjivaram Silk Saree",
    price: 11999,
    originalPrice: 16999,
    image: categoryLehengas,
    rating: 4.7,
    reviewCount: 112,
    category: "Sarees",
    material: "Kanjivaram Silk",
    color: "Maroon",
    occasion: "Traditional"
  },
  {
    id: 7,
    name: "Contemporary Sharara Set",
    price: 7999,
    originalPrice: 11999,
    image: categorySarees,
    rating: 4.3,
    reviewCount: 67,
    isNew: true,
    category: "Salwar Suits",
    material: "Crepe",
    color: "Mustard",
    occasion: "Casual"
  },
  {
    id: 8,
    name: "Heavy Work Bridal Lehenga",
    price: 24999,
    originalPrice: 34999,
    image: categoryLehengas,
    rating: 4.8,
    reviewCount: 145,
    isBestseller: true,
    category: "Lehengas",
    material: "Silk",
    color: "Red",
    occasion: "Bridal"
  }
];

export const featuredProducts = mockProducts.filter(p => p.isBestseller);
export const newArrivals = mockProducts.filter(p => p.isNew);
export const saleProducts = mockProducts.filter(p => p.originalPrice);
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  images: string[]; // local data URLs or web URLs
  rating: number;
  reviewsCount: number;
  sizes: string[];
  inStock: boolean;
  featured?: boolean;
}

export interface CartItem {
  id: string; // unique cart item id (product id + size)
  product: Product;
  selectedSize: string;
  quantity: number;
}

export type ViewState = 
  | { type: 'store' }
  | { type: 'product-detail'; productId: string }
  | { type: 'cart' }
  | { type: 'admin' };

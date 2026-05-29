import React from "react";
import { Star, ShieldAlert, BadgePercent, Eye } from "lucide-react";
import { Product } from "../types";
import { motion } from "motion/react";

interface ProductCardProps {
  key?: string;
  product: Product;
  onClick: () => void;
  onAddToCart: (p: Product, size: string) => void;
}

export default function ProductCard({ product, onClick, onAddToCart }: ProductCardProps) {
  // Safe calculation of rating stars
  const roundedRating = Math.round(product.rating || 4.5);
  const showDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = showDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.15 } }}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-350 flex flex-col h-full relative group"
      onClick={onClick}
      id={`product-card-${product.id}`}
    >
      {/* Prime or Best Seller Badge */}
      <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1">
        {product.featured && (
          <span className="bg-amazon-navy text-yellow-300 text-[10px] font-bold px-2 py-0.5 rounded tracking-wide uppercase shadow">
            Best Seller
          </span>
        )}
        {showDiscount && (
          <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-0.5 shadow">
            <BadgePercent className="w-3 h-3" /> Save {discountPercent}%
          </span>
        )}
      </div>

      {/* Main Shoe Image Area */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 flex items-center justify-center p-4">
        {product.images && product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={product.name}
            referrerPolicy="no-referrer"
            className="object-contain w-full h-full max-h-[190px] group-hover:scale-105 transition-transform duration-350"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-300">
            <ShieldAlert className="w-10 h-10 mb-1" />
            <span className="text-xs font-mono">No Image</span>
          </div>
        )}

        {/* Hover Quick View Overlay */}
        <div className="absolute inset-x-0 bottom-0 top-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white/95 text-slate-900 border border-slate-200 absolute bottom-4 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md flex items-center gap-1.5 md:opacity-0 md:group-hover:opacity-100 transition-all transform md:translate-y-2 md:group-hover:translate-y-0 duration-350">
            <Eye className="w-3.5 h-3.5" /> View Details
          </span>
        </div>
      </div>

      {/* Item Information Panel */}
      <div className="p-3 md:p-4 flex flex-col flex-1 bg-white">
        <p className="text-xs text-slate-400 capitalize mb-1 font-medium font-mono">{product.category}</p>
        
        <h3 className="font-semibold text-slate-900 text-xs sm:text-sm line-clamp-2 md:line-clamp-1 group-hover:text-amazon-orange transition-colors duration-250 leading-snug mb-1">
          {product.name}
        </h3>

        {/* Ratings Review Area */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < roundedRating ? "fill-amber-400" : "text-gray-200"}`}
              />
            ))}
          </div>
          <span className="text-[10px] text-sky-600 font-semibold hover:underline">
            {product.reviewsCount || 42}
          </span>
        </div>

        {/* Pricing Panel */}
        <div className="mt-auto pt-2 flex flex-col">
          {/* Brand-specific visual styling for price block */}
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="text-sm font-mono text-slate-400 leading-none">$</span>
            <span className="text-base sm:text-lg font-bold text-slate-900 font-mono leading-none tracking-tight">
              {product.price.toFixed(2)}
            </span>
            {showDiscount && (
              <span className="text-[11px] text-slate-400 line-through font-mono">
                ${product.originalPrice?.toFixed(2)}
              </span>
            )}
          </div>

          <div className="mt-2 text-[10px] font-medium flex items-center gap-1">
            {product.inStock ? (
              <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md font-bold">
                ✓ In Stock
              </span>
            ) : (
              <span className="text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded-md font-bold">
                ⚠️ Out of Stock
              </span>
            )}
            <span className="text-slate-500 whitespace-nowrap">Free delivery tomorrow</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

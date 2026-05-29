import React, { useState } from "react";
import { ArrowLeft, ShoppingCart, Send, Star, Check, HelpCircle, Heart, Share2, Award, Sparkles } from "lucide-react";
import { Product } from "../types";
import { motion } from "motion/react";

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
  whatsappNumber?: string; // Configured whatsapp number
}

export default function ProductDetail({
  product,
  onBack,
  onAddToCart,
  whatsappNumber = "+919888891598", // Standard fallback default contact for Babaji Footwear
}: ProductDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "8");
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const roundedRating = Math.round(product.rating || 4.5);
  const showDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = showDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleBuyNowWhatsApp = () => {
    const formattedText = encodeURIComponent(
      `⭐ *BABAJI FOOTWEAR ORDER INTEREST* ⭐\n\n` +
      `Hello Babaji Footwear team, I want to buy this item now:\n\n` +
      `👟 *Product Name:* ${product.name}\n` +
      `🏷️ *Price:* $${product.price.toFixed(2)}\n` +
      `📏 *Selected Shoe Size:* Size ${selectedSize}\n` +
      `📦 *Quantity:* ${quantity}\n` +
      `🔗 *Item Link:* ${window.location.origin}/?product=${product.id}\n\n` +
      `Please let me know the availability and payment options!`
    );
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${formattedText}`, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6" id="product-detail-view">
      {/* Breadcrumbs Action bar */}
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold cursor-pointer border border-slate-200 px-4 py-2.5 rounded-lg bg-white shadow-sm hover:shadow-md transition-all text-sm"
        id="detail-back-button"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Shoe Catalog
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white p-4 sm:p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
        
        {/* Left Column: Image Area (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Main Showcase Image */}
          <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center p-6 overflow-hidden">
            {product.images && product.images.length > 0 ? (
              <img
                src={product.images[activeImageIndex]}
                alt={`${product.name} active display`}
                referrerPolicy="no-referrer"
                className="max-h-[380px] md:max-h-[420px] object-contain transition-all duration-350"
                id="main-shoe-display"
              />
            ) : (
              <div className="text-slate-300 flex flex-col items-center justify-center">
                <HelpCircle className="w-16 h-16 mb-2" />
                <span className="font-mono text-sm font-semibold">No Image Available</span>
              </div>
            )}

            {/* Float tags */}
            {showDiscount && (
              <span className="absolute top-4 left-4 bg-emerald-600 text-white font-bold px-3 py-1 text-xs rounded-md shadow">
                Save {discountPercent}% Off
              </span>
            )}

            {/* Favorite heart button */}
            <button 
              onClick={() => setFavorite(!favorite)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow text-slate-400 hover:text-slate-600 transition-all cursor-pointer"
            >
              <Heart className={`w-5 h-5 ${favorite ? "fill-rose-500 text-rose-500" : ""}`} />
            </button>
          </div>

          {/* Multiple Image Preview Sliders / Thumbnails */}
          {product.images && product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto py-1" id="shoe-thumbnails-slider">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-20 flex-shrink-0 bg-slate-50 border-2 rounded-lg overflow-hidden p-1.5 cursor-pointer transition-all ${
                    idx === activeImageIndex 
                      ? "border-amazon-orange bg-amber-50" 
                      : "border-slate-200 hover:border-slate-400"
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} referrerPolicy="no-referrer" className="w-full h-full object-contain" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Details & Ordering Actions (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col">
          {/* Headline Specs */}
          <div className="mb-4">
            <span className="text-xs bg-slate-100 text-slate-600 font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
              {product.category}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 leading-tight mb-2">
            {product.name}
          </h1>

          {/* Customer Reviews Area */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < roundedRating ? "fill-amber-400" : "text-slate-200"}`}
                />
              ))}
            </div>
            <span className="text-slate-550 font-bold text-sm">
              {product.rating} rating
            </span>
            <span className="text-slate-450 text-sm">|</span>
            <span className="text-sky-600 hover:underline font-semibold text-sm cursor-pointer">
              {product.reviewsCount} customer reviews
            </span>
          </div>

          <hr className="border-slate-200 mb-5" />

          {/* Pricing Block */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
            <div className="flex items-baseline gap-2">
              <span className="text-rose-600 font-extrabold text-2xl">-${discountPercent}%</span>
              <div className="flex items-baseline font-mono text-slate-900">
                <span className="text-lg leading-none font-semibold">$</span>
                <span className="text-3xl font-bold tracking-tight leading-none">
                  {product.price.toFixed(2)}
                </span>
              </div>
            </div>
            {showDiscount && (
              <p className="text-xs text-slate-500 mt-1">
                List Price: <span className="line-through font-mono">${product.originalPrice?.toFixed(2)}</span>
                <span className="text-emerald-700 font-semibold ml-2">Save ${ (product.originalPrice! - product.price).toFixed(2) }</span>
              </p>
            )}
            <p className="text-[11px] text-slate-500 mt-2 font-medium">✨ Inclusive of all taxes & doorstep delivery services</p>
          </div>

          {/* Full description */}
          <div className="mb-6">
            <h3 className="font-semibold text-slate-900 mb-2">Product Description</h3>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>

          {/* Core Specs attributes check */}
          <div className="mb-6">
            <h3 className="font-semibold text-slate-900 mb-2.5">Select Shoe Size (UK/US)</h3>
            <div className="flex gap-2 flex-wrap" id="size-options-container">
              {product.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`w-12 h-12 rounded-lg border font-mono font-bold flex items-center justify-center transition-all ${
                    sz === selectedSize
                      ? "bg-slate-900 border-slate-900 text-white shadow-md scale-105"
                      : "bg-white border-slate-200 text-slate-800 hover:border-slate-400"
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Block */}
          <div className="mb-6 flex items-center gap-4">
            <span className="font-semibold text-slate-900 text-sm">Quantity:</span>
            <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3.5 py-1.5 hover:bg-slate-100 text-slate-700 font-bold font-mono transition-colors"
              >
                -
              </button>
              <span className="px-4 py-1.5 text-sm font-semibold font-mono text-slate-800 bg-slate-50">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3.5 py-1.5 hover:bg-slate-100 text-slate-700 font-bold font-mono transition-colors"
              >
                +
              </button>
            </div>

            {/* Stock status indicator */}
            <div className="text-xs">
              {product.inStock ? (
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded">✓ In Stock & Ready</span>
              ) : (
                <span className="text-rose-600 font-bold bg-rose-50 px-2 py-1 rounded">⚠️ Backorder Available</span>
              )}
            </div>
          </div>

          {/* Transaction Action buttons */}
          <div className="mt-auto space-y-3 pt-4 border-t border-slate-100">
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-2.5 transition-all text-sm cursor-pointer shadow-sm ${
                isAdded 
                  ? "bg-emerald-600 text-white hover:bg-emerald-700" 
                  : "bg-amazon-yellow hover:bg-amber-400 text-amazon-dark active:scale-[0.98]"
              }`}
              id="add-to-cart-detail-btn"
            >
              {isAdded ? (
                <>
                  <Check className="w-5 h-5 animate-pulse" /> Added to Your Basket!
                </>
              ) : (
                <>
                  <ShoppingCart className="w-5 h-5" /> Add to Shopping Cart
                </>
              )}
            </button>

            {/* Buy Now WhatsApp Button */}
            <button
              onClick={handleBuyNowWhatsApp}
              className="w-full py-3.5 px-6 rounded-xl font-bold flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white transition-all text-sm shadow-md cursor-pointer active:scale-[0.98]"
              id="whatsapp-buy-now-btn"
            >
              <Send className="w-4.5 h-4.5 fill-current rotate-45 mr-1" />
              <span>Buy Now (Order via WhatsApp Express)</span>
            </button>
          </div>

          {/* Trust assurances strip */}
          <div className="grid grid-cols-2 gap-3 mt-6 text-[11px] text-slate-500" id="trust-features-strip">
            <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-100">
              <Award className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <span>100% Original Brand Sourcing</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-100">
              <Sparkles className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>Free Sizing Exchange Guarantee</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

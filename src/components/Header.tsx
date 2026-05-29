import React, { useState, useEffect, useRef } from "react";
import { ShoppingCart, UserCog, Search, ShoppingBag, Menu, X, Heart } from "lucide-react";
import { ViewState, CartItem } from "../types";
import { motion, AnimatePresence } from "motion/react";
import GoldCrownLogo from "./GoldCrownLogo";

interface HeaderProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  cart: CartItem[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export default function Header({
  currentView,
  setView,
  cart,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wishlistCount, setWishlistCount] = useState(0);
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [scrollVisible, setScrollVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setScrollVisible(false);
      } else {
        setScrollVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Categories helper data with thumbnails
  const categoryCircles = [
    {
      id: "men",
      name: "Men",
      imageUrl: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?q=80&w=150&auto=format&fit=crop",
      isSale: false,
      onClick: () => {
        setSelectedCategory("Formal");
        setSearchQuery("");
        setView({ type: "store" });
      }
    },
    {
      id: "women",
      name: "Women",
      imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=150&auto=format&fit=crop",
      isSale: false,
      onClick: () => {
        setSelectedCategory("Casual");
        setSearchQuery("");
        setView({ type: "store" });
      }
    },
    {
      id: "kids",
      name: "Kids",
      imageUrl: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=150&auto=format&fit=crop",
      isSale: false,
      onClick: () => {
        setSelectedCategory("Sports");
        setSearchQuery("");
        setView({ type: "store" });
      }
    },
    {
      id: "accessories",
      name: "Accessories",
      imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=150&auto=format&fit=crop",
      isSale: false,
      onClick: () => {
        setSelectedCategory("Boots");
        setSearchQuery("");
        setView({ type: "store" });
      }
    },
    {
      id: "sale",
      name: "Sale",
      imageUrl: "",
      isSale: true,
      onClick: () => {
        setSelectedCategory("All");
        setSearchQuery("Air"); // Air models represent hot sale items
        setView({ type: "store" });
      }
    }
  ];

  const handleWishlistClick = () => {
    setWishlistCount(wishlistCount + 1);
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: scrollVisible ? 0 : "-100%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ position: "sticky", top: 0, zIndex: 50 }}
      className="bg-white border-b border-gray-200 shadow-sm"
    >
      
      {/* 1. Top promotion alert banner: Black Background, high contrast White Bold text */}
      <div className="bg-black text-white text-[11px] md:text-sm font-bold text-center py-2 px-4 uppercase tracking-wider select-none overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🎁 Get 5% Extra Discount On Prepaid Orders For Orders Above ₹999! 🎁
        </motion.div>
      </div>

      {/* 2. Main Branding Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-6">
        
        {/* Left Side: Hamburger & Logo combination */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1 px-1.5 text-slate-800 hover:text-red-700 transition-colors focus:outline-none cursor-pointer"
            aria-label="Open navigation drawer"
          >
            <Menu className="w-6.5 h-6.5 stroke-[2]" />
          </button>

          {/* Elegant royal gold crown logo matching the uploaded image exactly */}
          <div
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
              setView({ type: "store" });
              setMobileMenuOpen(false);
            }}
            className="cursor-pointer select-none flex items-center group"
            id="babaji-metro-logo"
            title="Babaji Footwear - Home"
          >
            {/* The exact logo provided by the user modeled in highly premium SVG with 3D metallic textures */}
            <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 relative">
              <GoldCrownLogo className="w-full h-full transform group-hover:scale-105 transition-transform duration-300" showBackground={true} />
            </div>

            {/* Elegant Premium brand name next to the royal logo with stylish royal gold transition font */}
            <div className="flex flex-col ml-1.5 md:ml-3">
              <span className="font-serif font-black text-lg md:text-3.5xl tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-[#F4D068] via-[#FFDF73] to-[#AA771C] drop-shadow-sm uppercase leading-none group-hover:brightness-110 transition-all">
                Babaji
              </span>
              <span className="text-[8px] md:text-xs font-bold text-stone-500 tracking-[0.38em] leading-none mt-1 sm:mt-1.5 uppercase whitespace-nowrap">
                Footwear
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Wishlist Heart & Cart Actions */}
        <div className="flex items-center gap-4">
          
          {/* Wishlist Heart */}
          <button
            onClick={handleWishlistClick}
            className="relative p-2 text-slate-700 hover:text-rose-600 transition-colors cursor-pointer"
            title="Wishlist"
          >
            <Heart className={`w-6 h-6 stroke-[1.8] ${wishlistCount > 0 ? "fill-rose-500 text-rose-500 animate-bounce" : ""}`} />
            {wishlistCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-red-600 text-white text-[10px] font-extrabold w-4.5 h-4.5 rounded-full flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Cart Bag Icon with Red Round Counter Badge */}
          <button
            onClick={() => setView({ type: "cart" })}
            className="relative p-2 text-slate-700 hover:text-amber-500 transition-colors cursor-pointer"
            title="Shopping Cart"
          >
            <ShoppingBag className="w-6 h-6 stroke-[1.8]" />
            <AnimatePresence>
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                key={totalCartCount}
                className="absolute -top-0.5 -right-1 bg-red-600 text-white text-[10px] font-extrabold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow"
              >
                {totalCartCount}
              </motion.span>
            </AnimatePresence>
          </button>

          <button
            onClick={() => setView({ type: "admin" })}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 border border-slate-300 hover:border-slate-800 rounded px-3 py-1.5 font-bold transition-all cursor-pointer"
          >
            <UserCog className="w-3.5 h-3.5" />
            <span>Admin Console</span>
          </button>
        </div>
      </div>

      {/* 3. Search Bar Block - Rounded border, thin light grey, placeholder: "What are you looking for.." */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 font-medium text-sm rounded-lg py-2.5 pl-4 pr-12 border border-gray-200 outline-none focus:bg-white focus:ring-1 focus:ring-red-700 focus:border-red-700 transition-all font-sans"
          />
          <button 
            type="button"
            className="absolute right-0.5 top-0.5 bottom-0.5 px-4 rounded-r-lg text-[#9a1a1a] hover:bg-slate-100 transition-colors flex items-center justify-center cursor-pointer"
          >
            <Search className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* 4. Circular Category Navigation Slider Row (Highlighted in Green markup) */}
      <div className="bg-stone-50 border-t border-b border-gray-100 py-3.5 overflow-x-auto scrollbar-none">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-around md:justify-center gap-6 md:gap-14 whitespace-nowrap min-w-max">
          {categoryCircles.map((circle) => {
            const isSelected = selectedCategory.toLowerCase() === circle.name.toLowerCase() || 
                             (circle.id === "sale" && searchQuery === "Air");

            return (
              <div 
                key={circle.id} 
                onClick={circle.onClick}
                className="flex flex-col items-center gap-1.5 cursor-pointer group"
              >
                {/* Visual Circular Container */}
                <div 
                  className={`w-16 h-16 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center overflow-hidden border-2 transition-all duration-300 p-0.5 bg-amber-50 ${
                    isSelected 
                      ? "border-red-700 scale-105 shadow-md bg-white" 
                      : "border-gray-200 hover:border-red-700 hover:scale-103 bg-white"
                  }`}
                >
                  {circle.isSale ? (
                    <div className="w-full h-full rounded-full flex items-center justify-center bg-red-50 text-red-700 font-display font-extrabold text-sm md:text-base tracking-wider shadow-inner group-hover:bg-red-100 transition-colors">
                      SALE
                    </div>
                  ) : (
                    <div className="w-full h-full rounded-full overflow-hidden bg-stone-100 flex items-center justify-center">
                      <img
                        src={circle.imageUrl}
                        alt={circle.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="eager"
                      />
                    </div>
                  )}
                </div>

                {/* Categories circle lower text level */}
                <span className="text-xs font-semibold text-slate-800 transition-colors group-hover:text-red-700 tracking-wide">
                  {circle.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer Drawer list of directories */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-full left-0 right-0 h-screen bg-black/50 backdrop-blur-xs z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: -160 }}
              animate={{ x: 0 }}
              exit={{ x: -160 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="w-64 bg-white h-full shadow-2xl p-6 flex flex-col gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                <span className="font-display font-bold text-[#9a1a1a] tracking-wider text-sm uppercase">Menu Options</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="flex flex-col gap-3.5 font-semibold text-sm text-slate-800 mt-4">
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                    setView({ type: "store" });
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-3 hover:bg-red-50 hover:text-red-700 rounded transition-all"
                >
                  ⚡ Browse Shoe Store
                </button>

                <button
                  onClick={() => {
                    setView({ type: "cart" });
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-3 hover:bg-red-50 hover:text-red-700 rounded transition-all flex justify-between items-center"
                >
                  <span>🛍️ View Basket Cart</span>
                  <span className="bg-red-600 text-white text-xs font-black px-2 py-0.5 rounded-full">{totalCartCount}</span>
                </button>

                <button
                  onClick={() => {
                    setView({ type: "admin" });
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 px-3 hover:bg-red-50 hover:text-red-700 rounded transition-all flex items-center gap-2 text-[#9a1a1a]"
                >
                  <UserCog className="w-4 h-4" />
                  <span>Admin Portal</span>
                </button>
              </div>

              <div className="mt-auto pb-12 text-xs text-slate-400 space-y-2 border-t border-gray-100 pt-4">
                <p>📍 Fast Delivery across All Pin Codes</p>
                <p>💬 Direct Order Support 24/7</p>
                <p>© Babaji Footwear Co.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}

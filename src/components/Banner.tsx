import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Zap, Instagram, Phone, MapPin, Sparkles, AlertCircle, ShoppingBag, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import GoldCrownLogo from "./GoldCrownLogo";

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + 3) % 3);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % 3);
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-950 group" style={{ minHeight: "410px" }} id="interactive-brand-banners">
      
      {/* Absolute Header Ambient Beam */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-amber-500 to-yellow-500 z-30" />

      {/* Main Slide Carousel container */}
      <div className="relative w-full" style={{ minHeight: "410px" }}>
        <AnimatePresence mode="wait">
          {currentIndex === 0 && <StorefrontSlide key="slide-store" />}
          {currentIndex === 1 && <LuxuryBagsSlide key="slide-bags" />}
          {currentIndex === 2 && <FlyerArtSlide key="slide-flyer" />}
        </AnimatePresence>
      </div>

      {/* Slide Navigation Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3.5 z-30 bg-slate-950/80 backdrop-blur-md py-1.5 px-4 rounded-full border border-white/10 shadow-lg">
        {[0, 1, 2].map((idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? "bg-amber-400 w-6.5 shadow-sm shadow-amber-400/50" 
                : "bg-white/30 hover:bg-white/60 w-2.5"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Interactive Sliders navigation chevrons */}
      <button
        onClick={handlePrev}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 border border-white/10 text-white z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
        aria-label="Previous Banner"
      >
        <ChevronLeft className="w-5.5 h-5.5 text-amber-300" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3.5 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-slate-900/40 hover:bg-slate-900/80 border border-white/10 text-white z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95"
        aria-label="Next Banner"
      >
        <ChevronRight className="w-5.5 h-5.5 text-amber-300" />
      </button>
    </div>
  );
}

// ==========================================
// VECTOR SLIDE 1: THE STOREFRONT OF BABAJI
// ==========================================
function StorefrontSlide() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-emerald-950 via-[#06241a] to-slate-950 flex flex-col md:flex-row items-stretch overflow-hidden font-sans"
    >
      {/* Decorative Grid Mesh Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04]" />

      {/* LEFT CONTENT: Promotional Info */}
      <div className="relative z-10 w-full md:w-5/12 flex flex-col justify-center px-6 md:px-12 py-8 text-white">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="space-y-4"
        >
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-md tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 fill-current text-slate-950" /> PHYSICAL STOREFRONT
          </span>
          
          <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-white tracking-wide leading-tight drop-shadow-md">
            Babaji <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-300 to-yellow-400">Showroom</span>
          </h2>
          
          <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed">
            Welcome to Punjab's leading family footwear destination. Step inside our fully stocked megastore at the Nawanshahr central terminal!
          </p>

          <div className="space-y-2 mt-4 text-xs md:text-sm text-amber-100">
            <a 
              href="https://maps.app.goo.gl/2RQAgymSiZBTvqJA7?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 hover:text-amber-300 transition-colors group/banner-loc cursor-pointer"
            >
              <MapPin className="w-4.5 h-4.5 text-emerald-400 shrink-0 group-hover/banner-loc:scale-110 transition-transform" />
              <span className="underline decoration-dashed decoration-emerald-400/40 underline-offset-4">Main Bus Stop Aur, Distt. S.B.S. Nagar, Nawanshahr</span>
            </a>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4.5 h-4.5 text-yellow-400 shrink-0" />
              <span className="font-mono font-bold tracking-wider">+91 98888-91598</span>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a 
              href="https://wa.me/919888891598?text=Hello%20Babaji%20Footwear!%20I%20am%20interested%20in%20your%2520new%20collection."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-sans transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-md hover:shadow-lg hover:shadow-emerald-500/15 cursor-pointer"
            >
              <span>Verify Direct Availability</span>
              <span className="bg-slate-950 text-emerald-400 font-mono text-[9px] px-1.5 py-0.5 rounded-md font-bold">LIVE</span>
            </a>

            <a 
              href="https://maps.app.goo.gl/2RQAgymSiZBTvqJA7?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1b3d2b] hover:bg-[#25543c] border border-emerald-500/35 text-white font-bold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider font-sans transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-md cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
              <span>Get Directions</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE: Artistically Stylized Interactive Storefront Illustration */}
      <div className="relative w-full md:w-7/12 flex items-center justify-center p-4 md:p-8 bg-slate-900/40 border-l border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full max-w-lg bg-[#14231b] border-4 border-emerald-800 rounded-2xl relative shadow-2xl p-4 flex flex-col justify-between"
          style={{ minHeight: "330px" }}
        >
          {/* Main Billboard Header Banner (In Emerald Green with Golden Accents) */}
          <div className="w-full bg-slate-950 border-2 border-amber-500 rounded-lg p-2.5 text-center relative shadow-md">
            <div className="w-18 h-18 mx-auto -mb-1">
              <GoldCrownLogo showBackground={false} />
            </div>
            
            <div className="border-t border-amber-500/30 my-1 px-1 flex items-center justify-between text-[8px] md:text-[9px] text-[#FFedd5] font-semibold tracking-wider font-mono">
              <span>📍 Aur (Nawanshahr)</span>
              <span>📞 M: 98888-91598</span>
            </div>
          </div>

          {/* Awning Striped Canopy with heavy 3D folds */}
          <div className="w-full h-4 relative flex items-stretch mt-1 z-10">
            {Array.from({ length: 16 }).map((_, i) => (
              <div 
                key={i} 
                className={`flex-1 h-full rounded-b-md ${
                  i % 2 === 0 ? "bg-emerald-900 border-b-2 border-amber-500" : "bg-amber-100"
                }`} 
              />
            ))}
          </div>

          {/* Interactive virtual shoe shelves representation */}
          <div className="flex-1 mt-3 grid grid-cols-4 gap-2 mb-2 relative overflow-hidden bg-[#0c1811] border border-emerald-900/60 p-2.5 rounded-lg">
            {/* Mock Shoes Grid */}
            {[
              { color: "text-orange-500", label: "Sports Air", price: "99" },
              { color: "text-amber-700", label: "Oxfords", price: "120" },
              { color: "text-teal-400", label: "Sneakers", price: "79" },
              { color: "text-rose-500", label: "Speedrun", price: "110" },
              { color: "text-emerald-500", label: "Vagabonds", price: "65" },
              { color: "text-sky-400", label: "Aerosols", price: "85" },
              { color: "text-amber-500", label: "Classics", price: "145" },
              { color: "text-cyan-400", label: "Breeze", price: "55" }
            ].map((shoe, idx) => (
              <div key={idx} className="bg-slate-900/90 border border-emerald-950 hover:border-amber-500/50 p-1.5 rounded-md flex flex-col justify-between items-center transition-colors group cursor-pointer">
                {/* SVG Mini Shoe representation */}
                <svg viewBox="0 0 24 12" className={`w-10 h-7 ${shoe.color} fill-current`}>
                  <path d="M21 7c0-2-4-4.5-9-4.5C9 2.5 5 4 3 6c-1 1-1.5 2-1 3.5.5 1.5 2 2 4.5 1.5 4-1 9 1 12-2.5.5-.5 2.5-1 2.5-1.5z" />
                  <line x1="4" y1="11" x2="18" y2="10" stroke="currentColor" strokeWidth="1" />
                </svg>
                <div className="text-center">
                  <p className="text-[7px] text-white font-semibold truncate max-w-[50px]">{shoe.label}</p>
                  <p className="text-[7px] text-amber-400 font-mono font-bold">${shoe.price}</p>
                </div>
              </div>
            ))}

            {/* Overlapping Shop Assistants Representation (Avatar Silhouettes) */}
            <div className="absolute right-2 bottom-2 bg-emerald-950/90 border border-emerald-800 rounded-md py-1 px-2 flex items-center gap-1.5 text-[8px] text-zinc-100 font-medium select-none shadow-md z-20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Full Stock Checked</span>
            </div>
          </div>

          {/* Stand banner with stack of branded cardboard boxes */}
          <div className="flex justify-between items-end border-t border-emerald-900/50 pt-2 text-[10px] text-emerald-400 select-none">
            <div className="flex gap-1.5">
              <span className="bg-orange-600 text-white font-mono px-1 rounded-sm text-[8px] font-bold">NIKE</span>
              <span className="bg-blue-600 text-white font-mono px-1 rounded-sm text-[8px] font-bold">ADIDAS</span>
              <span className="bg-yellow-600 text-white font-mono px-1 rounded-sm text-[8px] font-bold">BABAJI</span>
            </div>
            <span className="font-semibold text-emerald-300">★ Quality Comfort Trust ★</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ==========================================
// VECTOR SLIDE 2: THE CAR & LUXURY BAGS
// ==========================================
function LuxuryBagsSlide() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-stone-900 flex flex-col md:flex-row items-stretch overflow-hidden font-sans"
    >
      {/* LUXURY CAR SEAT QUILTED PATTERN (SVG Diamond Grid backdrop) */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="quiltedPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 0,20 L 20,0 L 40,20 L 20,40 Z" fill="none" stroke="#ffffff" strokeWidth="0.5" />
              <circle cx="20" cy="20" r="1.5" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#quiltedPattern)" />
        </svg>
      </div>

      {/* Ambient Spotlight Glares */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-80 h-80 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-80 h-80 rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      {/* LEFT PORTION: Summary text */}
      <div className="relative z-10 w-full md:w-5/12 flex flex-col justify-center px-6 md:px-12 py-8 text-white">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="space-y-4"
        >
          <span className="inline-flex items-center gap-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-[10px] font-extrabold px-3 py-1 rounded-md tracking-wider uppercase">
            👑 OFFICIALLY IMPORTED
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black uppercase tracking-tight text-white leading-tight">
            Original <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500">Premium</span> Bags
          </h2>
          <p className="text-sm text-gray-300 font-medium">
            Satisfying every walk of life. Our custom emerald and white bags symbolize quality assurance, comfort parameters, and deep community trust.
          </p>

          <div className="grid grid-cols-2 gap-3.5 pt-2">
            <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
              <span className="text-xs text-amber-300 font-bold block uppercase tracking-wide">Quality bags</span>
              <span className="text-xs text-gray-400">Emerald-gold theme</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-3 rounded-xl">
              <span className="text-xs text-emerald-400 font-bold block uppercase tracking-wide">Brand Variety</span>
              <span className="text-xs text-gray-400">Premium shoe packaging</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT PORTION: Shopping bags rendering */}
      <div className="relative w-full md:w-7/12 flex items-center justify-center p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex items-end gap-5 md:gap-8 max-w-md w-full justify-center select-none"
        >
          
          {/* GREEN BAG (BABAJI CROWN BAG) */}
          <div className="w-[170px] md:w-[190px] bg-[#112d1b] border border-amber-500/20 rounded-lg p-4 flex flex-col justify-between shadow-2xl relative select-none transform hover:-rotate-1 hover:-translate-y-1 transition-all duration-300" style={{ height: "230px" }}>
            
            {/* Bag golden handles */}
            <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-[70px] h-4 border-2 border-dashed border-amber-500 rounded-t-full pointer-events-none" />

            {/* Bag header crown insignia */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto -mb-1">
                <GoldCrownLogo showBackground={false} />
              </div>
              <div className="h-[1px] w-8 bg-amber-500/50 mx-auto mt-1.5" />
            </div>

            {/* Middle tagline content */}
            <div className="text-center py-2">
              <p className="text-[7.5px] text-emerald-200 uppercase tracking-widest font-black leading-tight">
                ALL KINDS OF FOOTWEAR
              </p>
              <p className="text-[10px] text-amber-300 uppercase tracking-[0.1em] font-serif font-black mt-1">
                NEW COLLECTION
              </p>
            </div>

            {/* Gold stripes outline at bottom */}
            <div className="border-t border-amber-500/20 pt-1.5 text-center">
              <span className="text-[7px] text-amber-400/80 tracking-widest font-mono select-none block uppercase">
                👑 PREMIER CLASS 👑
              </span>
            </div>
          </div>

          {/* WHITE BRAND BAG */}
          <div className="w-[170px] md:w-[190px] bg-[#fdfdfc] border border-stone-200 rounded-lg p-4 flex flex-col justify-between shadow-2xl relative select-none transform hover:rotate-1 hover:-translate-y-1 transition-all duration-300" style={{ height: "230px" }}>
            
            {/* Bag dark ribbon handles */}
            <div className="absolute top-[-15px] left-1/2 -translate-x-1/2 w-[70px] h-4 border-2 border-dashed border-zinc-400 rounded-t-full pointer-events-none" />

            {/* Branded Athletics Logos Icons Block */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between gap-1">
                {/* Vector Skewed Adidas stripes */}
                <div className="flex flex-col items-center select-none shrink-0" title="adidas">
                  <svg viewBox="0 0 24 16" className="w-8 h-4 text-slate-900 fill-current">
                    <rect x="5" y="8" width="3" height="8" transform="skewX(-30)" />
                    <rect x="11" y="4" width="3" height="12" transform="skewX(-30)" />
                    <rect x="17" y="1" width="3" height="15" transform="skewX(-30)" />
                  </svg>
                  <span className="text-[5.5px] font-semibold tracking-wider font-sans text-slate-800 uppercase mt-0.5" style={{ transform: "scale(0.85)" }}>adidas</span>
                </div>

                {/* Vector Nike Swoosh icon */}
                <div className="flex flex-col items-center select-none shrink-0" title="nike">
                  <svg viewBox="0 0 24 10" className="w-8 h-4 text-slate-900 fill-current">
                    <path d="M2.5 7.5c2-1 5.5-2.5 8.5-3.5 2.5-.8 4.5-1 5.5-1-.2.5-.8 1.5-1.5 2.2-2 1.8-4.5 3-7.5 4 C5 10 3.5 9 2.5 7.5z" />
                  </svg>
                  <span className="text-[5.5px] font-semibold tracking-wider font-sans text-slate-800 uppercase mt-0.5" style={{ transform: "scale(0.85)" }}>nike</span>
                </div>

                {/* Vector Jordan Jumpman Icon */}
                <div className="flex flex-col items-center select-none shrink-0" title="jordan">
                  <svg viewBox="0 0 24 16" className="w-7 h-4 text-slate-900 fill-current">
                    {/* Simplified basketball player jumping silhouette */}
                    <circle cx="12" cy="2.5" r="1.3" />
                    <path d="M12 4 L11 8 L8 14 L9 15 L12.5 10 L15 15 L16 14.5 L13 8 Z" />
                    <path d="M10 5 L7 4 L5 4 L6 5 L9 6 Z" />
                    <path d="M14 5 L18 L19 L19.2 1.5 L18 1.5 L15 4 Z" />
                  </svg>
                  <span className="text-[5.5px] font-semibold tracking-wider font-mono text-slate-800 uppercase mt-0.5" style={{ transform: "scale(0.85)" }}>Jordan</span>
                </div>
              </div>

              {/* Number and Instagram ID details matching photo */}
              <div className="border-t border-b border-stone-200/60 py-1.5 space-y-1 text-center font-sans tracking-wide">
                <p className="text-[8.5px] font-bold text-slate-900 font-mono">
                  M. 98888-91598
                </p>
                <p className="text-[7.5px] font-semibold text-emerald-800 flex items-center justify-center gap-0.5">
                  <Instagram className="w-2.5 h-2.5 text-pink-600 inline" />
                  <span>@baba_ji_foot_wear_store</span>
                </p>
              </div>
            </div>

            {/* Address Details matching physical package */}
            <div className="space-y-1">
              <a 
                href="https://maps.app.goo.gl/2RQAgymSiZBTvqJA7?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-emerald-800 hover:underline transition-colors text-center cursor-pointer"
              >
                <p className="text-[6.5px] font-bold text-slate-500 uppercase tracking-tight leading-tight">
                  Main Bus Stop Aur, <br/>
                  Distt. S.B.S. Nagar, Nawanshahr
                </p>
              </a>
              
              <div className="h-[1px] w-full bg-stone-200" />

              <p className="text-[7.5px] font-serif font-black text-slate-800 tracking-widest text-center mt-1 select-none">
                Quality • Comfort • Trust
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ==========================================
// VECTOR SLIDE 3: THE HERITAGE FLYER& MAP
// ==========================================
function FlyerArtSlide() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 w-full h-full bg-[#e3e8e4] flex flex-col md:flex-row items-stretch overflow-hidden font-sans border-b border-stone-200"
    >
      {/* Decorative Grid backdrop pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cad4cb_1px,transparent_1px),linear-gradient(to_bottom,#cad4cb_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* LEFT PORTION: Summary text block */}
      <div className="relative z-10 w-full md:w-5/12 flex flex-col justify-center px-6 md:px-12 py-8 text-emerald-950">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="space-y-4"
        >
          <span className="inline-flex items-center gap-1.5 bg-emerald-800 text-white text-[10px] font-extrabold px-3 py-1 rounded-md tracking-wider uppercase shadow-sm">
            🌾 PUNJAB LOCAL HERITAGE
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-black uppercase text-emerald-950 leading-tight">
            SBS Nagar <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-600">Flyer Art</span>
          </h2>
          <p className="text-sm font-medium text-emerald-900/80 leading-relaxed">
            Proudly representing Aur, SBS Nagar in Punjab with verified heritage, elite athletic brands, and local community-driven terms.
          </p>

          <div className="border-l-4 border-emerald-800 pl-4 py-1 italic text-xs text-emerald-950/95 font-medium space-y-1.5">
            <p className="font-hindi text-[13px] font-bold">
              ਨੋਟ : ਫੈਸ਼ਨ ਦੇ ਦੌਰ ਚ ਗਾਰੰਟੀ ਦੀ ਆਸ ਨਾ ਰੱਖੋ, ਵਿਕਿਆ ਮਾਲ ਵਾਪਿਸ ਨਹੀ ਹੋਵੇਗਾ।
            </p>
            <p className="text-[10px] text-emerald-800 font-semibold opacity-75">
              (Note: Local motto enforcing fashion era standards and firm sales)
            </p>
          </div>
        </motion.div>
      </div>

      {/* RIGHT PORTION: Authentic flyer reconstruction */}
      <div className="relative w-full md:w-7/12 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full max-w-sm bg-[#ECF1EC] border-2 border-emerald-800 rounded-xl relative shadow-xl overflow-hidden flex flex-col justify-between"
          style={{ height: "340px" }}
        >
          {/* MAP WATERMARK BACKGROUND (Mock state shape using beautiful circular SVG lines representing Punjab area) */}
          <div className="absolute inset-x-0 top-14 bottom-12 flex items-center justify-center opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-[180px] h-[180px] text-emerald-800 fill-current">
              {/* Complex curved path representing regional boundary */}
              <path d="M30,10 C45,15 65,5 80,15 C95,25 90,45 85,60 C80,75 75,90 55,95 C35,100 15,85 10,65 C5,45 15,30 15,15 C15,10 25,5 30,10 Z" />
            </svg>
          </div>

          {/* FLYER TOP BAR: Phone and QR scan box */}
          <div className="p-3 flex items-start justify-between z-10">
            {/* Phone contact */}
            <div className="space-y-1">
              <span className="text-[8px] bg-emerald-900 text-[#ECF1EC] rounded px-1.5 py-0.5 font-bold uppercase tracking-wide">Contact</span>
              <p className="text-[11px] font-extrabold text-emerald-950 tracking-wider font-mono">M. 98888-91598</p>
            </div>

            {/* Simulated QR Code representing the Instagram profile */}
            <div className="bg-white border border-emerald-900/45 p-1 rounded-md text-center pointer-events-none select-none">
              <div className="w-10 h-10 border-2 border-emerald-800 rounded flex flex-col items-center justify-center relative p-1">
                {/* QR grid mock design */}
                <div className="w-full h-full bg-emerald-950/5 grid grid-cols-4 gap-[2px]">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`rounded-[1px] ${
                        i % 3 === 0 || i % 7 === 1 ? "bg-emerald-950" : "bg-transparent"
                      }`} 
                    />
                  ))}
                </div>
                {/* Embedded Mini Insta Icon in core center of QR */}
                <div className="absolute inset-0 m-auto w-3.5 h-3.5 bg-white flex items-center justify-center rounded-sm">
                  <Instagram className="w-2.5 h-2.5 text-emerald-800 fill-current" />
                </div>
              </div>
              <span className="text-[5.5px] font-bold text-slate-800 uppercase block mt-0.5 tracking-wide leading-none">@baba_ji_foot_wear_store</span>
            </div>
          </div>

          {/* FLYER CENTER LOGO DISPLAY */}
          <div className="text-center z-10 px-4">
            <div className="w-24 h-24 mx-auto mb-1">
              <GoldCrownLogo showBackground={false} />
            </div>

            {/* floating athletic brand silhouettes inside the flyer space */}
            <div className="flex items-center justify-center gap-5 mt-4 opacity-75">
              {/* Nike Swoosh */}
              <svg viewBox="0 0 24 10" className="w-7 h-3 text-emerald-950 fill-current" title="nike">
                <path d="M2.5 7.5c2-1 5.5-2.5 8.5-3.5 2.5-.8 4.5-1 5.5-1-.2.5-.8 1.5-1.5 2.2-2 1.8-4.5 3-7.5 4 C5 10 3.5 9 2.5 7.5z" />
              </svg>
              {/* Adidas skew stripes */}
              <svg viewBox="0 0 24 16" className="w-7 h-3 text-emerald-950 fill-current" title="adidas">
                <rect x="5" y="8" width="3.5" height="8" transform="skewX(-30)" />
                <rect x="11" y="4" width="3.5" height="12" transform="skewX(-30)" />
                <rect x="17" y="1" width="3.5" height="15" transform="skewX(-30)" />
              </svg>
              {/* Jumpman */}
              <svg viewBox="0 0 24 16" className="w-6.5 h-3.5 text-emerald-950 fill-current" title="jordan">
                <circle cx="12" cy="2.5" r="1.3" />
                <path d="M12 4 L11 8 L8 14 L9 15 L12.5 10 L15 15 L16 14.5 L13 8 Z" />
                <path d="M10 5 L7 4 L5 4 L6 5 L9 6 Z" />
                <path d="M14 5 L18 L19 L19.2 1.5 L18 1.5 L15 4 Z" />
              </svg>
            </div>

            {/* Collection tag */}
            <div className="mt-3.5">
              <span className="inline-block border border-dashed border-emerald-800 px-3.5 py-0.5 rounded-full text-[9px] font-bold text-emerald-900 tracking-wider">
                ALL KINDS OF FOOTWEAR • NEW COLLECTION
              </span>
            </div>
          </div>

          {/* FLYER BOTTOM DISCLAIMER FOOTER BAR (With Punjab/regional details) */}
          <div className="bg-emerald-900 text-[#ECF1EC] p-2.5 text-center z-10 relative">
            <a 
              href="https://maps.app.goo.gl/2RQAgymSiZBTvqJA7?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-200 hover:underline transition-colors inline-block cursor-pointer text-center"
            >
              <p className="text-[8.5px] font-bold tracking-wider leading-tight uppercase">
                Main Bus Stop Aur, Distt. S.B.S. Nagar, Nawanshahr
              </p>
            </a>
            
            <div className="h-[1px] bg-emerald-800 my-1 opacity-50" />

            {/* Punjabi Motto translation from exact original photo */}
            <p className="text-[10px] md:text-[11px] font-extrabold text-[#FED7AA] tracking-wide mt-0.5 leading-snug">
              ਨੋਟ : ਫੈਸ਼ਨ ਦੇ ਦੌਰ ਚ ਗਾਰੰਟੀ ਦੀ ਆਸ ਨਾ ਰੱਖੋ, ਵਿਕਿਆ ਮਾਲ ਵਾਪਿਸ ਨਹੀ ਹੋਵੇਗਾ।
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

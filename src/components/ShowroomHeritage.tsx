import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Instagram, Sparkles, CheckCircle, ShieldAlert, Image as ImageIcon, ExternalLink, ArrowRight } from "lucide-react";
import GoldCrownLogo from "./GoldCrownLogo";

export default function ShowroomHeritage() {
  const [activePhoto, setActivePhoto] = useState<"storefront" | "bags" | "flyer">("storefront");

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm max-w-7xl mx-auto mt-8 mb-6" id="showroom-heritage-section">
      
      {/* Header Accent block */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
              <Sparkles className="w-3 h-3 fill-emerald-850" /> Real Experience
            </span>
            <span className="bg-amber-100 text-amber-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">
              Nawanshahr, Punjab
            </span>
          </div>
          <h2 className="text-2xl md:text-3.5xl font-serif font-black text-slate-900 tracking-tight leading-none uppercase">
            Our Physical Store & Exclusive Branding
          </h2>
          <p className="text-slate-500 text-xs md:text-sm mt-1.5 font-medium max-w-xl">
            Take a digital tour inside Punjab's supreme footwear destination. Replicating our real-world store, custom bags, and regional flyer designs with absolute high-fidelity precision.
          </p>
        </div>

        {/* Tab Switchers representing the 3 photos exactly */}
        <div className="flex w-full md:w-auto bg-slate-100 p-1.5 rounded-2xl border border-slate-200/60 overflow-x-auto gap-1">
          <button
            onClick={() => setActivePhoto("storefront")}
            className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activePhoto === "storefront"
                ? "bg-slate-950 text-white shadow-md transform scale-102"
                : "text-slate-600 hover:bg-slate-200/60"
            }`}
          >
            <ImageIcon className="w-4 h-4 text-emerald-400" />
            <span>🏪 Real Storefront</span>
          </button>

          <button
            onClick={() => setActivePhoto("bags")}
            className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activePhoto === "bags"
                ? "bg-slate-950 text-white shadow-md transform scale-102"
                : "text-slate-600 hover:bg-slate-200/60"
            }`}
          >
            <ImageIcon className="w-4 h-4 text-amber-400" />
            <span>🛍️ Branding Bags</span>
          </button>

          <button
            onClick={() => setActivePhoto("flyer")}
            className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activePhoto === "flyer"
                ? "bg-slate-950 text-white shadow-md transform scale-102"
                : "text-slate-600 hover:bg-slate-200/60"
            }`}
          >
            <ImageIcon className="w-4 h-4 text-cyan-400" />
            <span>🗺️ Punjab Flyer Map</span>
          </button>
        </div>
      </div>

      {/* Main viewport with transition animation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Detail & Story list (cols-5) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <AnimatePresence mode="wait">
            {activePhoto === "storefront" && (
              <motion.div
                key="story-storefront"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <h3 className="text-xl md:text-2xl font-serif font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2 uppercase tracking-tight">
                  <span className="text-emerald-600 font-mono text-base bg-emerald-50 px-2.5 py-1 rounded-md">PHOTO 1</span>
                  <span>The Real Nawanshahr Megastore</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  This card depicts the exact entrance of our physical megastore at <strong className="text-emerald-950">Main Bus Stop Aur, S.B.S Nagar, Nawanshahr</strong>.
                </p>
                
                <div className="space-y-3 bg-slate-50 border border-slate-100 rounded-2xl p-4 text-xs md:text-sm">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-bold block">Grand Emerald-Green Signboard</strong>
                      <span className="text-slate-500 text-xs">Features our majestic golden crown logo and bold "BABAJI FOOT WEAR" display text with the official contact coordinates.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-bold block">Fully Stocked Footwear Interior</strong>
                      <span className="text-slate-500 text-xs text-wrap">Wall-to-wall cabinets showing thousands of original shoe boxes from Nike, Adidas, Jordan, and our custom private selections.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-bold block">Local Punjab Community Warmth</strong>
                      <span className="text-slate-500 text-xs">Loved by families across Distt. S.B.S. Nagar, welcoming walk-ins every day alongside our digital direct dispatch.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://maps.app.goo.gl/2RQAgymSiZBTvqJA7?g_st=ac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-all uppercase tracking-wider group cursor-pointer"
                  >
                    <span>View Store Ground Route</span>
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )}

            {activePhoto === "bags" && (
              <motion.div
                key="story-bags"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <h3 className="text-xl md:text-2xl font-serif font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2 uppercase tracking-tight">
                  <span className="text-amber-600 font-mono text-base bg-amber-50 px-2.5 py-1 rounded-md">PHOTO 2</span>
                  <span>Premium Packing & Shopping Bags</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  This card depicts our custom branded carry packaging, showcasing both the <strong className="text-emerald-950">Emerald-Gold Babaji Bag</strong> and our <strong className="text-stone-700">Official Multibrand Bag</strong> resting inside a luxury vehicle.
                </p>
                
                <div className="space-y-3 bg-slate-50 border border-slate-100 rounded-2xl p-4 text-xs md:text-sm">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-bold block">The Emerald Crown Bag</strong>
                      <span className="text-slate-500 text-xs">Rich forest green thick paper carrying bag with golden crown seal, highlighting "ALL KINDS OF FOOTWEAR" in classic typography.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-bold block">The Athletics Multibrand Bag</strong>
                      <span className="text-slate-500 text-xs">Classic white background paper box carry featuring Nike, Adidas and Jordan Jumpman emblems, showing the registered telephone line and Instagram handle.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-bold block">Standard of Excellence</strong>
                      <span className="text-slate-500 text-xs">Every purchase is hand-packed inside these gorgeous luxury bags. Comfort, trust and high-end experience from checkout to unboxing.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/919888891598?text=Hello%20Babaji%20Footwear!%20I%2520want%2520to%2520inquire%2520about%2520buying%2520shoes%2520in%2520the%2520official%2520luxury%2520bags."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25543c] hover:bg-[#2c6347] text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-all uppercase tracking-wider group cursor-pointer"
                  >
                    <span>Inquire About Ordering</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )}

            {activePhoto === "flyer" && (
              <motion.div
                key="story-flyer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <h3 className="text-xl md:text-2xl font-serif font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2 uppercase tracking-tight">
                  <span className="text-cyan-600 font-mono text-base bg-cyan-50 px-2.5 py-1 rounded-md">PHOTO 3</span>
                  <span>Punjab map Regional Flyer</span>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  This card depicts the official printed promotional brochure of <strong className="text-emerald-950">Babaji Footwear Co.</strong> showing the geographic border layout of Shaheed Bhagat Singh Nagar (Nawanshahr), Punjab.
                </p>
                
                <div className="space-y-3 bg-red-50/50 border border-red-100 rounded-2xl p-4 text-xs md:text-sm">
                  <div className="flex items-start gap-2.5 text-orange-950">
                    <ShieldAlert className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-extrabold block uppercase tracking-wide">Punjabi Exchange Policy Statement</strong>
                      <span className="text-xs font-hindi font-bold block text-[#C2410C] mt-0.5">
                        ਨੋਟ : ਫੈਸ਼ਨ ਦੇ ਦੌਰ ਚ ਗਾਰੰਟੀ ਦੀ ਆਸ ਨਾ ਰੱਖੋ, ਵਿਕਿਆ ਮਾਲ ਵਾਪਿਸ ਨਹੀ ਹੋਵੇਗਾ।
                      </span>
                      <span className="text-slate-500 text-[11px] leading-tight block mt-1">
                        "Store Policy: In this hyper-dynamic era of modern fashion, items once purchased are not eligible for cash refunds. Guarantee terms are not applicable."
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-cyan-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-900 font-bold block">S.B.S Nagar Map Watermark</strong>
                      <span className="text-slate-500 text-xs">The high-contrast olive outline represents S.B.S Nagar district, signaling local manufacturing pride and roots.</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://www.instagram.com/baba_ji_foot_wear_store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:opacity-90 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-md transition-all uppercase tracking-wider group cursor-pointer"
                  >
                    <Instagram className="w-4.5 h-4.5" />
                    <span>Scan Instagram Catalog</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick contact banner bottom details */}
          <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-3.5 flex items-center justify-between text-xs text-slate-500 font-mono font-medium">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-emerald-600" /> Aur, S.B.S Nagar</span>
            <span className="flex items-center gap-1"><Phone className="w-4 h-4 text-amber-500" /> M: 98888-91598</span>
          </div>
        </div>

        {/* Right Side: High-Fidelity Interactive Visualizer representing the Photos (cols-7) */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-6 flex items-center justify-center min-h-[460px] relative overflow-hidden shadow-inner">
          
          {/* Ambient space grid styling */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]" />
          
          <AnimatePresence mode="wait">
            
            {/* PHOTO 1: STOREFRONT FACADE VISUALIZER */}
            {activePhoto === "storefront" && (
              <motion.div
                key="view-storefront"
                initial={{ opacity: 0, scale: 0.95, rotate: -0.5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotate: 0.5 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-lg bg-[#0e1f16] border-4 border-emerald-800 rounded-2xl relative shadow-2xl p-4 flex flex-col justify-between"
                style={{ minHeight: "380px" }}
              >
                {/* Store Main Green Signboard */}
                <div className="w-full bg-[#112d1c] border-2 border-amber-500/90 rounded-xl p-3 text-center relative shadow-md">
                  <div className="w-14 h-14 mx-auto -mb-0.5">
                    <GoldCrownLogo showBackground={false} />
                  </div>
                  
                  {/* Store Name font designed same as photograph */}
                  <h1 className="text-2xl md:text-3xl font-serif font-extrabold tracking-widest text-[#FFF7ED] uppercase leading-none select-none">
                    BABAJI
                  </h1>
                  <p className="text-[9px] text-amber-400 font-extrabold tracking-[0.3em] uppercase select-none leading-none mt-1">
                    FOOT WEAR
                  </p>

                  <div className="border-t border-amber-500/30 my-2 px-1 flex items-center justify-between text-[7.5px] md:text-[8px] text-[#FED7AA] font-semibold tracking-wider font-mono">
                    <span>📍 Main Bus Stop Aur, SBS Nagar, Nawanshahr</span>
                    <span>📞 M: 98888-91598</span>
                  </div>
                </div>

                {/* Awning green/yellow Striped Canopy */}
                <div className="w-full h-5 relative flex items-stretch mt-1.5 z-10 shadow-md">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`flex-1 h-full rounded-b-md ${
                        i % 2 === 0 ? "bg-emerald-900 border-b-2 border-amber-450" : "bg-amber-100"
                      }`} 
                    />
                  ))}
                  {/* Gold trim banner overlay under canopy */}
                  <div className="absolute inset-x-0 bottom-0.5 h-[2px] bg-amber-400 opacity-80" />
                </div>

                {/* Sub-awning text block */}
                <div className="bg-[#2a4d38] text-center border-b border-[#1b3d2b] py-1 text-[8.5px] text-[#FFedd5] font-serif font-black uppercase tracking-widest select-none z-10">
                  BABAJI FOOT WEAR
                </div>

                {/* Inside Megastore interior layout representation */}
                <div className="flex-1 mt-3 grid grid-cols-4 gap-2.5 p-3 rounded-xl bg-[#08110c] border border-emerald-950/80 relative overflow-hidden">
                  
                  {/* Left Column product grid shelf */}
                  <div className="col-span-1 border-r border-[#162e20]/60 pr-1.5 flex flex-col gap-1.5 justify-around">
                    <div className="bg-orange-950/40 border border-orange-700/30 rounded p-1 text-center scale-95" title="Nike Boxes Stack">
                      <div className="h-3.5 bg-orange-600 rounded-sm text-[6.5px] text-white font-bold leading-none flex items-center justify-center font-mono">NIKE</div>
                      <div className="h-2 bg-orange-700 rounded-sm mt-0.5" />
                    </div>
                    <div className="bg-[#121c2c] border border-blue-900/30 rounded p-1 text-center scale-95" title="Adidas Stacks">
                      <div className="h-3.5 bg-blue-600 rounded-sm text-[6px] text-white font-bold leading-none flex flex-row items-center justify-center font-sans gap-0.5">⭐ ADI</div>
                    </div>
                  </div>

                  {/* Open Entrance showroom floor middle portion */}
                  <div className="col-span-2 flex flex-col justify-between items-center text-center p-1 relative z-20">
                    <div className="flex flex-col items-center">
                      {/* Stylized Hanging green leather carry bag */}
                      <div className="w-10 h-10 border border-amber-500/30 bg-[#163523] rounded p-1 scale-95 shadow-lg relative" style={{ transform: "rotate(-3deg)" }}>
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-3.5 border border-amber-500 rounded-t-full" />
                        <div className="w-full h-full flex flex-col justify-between items-center text-[5px]">
                          <GoldCrownLogo showBackground={false} />
                          <span className="text-amber-400 font-extrabold tracking-[0.1em] scale-75">BABAJI</span>
                        </div>
                      </div>
                    </div>

                    {/* Shopkeeper and counter stand */}
                    <div className="bg-[#1b3d2b] border border-emerald-500/20 px-2.5 py-1 rounded shadow text-[7px] text-[#FFedd5] font-semibold w-full flex items-center justify-between">
                      <span>🏪 Showroom Desk</span>
                      <span className="text-[6.5px] text-emerald-400 font-mono font-bold animate-pulse">● STOCKED</span>
                    </div>
                  </div>

                  {/* Right Column Product grid shelf */}
                  <div className="col-span-1 border-l border-[#162e20]/60 pl-1.5 flex flex-col gap-1.5 justify-around">
                    <div className="bg-red-950/40 border border-red-700/30 rounded p-1 text-center scale-95">
                      <div className="h-3.5 bg-red-650 rounded-sm text-[6.5px] text-white font-bold leading-none flex items-center justify-center font-mono">JORDAN</div>
                    </div>
                    <div className="bg-yellow-950/40 border border-yellow-700/30 rounded p-1 text-center scale-95">
                      <div className="h-3.5 bg-amber-500 rounded-sm text-[5.5px] text-slate-900 font-bold leading-none flex items-center justify-center uppercase font-mono">BABAJI</div>
                      <div className="h-2 bg-amber-605 rounded-sm mt-0.5" />
                    </div>
                  </div>

                  {/* Walk-in clients simulation */}
                  <div className="absolute bottom-1 right-2 cursor-default bg-emerald-900/90 border border-emerald-600 rounded py-0.5 px-2 text-[7.5px] text-zinc-100 font-semibold shadow z-20 select-none">
                    Punjab Hub
                  </div>
                </div>

                {/* Subtitle details footer block */}
                <div className="flex justify-between items-end border-t border-emerald-900/60 pt-2 text-[9px] text-emerald-400 select-none font-mono">
                  <div className="flex gap-1">
                    <span className="text-white/40">AUTHORIZED SELLER OF HIGH SPORTS & FORMALS</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* PHOTO 2: PREMIUM BRANDING bags VISUALIZER */}
            {activePhoto === "bags" && (
              <motion.div
                key="view-bags"
                initial={{ opacity: 0, scale: 0.95, rotate: 0.5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotate: -0.5 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-lg flex flex-col items-center select-none"
              >
                {/* Quilted car backseat leather interior frame */}
                <div className="w-full bg-[#161616] border-2 border-stone-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden" style={{ minHeight: "330px" }}>
                  
                  {/* Yellow car stitching grids */}
                  <div className="absolute inset-x-0 top-0 bottom-0 opacity-10">
                    <svg width="100%" height="100%">
                      <pattern id="luxStitch" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 0,15 L 15,0 L 30,15 L 15,30 Z" fill="none" stroke="#FBBF24" strokeWidth="0.7" />
                        <circle cx="15" cy="15" r="1" fill="#FBBF24" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#luxStitch)" />
                    </svg>
                  </div>

                  {/* Spotlight on packaging */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-emerald-500/10 blur-[80px]" />

                  {/* Bags side-by-side assembly */}
                  <div className="relative z-10 flex items-end justify-center gap-6 md:gap-10 pt-4">
                    
                    {/* BAG A: BABAJI EMERALD CARRY BAG */}
                    <div className="w-[155px] bg-[#0c2415] border border-amber-500/25 rounded-md p-3 flex flex-col justify-between shadow-2xl relative transform hover:-rotate-1 hover:scale-103 transition-all duration-300" style={{ height: "215px" }}>
                      
                      {/* Gold string handle */}
                      <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 w-[60px] h-3.5 border-2 border-amber-400 rounded-t-full pointer-events-none" />

                      {/* Header signature styling */}
                      <div className="text-center">
                        <div className="w-13 h-13 mx-auto -mb-0.5">
                          <GoldCrownLogo showBackground={false} />
                        </div>
                        <div className="h-[0.5px] w-6 bg-amber-500/50 mx-auto mt-1" />
                        
                        <p className="text-[6.5px] text-amber-400 font-extrabold tracking-[0.25em] uppercase select-none mt-1">
                          BABAJI FOOT WEAR
                        </p>
                      </div>

                      {/* Main packaging labels */}
                      <div className="text-center py-2.5">
                        <p className="text-[6.5px] text-[#A7F3D0] uppercase tracking-widest font-black leading-tight">
                          ALL KINDS OF FOOTWEAR
                        </p>
                        <p className="text-[8.5px] text-[#FED7AA] uppercase tracking-[0.08em] font-serif font-black mt-0.5">
                          NEW COLLECTION
                        </p>
                      </div>

                      {/* Bottom fine outline footer matching photograph */}
                      <div className="border-t border-amber-500/15 pt-1 text-center">
                        <span className="text-[6px] text-amber-500/80 tracking-widest font-mono block uppercase">
                          ★ PREMIER CLASS ★
                        </span>
                      </div>
                    </div>

                    {/* BAG B: MULTIBRAND WHITE CARRY BAG */}
                    <div className="w-[155px] bg-[#fafaf9] border border-stone-200 rounded-md p-3 flex flex-col justify-between shadow-2xl relative transform hover:rotate-1 hover:scale-103 transition-all duration-300" style={{ height: "215px" }}>
                      
                      {/* String handles */}
                      <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 w-[60px] h-3.5 border-2 border-stone-400 rounded-t-full pointer-events-none" />

                      {/* Brand logos at top of flyer bags */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between px-0.5">
                          {/* Adidas skew bars vector */}
                          <svg viewBox="0 0 24 16" className="w-6 h-3 text-slate-900 fill-current" title="adidas">
                            <rect x="5" y="8" width="3" height="8" transform="skewX(-30)" />
                            <rect x="11" y="4" width="3" height="12" transform="skewX(-30)" />
                            <rect x="17" y="1" width="3" height="15" transform="skewX(-30)" />
                          </svg>

                          {/* Nike swoosh vector */}
                          <svg viewBox="0 0 24 10" className="w-6.5 h-3 text-slate-900 fill-current" title="nike">
                            <path d="M2.5 7.5c2-1 5.5-2.5 8.5-3.5 2.5-.8 4.5-1 5.5-1-.2.5-.8 1.5-1.5 2.2-2 1.8-4.5 3-7.5 4 C5 10 3.5 9 2.5 7.5z" />
                          </svg>

                          {/* Jordan jumpman vector */}
                          <svg viewBox="0 0 24 16" className="w-5.5 h-3 text-slate-900 fill-current" title="jordan">
                            <circle cx="12" cy="2.5" r="1.3" />
                            <path d="M12 4 L11 8 L8 14 L9 15 L12.5 10 L15 15 L16 14.5 L13 8 Z" />
                          </svg>
                        </div>
                        
                        {/* Middle brand details exactly like original photo */}
                        <div className="border-t border-b border-stone-200 py-1.5 space-y-0.5 text-center font-sans tracking-wide">
                          <p className="text-[7.5px] font-extrabold text-[#0F172A] font-mono leading-none">
                            M. 98888-91598
                          </p>
                          <p className="text-[6px] font-semibold text-emerald-800 flex items-center justify-center gap-0.5 whitespace-nowrap leading-none scale-90">
                            <Instagram className="w-2 h-2 text-pink-600 shrink-0" />
                            <span>@baba_ji_foot_wear_store</span>
                          </p>
                        </div>
                      </div>

                      {/* Bottom address details and policy terms watermark */}
                      <div className="space-y-1">
                        <p className="text-[5.5px] font-bold text-slate-500 uppercase tracking-tight text-center leading-tight">
                          Main Bus Stop Aur, <br/>
                          Distt. S.B.S. Nagar, Nawanshahr
                        </p>
                        
                        <div className="h-[0.5px] w-full bg-stone-200" />

                        <p className="text-[6.5px] font-serif font-black text-slate-800 tracking-widest text-center mt-0.5 select-none uppercase">
                          Quality • Comfort • Trust
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

            {/* PHOTO 3: HIGH-FIDELITY REGIONAL FLYER */}
            {activePhoto === "flyer" && (
              <motion.div
                key="view-flyer"
                initial={{ opacity: 0, scale: 0.95, rotate: -0.5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotate: 0.5 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-sm bg-[#ECF1EC] border-[3px] border-emerald-950 rounded-2xl relative shadow-2xl overflow-hidden flex flex-col justify-between"
                style={{ height: "390px" }}
              >
                {/* District Map Watermark path representing SBS Nagar District background exactly as flyer photo */}
                <div className="absolute inset-x-0 top-16 bottom-14 flex items-center justify-center opacity-[0.09] pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-[200px] h-[200px] text-emerald-900 fill-current">
                    {/* Replicated geometric contour pattern shape */}
                    <path d="M 20,40 C 30,10 60,15 80,10 C 95,25 90,55 75,75 C 60,95 40,80 20,90 C 5,80 10,50 20,40 Z" />
                  </svg>
                </div>

                {/* Top Flyer Header details: Nike, Adidas, Jordan indicators + Phone */}
                <div className="p-3.5 flex items-start justify-between z-10 border-b border-emerald-900/10">
                  <div className="space-y-1">
                    <span className="text-[6.5px] bg-[#0c2415] text-[#ECF1EC] rounded px-1.5 py-0.5 font-bold uppercase tracking-wide">TELEPHONE</span>
                    <p className="text-xs font-black text-emerald-950 tracking-widest font-mono">M. 98888-91598</p>
                  </div>

                  {/* QR details represent the Instagram link */}
                  <div className="bg-white border border-emerald-900/35 p-1 rounded-lg text-center shadow-sm max-w-[85px] leading-none shrink-0 scale-95">
                    <div className="w-9 h-9 border border-emerald-800 rounded flex flex-col items-center justify-center relative p-0.5 mx-auto">
                      {/* Simple 2D QR-code simulation */}
                      <div className="w-full h-full bg-[#112d1c]/5 grid grid-cols-4 gap-[2px]">
                        {[1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1].map((p, i) => (
                          <div key={i} className={`rounded-[0.5px] ${p ? "bg-emerald-950" : "bg-transparent"}`} />
                        ))}
                      </div>
                    </div>
                    <span className="text-[4.8px] font-extrabold text-slate-800 block uppercase tracking-tight mt-1 truncate">@baba_ji_foot_wear</span>
                  </div>
                </div>

                {/* Main branding core and icons layout */}
                <div className="text-center z-10 px-4 flex-1 flex flex-col justify-center">
                  <div className="w-20 h-20 mx-auto -mb-1">
                    <GoldCrownLogo showBackground={false} />
                  </div>

                  <h1 className="text-2xl md:text-3xl font-serif font-black tracking-widest text-emerald-950 uppercase leading-none select-none mt-1">
                    BABAJI
                  </h1>
                  <p className="text-[10px] text-emerald-800 font-extrabold tracking-[0.2em] uppercase select-none leading-none mt-0.5">
                    FOOT WEAR
                  </p>

                  {/* Dual brand logos block centered inside regional maps flyer */}
                  <div className="flex items-center justify-center gap-5 mt-4 opacity-80 scale-95">
                    {/* Nike Swoosh */}
                    <svg viewBox="0 0 24 10" className="w-6.5 h-3 text-emerald-950 fill-current" title="nike">
                      <path d="M2.5 7.5c2-1 5.5-2.5 8.5-3.5 2.5-.8 4.5-1 5.5-1-.2.5-.8 1.5-1.5 2.2-2 1.8-4.5 3-7.5 4 C5 10 3.5 9 2.5 7.5z" />
                    </svg>
                    {/* Adidas skewed bars */}
                    <svg viewBox="0 0 24 16" className="w-6 h-3 text-emerald-950 fill-current" title="adidas">
                      <rect x="5" y="8" width="3" height="8" transform="skewX(-30)" />
                      <rect x="11" y="4" width="3" height="12" transform="skewX(-30)" />
                      <rect x="17" y="1" width="3" height="15" transform="skewX(-30)" />
                    </svg>
                    {/* Jordan jumpman */}
                    <svg viewBox="0 0 24 16" className="w-5.5 h-3 text-emerald-950 fill-current" title="jordan">
                      <circle cx="12" cy="2.5" r="1.2" />
                      <path d="M12 4 L11 8 L8 14 L9 15 L12.5 10 L15 15 L16 14.5 L13 8 Z" />
                    </svg>
                  </div>

                  {/* Tagline details inside the brochure flyer */}
                  <div className="mt-3.5 scale-90">
                    <span className="inline-block border border-dashed border-emerald-800/80 px-3 py-0.5 rounded-full text-[8px] font-bold text-emerald-900 tracking-wider">
                      ALL KINDS OF FOOTWEAR • NEW COLLECTION
                    </span>
                  </div>
                </div>

                {/* Bottom address details + regional Punjabi warning banner */}
                <div className="bg-emerald-950 text-[#ECF1EC] p-3 text-center z-10 relative shadow-2xl">
                  <p className="text-[7.5px] md:text-[8px] font-bold tracking-widest leading-none uppercase text-emerald-200">
                    Main Bus Stop Aur, Distt. S.B.S. Nagar, Nawanshahr
                  </p>
                  
                  <div className="h-[0.5px] bg-[#112d1c] my-1 opacity-50" />

                  {/* The official regional warning statement exactly as the poster photograph from S.B.S Nagar */}
                  <p className="text-[10px] md:text-[11px] font-black tracking-wide text-orange-200 leading-tight">
                    ਨੋਟ : ਫੈਸ਼ਨ ਦੇ ਦੌਰ ਚ ਗਾਰੰਟੀ ਦੀ ਆਸ ਨਾ ਰੱਖੋ, ਵਿਕਿਆ ਮਾਲ ਵਾਪਿਸ ਨਹੀ ਹੋਵੇਗਾ।
                  </p>
                </div>

              </motion.div>
            )}

          </AnimatePresence>

          {/* Bottom active status overlay on the visualizer box */}
          <div className="absolute bottom-3 inset-x-0 text-center text-[9px] font-mono text-slate-500 uppercase tracking-widest pointer-events-none select-none">
            High Precision Digital Twin Replicas
          </div>

        </div>

      </div>

    </div>
  );
}

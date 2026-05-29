import React from "react";
import { Instagram, Send, ShieldCheck, Heart, Award, Sparkles, MapPin } from "lucide-react";
import { ViewState } from "../types";

interface FooterProps {
  setView: (view: ViewState) => void;
}

export default function Footer({ setView }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amazon-dark text-gray-300 text-sm mt-12 border-t border-slate-800 font-sans">
      {/* Back to top tab trigger */}
      <button 
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="w-full bg-slate-800 text-white text-center py-3 text-xs font-semibold hover:bg-slate-750 transition-colors uppercase tracking-wider cursor-pointer font-display"
      >
        Back to TOP of Storefront
      </button>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Branch Info Accent */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <div className="bg-amazon-yellow text-amazon-dark p-2 rounded-lg font-bold">
              👟
            </div>
            <div>
              <span className="font-display font-black text-lg tracking-tight bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                Babaji Footwear
              </span>
              <p className="text-[9px] text-amber-300 font-mono font-bold tracking-widest leading-none mt-0.5">ESTD 1999 • INDIA</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
            Babaji Footwear is India's upcoming premier online premium footwear destination. Offering unmatched athletic air performance, Italian classic hand stitching, and daily casual slip-on comfort.
          </p>
          <a 
            href="https://maps.app.goo.gl/2RQAgymSiZBTvqJA7?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-amber-300 transition-colors group/foot-loc mt-1"
          >
            <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 group-hover/foot-loc:scale-110 transition-transform" />
            <span className="underline decoration-dashed decoration-[#f2c542]/40 underline-offset-4 group-hover/foot-loc:decoration-amber-300">
              Main Bus Stop Aur, S.B.S. Nagar, Nawanshahr, Punjab
            </span>
          </a>
        </div>

        {/* Quick Navigate Catalog */}
        <div>
          <h3 className="font-display font-semibold text-white tracking-wide text-xs uppercase mb-4 text-amber-300">Catalog Genres</h3>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button onClick={() => setView({ type: "store" })} className="hover:text-amber-300 hover:underline transition-colors text-left">
                🏃 Sports Air Cushion Runners
              </button>
            </li>
            <li>
              <button onClick={() => setView({ type: "store" })} className="hover:text-amber-300 hover:underline transition-colors text-left">
                👞 Craft Goodyear-welted Oxfords
              </button>
            </li>
            <li>
              <button onClick={() => setView({ type: "store" })} className="hover:text-amber-300 hover:underline transition-colors text-left">
                🌴 Comfort Suede Loafers & Slides
              </button>
            </li>
            <li>
              <button onClick={() => setView({ type: "store" })} className="hover:text-amber-300 hover:underline transition-colors text-left">
                🎒 Outdoor Waterproof Trail Boots
              </button>
            </li>
          </ul>
        </div>

        {/* Store Polices assurance */}
        <div>
          <h3 className="font-display font-semibold text-white tracking-wide text-xs uppercase mb-4 text-amber-300">Customer Assurances</h3>
          <ul className="space-y-2.5 text-xs text-gray-400">
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-500 flex-shrink-0" />
              <span>100% Genuine Branded Quality</span>
            </li>
            <li className="flex items-center gap-2">
              <Award className="w-4.5 h-4.5 text-amber-500 flex-shrink-0" />
              <span>Full Refund for Damaged Shipments</span>
            </li>
            <li className="flex items-center gap-2">
              <Sparkles className="w-4.5 h-4.5 text-indigo-400 flex-shrink-0" />
              <span>Zero-Cost Easy size Swaps</span>
            </li>
          </ul>
        </div>

        {/* Instagram Connection Details */}
        <div className="space-y-4">
          <h3 className="font-display font-semibold text-white tracking-wide text-xs uppercase text-amber-300">Social Connections</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Follow our Instagram handle to catch immediate stock updates, limited edition drops, sneakers styling guides, and festive deals.
          </p>
          
          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/baba_ji_foot_wear_store" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:via-pink-700 hover:to-amber-600 text-white font-bold px-4 py-2 rounded-lg text-xs tracking-wider uppercase shadow transition-all transform hover:-translate-y-0.5 active:scale-95"
            id="instagram-social-link"
          >
            <Instagram className="w-4.5 h-4.5" />
            <span>@baba_ji_foot_wear_store</span>
          </a>
        </div>

      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-slate-800 bg-black/30 py-6 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Babaji Footwear. Crafted for premium Amazon-like shopping speed in India.</p>
          <div className="flex items-center gap-4 text-gray-400">
            <span className="hover:text-amber-300 cursor-pointer">Conditions of Sale</span>
            <span>•</span>
            <span className="hover:text-amber-300 cursor-pointer">Privacy Notice</span>
            <span>•</span>
            <p className="flex items-center gap-1">
              Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" /> by Babaji Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

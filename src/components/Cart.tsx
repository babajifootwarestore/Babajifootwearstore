import React from "react";
import { Trash2, ShoppingBag, Send, ArrowLeft, ShieldCheck, Ticket } from "lucide-react";
import { CartItem, Product, ViewState } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface CartProps {
  cart: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
  setView: (view: ViewState) => void;
  whatsappNumber?: string;
}

export default function Cart({
  cart,
  onRemove,
  onUpdateQuantity,
  setView,
  whatsappNumber = "+919888891598"
}: CartProps) {
  
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    let orderLines = "";
    cart.forEach((item, idx) => {
      orderLines += `${idx + 1}. *${item.product.name}* (Size: ${item.selectedSize}) \n   Qty: ${item.quantity} x $${item.product.price.toFixed(2)} = $${(item.product.price * item.quantity).toFixed(2)}\n\n`;
    });

    const formattedText = encodeURIComponent(
      `🛍️ *BABAJI FOOTWEAR - NEW CART ORDER* 🛍️\n\n` +
      `Hello Babaji Footwear team, I want to confirm my shoe order:\n\n` +
      `📋 *Order Summary:*\n` +
      `${orderLines}` +
      `━━━━━━━━━━━━━━━━━━━━━\n` +
      `📦 *Total Items:* ${totalItemsCount} shoes\n` +
      `💰 *Grand Total:* $${subtotal.toFixed(2)}\n` +
      `🚚 *Delivery:* FREE Doorsteps Service across India\n\n` +
      `Please let me know how I can confirm my shipping address and pay!`
    );

    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${formattedText}`, "_blank");
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center" id="empty-cart-view">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 text-slate-400" />
        </div>
        <h2 className="text-2xl font-display font-bold text-slate-800 mb-2">
          Your Shopping Cart is Empty
        </h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto text-sm">
          Browse our luxury collection of sports runners, classic leather Oxfords, suede loafers, and other premium footwear.
        </p>
        <button
          onClick={() => setView({ type: "store" })}
          className="bg-amazon-yellow text-amazon-dark hover:bg-amber-400 font-bold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2 text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8" id="shopping-cart-view">
      <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-6 flex items-center gap-2">
        <ShoppingBag className="w-8 h-8 text-slate-800" />
        <span>Your Shopping Cart ({totalItemsCount} {totalItemsCount === 1 ? "item" : "items"})</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left List - Items List (lg:col-span-8) */}
        <div className="lg:col-span-8 space-y-4">
          <AnimatePresence initial={false}>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
                id={`cart-item-${item.id}`}
              >
                {/* Visual Thumbnail Info */}
                <div className="flex gap-4 items-center flex-1">
                  <div className="w-20 h-20 bg-slate-50 border border-slate-100 rounded-lg flex-shrink-0 flex items-center justify-center p-2">
                    <img
                      src={item.product.images?.[0]}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-base hover:text-amazon-orange transition-colors cursor-pointer" onClick={() => setView({ type: "product-detail", productId: item.product.id })}>
                      {item.product.name}
                    </h3>
                    <div className="flex gap-4 text-xs font-medium text-slate-500 mt-1">
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono">
                        UK Sizing: {item.selectedSize}
                      </span>
                      <span className="text-emerald-700">Free delivery tomorrow</span>
                    </div>
                  </div>
                </div>

                {/* Counter & Subtotal Column */}
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-0 border-dashed border-slate-200">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-slate-200 rounded bg-slate-50">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="px-2.5 py-1 text-slate-600 font-bold hover:bg-slate-150 transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 font-semibold text-sm font-mono text-slate-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="px-2.5 py-1 text-slate-600 font-bold hover:bg-slate-150 transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  {/* Pricing */}
                  <div className="text-right">
                    <p className="font-mono font-bold text-slate-800 text-sm">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                    <p className="text-[10px] text-slate-400 font-mono">
                      (${item.product.price.toFixed(2)} each)
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemove(item.id)}
                    className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                    title="Remove from Cart"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <button
            onClick={() => setView({ type: "store" })}
            className="text-slate-600 hover:text-slate-900 font-bold text-xs flex items-center gap-1.5 px-1 py-2 cursor-pointer transition-colors"
          >
            ← Return to continuous catalog browsing
          </button>
        </div>

        {/* Right Summary Card (lg:col-span-4) */}
        <div className="lg:col-span-4">
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="font-bold text-slate-950 text-lg mb-4">Order Summary</h2>

            <div className="space-y-3.5 text-sm">
              <div className="flex justify-between text-slate-550 font-medium">
                <span>Items Subtotal ({totalItemsCount} items):</span>
                <span className="font-mono text-slate-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-550 font-medium">
                <span>Shipping Fees:</span>
                <span className="text-emerald-700 font-bold uppercase text-xs bg-emerald-50 px-1.5 py-0.5 rounded">FREE Delivery</span>
              </div>
              
              <div className="bg-slate-50 p-2 text-[11px] text-slate-500 rounded border border-slate-100 leading-normal flex gap-2">
                <Ticket className="w-4.5 h-4.5 text-amazon-orange flex-shrink-0" />
                <span>Special Promo: No local duties apply. Checkout is directed directly to Babaji official channels.</span>
              </div>

              <hr className="border-slate-200 my-4" />

              <div className="flex justify-between text-base font-extrabold text-slate-900">
                <span>Total Budget:</span>
                <span className="font-mono">${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {/* Checkout on WhatsApp */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md transition-all active:scale-[0.98] cursor-pointer"
                id="whatsapp-checkout-btn"
              >
                <Send className="w-4 h-4 fill-current rotate-45 mr-1" />
                <span>Checkout via WhatsApp</span>
              </button>

              <div className="flex items-center gap-2 justify-center text-[10px] text-slate-400 mt-2">
                <ShieldCheck className="w-4 h-4 text-slate-400" />
                <span>End-to-end payment support enabled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

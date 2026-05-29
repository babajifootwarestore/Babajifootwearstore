/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ViewState, Product, CartItem } from "./types";
import { DEFAULT_PRODUCTS } from "./data/defaultProducts";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ShowroomHeritage from "./components/ShowroomHeritage";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import AdminPanel from "./components/AdminPanel";
import Footer from "./components/Footer";
import { Sparkles, SlidersHorizontal, ShoppingBag, MapPin, Eye, Star, Search, RefreshCw, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  // Sync state with LocalStorage for flawless offline operation
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem("babaji_products");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse babaji_products", e);
      }
    }
    return DEFAULT_PRODUCTS;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("babaji_cart");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse babaji_cart", e);
      }
    }
    return [];
  });

  const [currentView, setView] = useState<ViewState>({ type: "store" });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem("babaji_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("babaji_cart", JSON.stringify(cart));
  }, [cart]);

  // Deep Link support: Check if URL has a ?product=prod-xxx query
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("product");
    if (productId) {
      const matchExists = products.some((p) => p.id === productId);
      if (matchExists) {
        setView({ type: "product-detail", productId });
      }
    }
  }, [products]);

  // View state changes can scroll to top for elite Amazon-style polish
  const handleSetView = (view: ViewState) => {
    setView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Auto-update URL query parameter for clean routing
    if (view.type === "product-detail") {
      const newUrl = `${window.location.origin}${window.location.pathname}?product=${view.productId}`;
      window.history.pushState({ path: newUrl }, "", newUrl);
    } else {
      const cleanUrl = `${window.location.origin}${window.location.pathname}`;
      window.history.pushState({ path: cleanUrl }, "", cleanUrl);
    }
  };

  // Add Product (Admin Action)
  const handleAddProduct = (newProduct: Product) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  // Delete full product (Admin Action)
  const handleDeleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
    // Clear product from cart too if deleted from catalog
    setCart((prev) => prev.filter((item) => item.product.id !== id));
  };

  // Reset inventory back to gorgeous factory presets
  const handleResetToDefault = () => {
    setProducts(DEFAULT_PRODUCTS);
    localStorage.removeItem("babaji_products");
  };

  // Add Item to Cart (Shopper Action)
  const handleAddToCart = (product: Product, size: string, quantity: number = 1) => {
    const cartItemId = `${product.id}-${size}`;
    setCart((prev) => {
      const matchIndex = prev.findIndex((item) => item.id === cartItemId);
      if (matchIndex > -1) {
        const updated = [...prev];
        updated[matchIndex] = {
          ...updated[matchIndex],
          quantity: updated[matchIndex].quantity + quantity
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            id: cartItemId,
            product,
            selectedSize: size,
            quantity
          }
        ];
      }
    });
  };

  // Remove Item from Cart
  const handleRemoveFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  // Update Cart Quantity counter
  const handleUpdateCartQuantity = (cartItemId: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === cartItemId ? { ...item, quantity } : item))
    );
  };

  // List categories dynamically
  const categoriesList = ["All", "Sports", "Formal", "Casual", "Boots"];

  // Filter products based on Category & Search Queries
  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category.toLowerCase() === selectedCategory.toLowerCase();
    const query = searchQuery.trim().toLowerCase();
    
    if (!query) return matchesCategory;

    const matchesSearch = 
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-amazon-gray flex flex-col selection:bg-amber-100 uppercase-inputs-off">
      
      {/* Prime Header navigation bar */}
      <Header
        currentView={currentView}
        setView={handleSetView}
        cart={cart}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Main Core View Area routing */}
      <main className="flex-1 pb-12">
        <AnimatePresence mode="wait">
          {currentView.type === "store" && (
            <motion.div
              key="store"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Display Banner only if no search queries exist, for pristine focus */}
              {!searchQuery && <Banner />}

              {/* Shopping catalog area */}
              <div className="max-w-7xl mx-auto px-4 mt-6">
                
                {/* Horizontal Category Pill Selectors */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="w-5 h-5 text-indigo-600" />
                    <span className="font-display font-bold text-sm text-slate-800 uppercase tracking-wider">Quick Filter Category</span>
                  </div>

                  <div className="flex flex-wrap gap-2" id="category-pills">
                    {categoriesList.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all ${
                          selectedCategory === cat
                            ? "bg-amazon-orange text-white font-bold shadow-md transform scale-102"
                            : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                        }`}
                      >
                        {cat === "All" ? "👉 Browse All shoes" : cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid header label */}
                <div className="flex justify-between items-baseline mb-4 px-1" id="results-count-panel">
                  <h2 className="font-display font-extrabold text-slate-900 text-lg md:text-xl flex items-center gap-1.5 uppercase tracking-tight">
                    <Layers className="w-5 h-5 text-slate-700" />
                    <span>
                      {selectedCategory !== "All" ? `${selectedCategory} Collection` : "Our Bestsellers Catalog"}
                    </span>
                  </h2>
                  <span className="text-xs text-slate-500 font-mono font-medium">
                    Showing {filteredProducts.length} results
                  </span>
                </div>

                {/* Main Product Grid: Strict 2 per row constraint on mobile, responsive to 3 or 4 on desktop */}
                {filteredProducts.length === 0 ? (
                  <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center text-slate-500 max-w-lg mx-auto mt-6 shadow-sm">
                    <ShoppingBag className="w-12 h-12 mx-auto text-slate-300 mb-4" />
                    <h3 className="text-lg font-bold text-slate-800 mb-1">No Matches Found</h3>
                    <p className="text-sm text-slate-500 mb-4">
                      We couldn't find any shoe matching "{searchQuery}" under the category "{selectedCategory}".
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("All");
                      }}
                      className="bg-slate-900 text-white font-bold px-4 py-2 rounded-lg text-xs"
                    >
                      Clear All Search filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6" id="products-catalog-grid">
                    {filteredProducts.map((p) => (
                      <ProductCard
                        key={p.id}
                        product={p}
                        onClick={() => handleSetView({ type: "product-detail", productId: p.id })}
                        onAddToCart={(prod, sz) => handleAddToCart(prod, sz, 1)}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Showroom heritage photos at the end of the site */}
              {!searchQuery && <ShowroomHeritage />}
            </motion.div>
          )}

          {currentView.type === "product-detail" && (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              {(() => {
                const activeProd = products.find((p) => p.id === (currentView as any).productId);
                if (activeProd) {
                  return (
                    <ProductDetail
                      product={activeProd}
                      onBack={() => handleSetView({ type: "store" })}
                      onAddToCart={(p, size, qty) => handleAddToCart(p, size, qty)}
                    />
                  );
                }
                return (
                  <div className="text-center py-20 bg-white m-6 rounded-2xl max-w-md mx-auto">
                    <p className="text-slate-500 font-bold mb-4 animate-bounce">⚠️ This product doesn't exist anymore in Babaji's current stock.</p>
                    <button onClick={() => handleSetView({ type: "store" })} className="bg-slate-900 text-white py-2 px-4 rounded">Return to Catalog</button>
                  </div>
                );
              })()}
            </motion.div>
          )}

          {currentView.type === "cart" && (
            <motion.div
              key="cart"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <Cart
                cart={cart}
                onRemove={handleRemoveFromCart}
                onUpdateQuantity={handleUpdateCartQuantity}
                setView={handleSetView}
              />
            </motion.div>
          )}

          {currentView.type === "admin" && (
            <motion.div
              key="admin"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <AdminPanel
                products={products}
                onAddProduct={handleAddProduct}
                onDeleteProduct={handleDeleteProduct}
                onResetToDefault={handleResetToDefault}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer social connects */}
      <Footer setView={handleSetView} />

    </div>
  );
}

import React, { useState, useRef } from "react";
import { Plus, Trash2, Image, Upload, FileImage, Sparkles, CheckCircle2, AlertCircle, ShoppingBag, Lock, Unlock, ShieldCheck, Eye, EyeOff, Key } from "lucide-react";
import { Product } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface AdminPanelProps {
  products: Product[];
  onAddProduct: (newProduct: Product) => void;
  onDeleteProduct: (id: string) => void;
  onResetToDefault: () => void;
}

export default function AdminPanel({
  products,
  onAddProduct,
  onDeleteProduct,
  onResetToDefault
}: AdminPanelProps) {
  // Admin Login State
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return sessionStorage.getItem("babaji_admin_logged_in") === "true";
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedUser = username.trim().toLowerCase();
    if ((normalizedUser === "asmin" || normalizedUser === "admin") && password === "saini22") {
      setIsLoggedIn(true);
      sessionStorage.setItem("babaji_admin_logged_in", "true");
      setLoginError("");
    } else {
      setLoginError("Invalid admin username or password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("babaji_admin_logged_in");
    setUsername("");
    setPassword("");
  };

  // Form State
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Sports");
  
  // Custom uploaded images preview before product submission
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [imageUrlInput, setImageUrlInput] = useState("");
  const [sizes, setSizes] = useState<string[]>(["7", "8", "9", "10"]);
  const [inStock, setInStock] = useState(true);

  // Status Notification
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // List of sizing presets
  const sizePresets = ["6", "7", "8", "9", "10", "11", "12"];

  const handleSizeToggle = (sz: string) => {
    if (sizes.includes(sz)) {
      setSizes(sizes.filter((s) => s !== sz));
    } else {
      setSizes([...sizes, sz]);
    }
  };

  // Convert files to base64 Data URL for persistent storage
  const processFiles = (files: FileList) => {
    const fileArray = Array.from(files);
    
    fileArray.forEach((file) => {
      if (!file.type.startsWith("image/")) {
        setStatus({ type: "error", message: "Only image files are permitted." });
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result && typeof e.target.result === "string") {
          setUploadedImages((prev) => [...prev, e.target!.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });

    setStatus({ type: "success", message: `Successfully loaded ${fileArray.length} image choice(s). Preview them below!` });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      processFiles(e.target.files);
    }
  };

  // Drag and Drop support matching requirements
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      processFiles(e.dataTransfer.files);
    }
  };

  // Add individual Image URL manually
  const handleAddImageUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrlInput.trim()) return;
    if (!imageUrlInput.startsWith("http://") && !imageUrlInput.startsWith("https://") && !imageUrlInput.startsWith("data:")) {
      setStatus({ type: "error", message: "Please provide a valid image web URL starting with https:// or standard base64 image data." });
      return;
    }
    setUploadedImages((prev) => [...prev, imageUrlInput.trim()]);
    setImageUrlInput("");
    setStatus({ type: "success", message: "Manual web image reference added!" });
  };

  // Delete individual image of a product being created
  const handleDeleteUploadedImage = (indexToDelete: number) => {
    setUploadedImages((prev) => prev.filter((_, idx) => idx !== indexToDelete));
  };

  // Submit complete product
  const handleSubmitProduct = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setStatus({ type: "error", message: "Shoe Name is required." });
      return;
    }
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice <= 0) {
      setStatus({ type: "error", message: "Please enter a valid numeric retail price greater than 0." });
      return;
    }

    if (!description.trim()) {
      setStatus({ type: "error", message: "Please write a concise description of the shoe features, comfort, or material." });
      return;
    }

    if (uploadedImages.length === 0) {
      setStatus({ type: "error", message: "Please upload or supply at least 1 image file or URL for product demonstration." });
      return;
    }

    const parsedOriginalPrice = parseFloat(originalPrice);

    const newShoe: Product = {
      id: `prod-custom-${Date.now()}`,
      name: name.trim(),
      price: parsedPrice,
      originalPrice: isNaN(parsedOriginalPrice) ? undefined : parsedOriginalPrice,
      description: description.trim(),
      category,
      images: uploadedImages,
      rating: 4.5,
      reviewsCount: 1,
      sizes: sizes.length > 0 ? sizes : ["8", "9", "10"],
      inStock
    };

    onAddProduct(newShoe);

    // Reset Form
    setName("");
    setPrice("");
    setOriginalPrice("");
    setDescription("");
    setUploadedImages([]);
    setSizes(["7", "8", "9", "10"]);
    
    setStatus({ type: "success", message: `🎉 Shoe '${newShoe.name}' added successfully to your online storefront Catalog!` });
  };

  if (!isLoggedIn) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 animate-fade-in" id="admin-login-view">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xl"
        >
          {/* Logo Badge Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 p-4 rounded-2xl text-white shadow-lg shadow-amber-500/20 mb-4">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-serif font-black uppercase text-slate-900 tracking-wide">
              Babaji Footwear
            </h1>
            <p className="text-xs font-bold text-stone-500 tracking-[0.25em] uppercase mt-0.5 mb-2">
              Catalog Administration
            </p>
            <div className="h-[2px] w-12 bg-amber-500 mx-auto rounded-full mt-2" />
          </div>

          <p className="text-sm text-center text-slate-500 mb-6">
            Please authenticate to unlock model management tools, inventory catalogs, and pricing modifiers.
          </p>

          <form onSubmit={handleLoginSubmit} className="space-y-5" id="login-form">
            {loginError && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border border-red-200 text-red-800 p-3.5 rounded-xl flex items-start gap-2.5 text-xs font-medium"
              >
                <AlertCircle className="w-4.5 h-4.5 text-red-600 flex-shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </motion.div>
            )}

            <div>
              <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
                Username
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </span>
                <input
                  type="text"
                  placeholder="Enter admin username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-50/80 border border-slate-300 rounded-xl pl-10 pr-3.5 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                  autoFocus
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <Key className="w-4.5 h-4.5" />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter custom password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-50 hover:bg-slate-50/80 border border-slate-300 rounded-xl pl-10 pr-10 py-3 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  {showPassword ? <EyeOff className="w-4.5 h-4.5" /> : <Eye className="w-4.5 h-4.5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider font-display shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              <Unlock className="w-4 h-4" />
              <span>Unlock Admin Access</span>
            </button>
          </form>

          <div className="mt-8 text-center border-t border-slate-100 pt-5">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-400 font-semibold tracking-wide uppercase">
              🛡️ Babaji Security Shield Active
            </span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8" id="admin-panel-view">
      {/* Upper Title Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-slate-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <Plus className="w-8 h-8 text-indigo-600 bg-indigo-50 p-1.5 rounded-lg" />
            <span>Babaji Footwear Catalog Console</span>
          </h1>
          <p className="text-slate-500 text-sm mt-0.5">
            Create, delete, and synchronize shoe products in the local browser database instantly.
          </p>
        </div>

        <div className="flex gap-2.5 self-stretch sm:self-auto flex-col sm:flex-row items-stretch sm:items-center">
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to restore the default pristine shoe catalog? Any customized changes will be reset.")) {
                onResetToDefault();
                setStatus({ type: "success", message: "Catalogs successfully reset to defaults!" });
              }
            }}
            className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2 border border-slate-300 rounded-lg hover:text-slate-950 transition-all cursor-pointer"
          >
            🔄 Reset to Default Catalog
          </button>

          <button
            onClick={handleLogout}
            className="text-xs bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold px-4 py-2 border border-rose-200 rounded-lg hover:text-rose-950 transition-all cursor-pointer text-center"
          >
            🔒 Logout Securely
          </button>
        </div>
      </div>

      {/* Alert Feed */}
      {status && (
        <div
          className={`mb-6 p-4 rounded-xl flex items-start gap-3 border shadow-sm ${
            status.type === "success" 
              ? "bg-emerald-50 border-emerald-200 text-emerald-800" 
              : "bg-rose-50 border-rose-200 text-rose-800"
          }`}
          id="admin-form-alert"
        >
          {status.type === "success" ? <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />}
          <div className="flex-1 text-sm font-medium">
            {status.message}
          </div>
          <button onClick={() => setStatus(null)} className="text-slate-400 hover:text-slate-700 font-bold ml-1 text-xs">
            ✕
          </button>
        </div>
      )}

      {/* Main Grid Layout split between Addition Desk & Stock View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Register New Shoe Form (lg:col-span-7) */}
        <div className="lg:col-span-7 bg-white p-5 sm:p-6 md:p-8 border border-slate-200 rounded-2xl shadow-sm">
          <h2 className="text-lg font-bold text-slate-950 mb-5 pb-2 border-b border-slate-100 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-500" />
            <span>Register New Product</span>
          </h2>

          <form onSubmit={handleSubmitProduct} className="space-y-5" id="add-product-form">
            {/* Row 1: Name and Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5 input-label-id">
                  Shoe Model Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Babaji Ultra Air Racer"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                  Category Tag
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                >
                  <option value="Sports">Sports & Training</option>
                  <option value="Formal">Formal & Derby Oxford</option>
                  <option value="Casual">Casual Street & Loafers</option>
                  <option value="Boots">Outdoor Boots</option>
                </select>
              </div>
            </div>

            {/* Row 2: Retailing Prices */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                  Discount Price ($) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="e.g. 89.99"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-mono"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                  Original Price ($ - Optional)
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="e.g. 120.00"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-mono"
                />
              </div>
            </div>

            {/* Row 3: Full Description */}
            <div>
              <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">
                Full Description *
              </label>
              <textarea
                rows={3}
                placeholder="Detail the materials (leather/flyknit), cushioning comfort, sole thickness, specific weight and matching design recommendation..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                required
              />
            </div>

            {/* Sizes & Availability Check */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-b border-slate-100 py-3">
              <div>
                <span className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Available Size Ranges</span>
                <div className="flex gap-2 flex-wrap">
                  {sizePresets.map((sz) => {
                    const active = sizes.includes(sz);
                    return (
                      <button
                        type="button"
                        key={sz}
                        onClick={() => handleSizeToggle(sz)}
                        className={`w-9 h-9 text-xs rounded border font-mono font-bold flex items-center justify-center transition-all ${
                          active 
                            ? "bg-slate-900 border-slate-900 text-white" 
                            : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-400"
                        }`}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <span className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">Availability Status</span>
                <label className="flex items-center gap-2 cursor-pointer mt-1 select-none">
                  <input
                    type="checkbox"
                    checked={inStock}
                    onChange={(e) => setInStock(e.target.checked)}
                    className="w-4 h-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500"
                  />
                  <span className="text-xs font-bold text-slate-700 uppercase">
                    {inStock ? "✓ In Stock & Immediate Delivery" : "⚠️ Out of Stock (Allow Backorders)"}
                  </span>
                </label>
              </div>
            </div>

            {/* Image Upload Area */}
            <div>
              <span className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-1.5">Multiple Images (Unlimited Upload) *</span>
              
              {/* Drag and Drop Box */}
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                  isDragging
                    ? "border-indigo-500 bg-indigo-50/50"
                    : "border-slate-300 bg-slate-50 hover:bg-slate-100"
                }`}
                id="image-drop-zone"
              >
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Upload className="mx-auto w-8 h-8 text-slate-400 mb-2" />
                <p className="text-xs font-bold text-slate-700 uppercase mb-0.5">Drag & Drop Shoes Photos Here</p>
                <p className="text-[11px] text-slate-500">or click to browse from local computer/mobile</p>
              </div>

              <div className="py-2.5 text-center text-xs text-slate-400 font-semibold">— OR —</div>

              {/* Paste URL Input field */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Paste direct Unsplash/Web image URL link directly..."
                  value={imageUrlInput}
                  onChange={(e) => setImageUrlInput(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="button"
                  onClick={handleAddImageUrl}
                  className="bg-indigo-50 text-indigo-700 font-bold px-4 py-2 border border-indigo-200 rounded-lg text-xs hover:bg-indigo-100 transition-colors whitespace-nowrap"
                >
                  Add Web URL
                </button>
              </div>

              {/* Uploaded Images Preview Area */}
              {uploadedImages.length > 0 && (
                <div className="mt-4 bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
                  <span className="block text-[11px] text-slate-500 font-bold uppercase mb-2">
                    Previews ({uploadedImages.length} images added) — Click ✕ to delete individual images:
                  </span>
                  
                  <div className="flex gap-3 flex-wrap">
                    {uploadedImages.map((img, idx) => (
                      <div key={idx} className="relative w-16 h-16 bg-white border border-slate-200 rounded-lg overflow-hidden group">
                        <img src={img} alt="Preview" referrerPolicy="no-referrer" className="w-full h-full object-contain" />
                        <button
                          type="button"
                          onClick={() => handleDeleteUploadedImage(idx)}
                          className="absolute -top-1 -right-1 bg-rose-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] uppercase font-bold hover:bg-rose-700 shadow shadow-black/25"
                          title="Delete individual image"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Save Product Action */}
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3 px-6 rounded-xl text-sm shadow-md transition-all whitespace-nowrap flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4" /> Save Shoe Model to Inventory
            </button>
          </form>
        </div>

        {/* Right Column: Existing Product Management Stock List (lg:col-span-5) */}
        <div className="lg:col-span-5 bg-white p-5 sm:p-6 border border-slate-200 rounded-2xl shadow-sm">
          <h2 className="text-lg font-bold text-slate-950 mb-5 pb-2 border-b border-slate-100 flex items-center justify-between">
            <span>In-Store Stock list</span>
            <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-mono">{products.length} models</span>
          </h2>

          <div className="space-y-3.5 max-h-[680px] overflow-y-auto pr-1" id="stock-list-container">
            {products.length === 0 ? (
              <div className="text-center py-12 text-slate-400">
                <ShoppingBag className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                <p className="text-sm font-semibold">Inventory is Empty</p>
                <p className="text-xs">Configure custom shoes to fill up Babaji catalog.</p>
              </div>
            ) : (
              products.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl justify-between hover:bg-slate-100 transition-colors"
                  id={`admin-stock-item-${p.id}`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-12 h-12 bg-white border border-slate-200 rounded-md flex items-center justify-center p-1 flex-shrink-0">
                      <img src={p.images?.[0]} alt={p.name} referrerPolicy="no-referrer" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-xs line-clamp-1">{p.name}</h4>
                      <p className="text-[10px] text-slate-500 font-mono tracking-wide mt-0.5">
                        <span className="bg-slate-200 text-slate-700 font-bold px-1 py-[1px] rounded tracking-normal uppercase text-[9px] mr-1.5">{p.category}</span>
                        ${p.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (window.confirm(`Are you sure you want to delete the product '${p.name}'? This cannot be reversed.`)) {
                        onDeleteProduct(p.id);
                        setStatus({ type: "success", message: `Successfully deleted product '${p.name}' from current stock!` });
                      }
                    }}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-100 rounded-lg transition-all"
                    title="Delete product from store"
                    id={`delete-stock-${p.id}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

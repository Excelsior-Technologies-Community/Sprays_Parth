import React, { useState } from 'react';
import { Heart, ArrowRightLeft, Eye, ShoppingBag, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { useCart } from '../context/CartContext';
import { useCartUI } from '../context/CartUIContext';
import { useWishlist } from '../context/WishlistContext';
import { useCompare } from '../context/CompareContext';

export default function ProductCard({ product, onOpenPreview, setGlobalNotify }) {
  const { addToCart } = useCart();
  const { openCart } = useCartUI();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  const { addToCompare, isInCompare, removeFromCompare } = useCompare();
  
  const navigate = useNavigate(); // Initialize navigation router hook

  // Size variant choices state
  const [selectedWeight, setSelectedWeight] = useState(
    product.weights && product.weights.length > 0 ? product.weights[0] : 'Standard'
  );

  // Hover layout change flag tracking
  const [isHovered, setIsHovered] = useState(false);

  const weightIndex = product.weights ? product.weights.indexOf(selectedWeight) : 0;
  const isFirstWeight = weightIndex === 0;

  // Choose the file name based on hover and weight states
  const targetImageName = isHovered 
    ? (isFirstWeight ? product.image2 : product.image) 
    : (isFirstWeight ? product.image : product.image2);

  // VITE FIX: Helper function to get correct URL from src/assets folder
  const getImageUrl = (imgName) => {
    if (!imgName) return '';
    const cleanFileName = imgName.split('/').pop();
    return new URL(`../assets/images/card/${cleanFileName}`, import.meta.url).href;
  };

  const currentPrice = Array.isArray(product.price) 
    ? (product.price[weightIndex] ?? product.price[0]) 
    : product.price;

  const currentOriginalPrice = Array.isArray(product.originalPrice)
    ? (product.originalPrice[weightIndex] ?? product.originalPrice[0])
    : product.originalPrice;

  // Determine global presence metrics cleanly
  const isItemInWishlist = isInWishlist(product.id);
  const isItemInCompare = isInCompare(product.id);

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isItemInWishlist) {
      // SECOND CLICK: Redirects user straight to the Wishlist Page
      navigate('/wishlist');
    } else {
      // FIRST CLICK: Resolves images and commits item data to Global Context State
      const resolvedProduct = {
        ...product,
        image: getImageUrl(product.image),
        image2: getImageUrl(product.image2)
      };
      addToWishlist({ ...resolvedProduct, selectedWeight, price: [currentPrice] });
      setGlobalNotify({ type: 'wishlist', message: `${product.title} added to wishlist!` });
    }
  };

  const handleCompare = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isItemInCompare) {
      // SECOND CLICK: Redirects user straight to the Comparison Page board
      navigate('/compare');
    } else {
      // FIRST CLICK: Resolves path maps and saves down to list collection state
      const resolvedProduct = {
        ...product,
        image: getImageUrl(product.image),
        image2: getImageUrl(product.image2)
      };
      addToCompare({ ...resolvedProduct, selectedWeight, price: [currentPrice] });
      setGlobalNotify({ type: 'compare', message: `${product.title} added to comparison list!` });
    }
  };

  return (
    <div 
      className="relative w-full bg-white border border-neutral-200 rounded-2xl p-5 flex flex-col min-h-[400px] shadow-sm hover:shadow-xl transition-all duration-300 text-black select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        {product.discount && (
          <div className="absolute top-4 left-4 z-10 border border-neutral-200 rounded-full px-3 py-0.5 bg-white text-black text-xs font-bold shadow-sm">
            {product.discount}
          </div>
        )}

        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          {/* Wishlist Button layout */}
          <button 
            onClick={handleWishlist} 
            className={`p-1.5 border rounded-lg transition-all duration-200 cursor-pointer ${
              isItemInWishlist 
                ? 'bg-black text-white border-black' 
                : 'bg-white hover:bg-neutral-50 text-neutral-700 border-neutral-200'
            }`}
          >
            <Heart size={14} className={isItemInWishlist ? 'fill-white' : ''} />
          </button>
          
          {/* Compare Button layout updated with dual action logic and background active styling */}
          <button 
            onClick={handleCompare} 
            className={`p-1.5 border rounded-lg transition-all duration-200 cursor-pointer ${
              isItemInCompare 
                ? 'bg-black text-white border-black' 
                : 'bg-white hover:bg-neutral-50 text-neutral-700 border-neutral-200'
            }`}
          >
            <ArrowRightLeft size={14} />
          </button>

          <button 
            onClick={() => onOpenPreview(product, selectedWeight)} 
            className="p-1.5 border bg-white rounded-lg text-neutral-700 hover:bg-neutral-100 border-neutral-200 transition-all duration-200 cursor-pointer"
          >
            <Eye size={14}/>
          </button>
        </div>

        <div className="w-full h-44 mt-6 mb-4 flex items-center justify-center overflow-hidden">
          <img 
            src={getImageUrl(targetImageName)} 
            alt={product.title} 
            className="max-h-full max-w-[85%] object-contain transition-all duration-300"
          />
        </div>

        <span className="text-xs text-neutral-400 font-medium tracking-wide uppercase">{product.brand}</span>
        <h3 className="text-lg font-medium tracking-widest text-neutral-800 line-clamp-1 mt-0.5 min-h-[1.25rem]">{product.title}</h3>
        
        {product.weights && product.weights.length > 0 && (
          <div className="mt-3 relative flex items-center gap-2">
            <label className="text-xs text-neutral-500 font-medium">Weight:</label>
            <select 
              value={selectedWeight}
              onChange={(e) => setSelectedWeight(e.target.value)}
              className="flex-1 pl-3 pr-8 py-1.5 border border-neutral-200 bg-white text-xs rounded-lg appearance-none focus:outline-none cursor-pointer text-right font-semibold text-neutral-800"
            >
              {product.weights.map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400 text-[9px]">▼</div>
          </div>
        )}

        <div className="flex gap-0.5 mt-3">
          {[...Array(5)].map((_, idx) => (
            <Star 
              key={idx} 
              size={12} 
              className={idx < (product.rating || 0) ? "text-black fill-black" : "text-neutral-200"} 
              strokeWidth={1.5}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 border-t border-neutral-100 pt-4">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-neutral-950">${Number(currentPrice).toFixed(2)} AUD</span>
          {currentOriginalPrice > currentPrice && (
            <span className="text-[10px] text-neutral-400 line-through">${Number(currentOriginalPrice).toFixed(2)} AUD</span>
          )}
        </div>

        <button 
          onClick={() => { 
            const resolvedProduct = {
              ...product,
              image: getImageUrl(product.image),
              image2: getImageUrl(product.image2)
            };

            addToCart(resolvedProduct, 1, selectedWeight); 
            openCart(); 
            setGlobalNotify({ type: 'cart', message: `${product.title} added to cart!` });
          }}
          className="bg-black text-white hover:bg-neutral-800 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 transition-all duration-200 cursor-pointer"
        >
          Add To Cart <ShoppingBag size={12} />
        </button>
      </div>
    </div>
  );
}
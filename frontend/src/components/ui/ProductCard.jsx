import { Link } from "react-router-dom";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";

export const ProductCard = ({ product }) => {
  const currency = '₹';
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const truncate = (text, maxLength = 60) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div 
      className="group relative bg-white dark:bg-dark-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-dark-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <Link to={`/products/${product._id}`}>
          <img
            src={product.image?.[0]}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        
        {/* Overlay with Actions */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Link
            to={`/products/${product._id}`}
            className="p-3 bg-white/90 hover:bg-white text-gray-800 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg ${
              isLiked 
                ? 'bg-error-500 text-white' 
                : 'bg-white/90 hover:bg-white text-gray-800'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Bestseller Badge */}
        {product.bestseller && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-accent-500 to-warning-500 text-white text-xs font-bold rounded-full shadow-lg animate-bounce-subtle">
            🔥 Bestseller
          </div>
        )}

        {/* Discount Badge */}
        {product.originalPrice && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-error-500 to-error-600 text-white text-xs font-bold rounded-full shadow-lg">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Category */}
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
            {product.category}
          </span>
          {product.subCategory && (
            <span className="px-2 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 text-xs font-medium rounded-full">
              {product.subCategory}
            </span>
          )}
        </div>

        {/* Product Name */}
        <Link
          to={`/products/${product._id}`}
          className="block text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 mb-3 leading-tight"
        >
          {truncate(product.name, 60)}
        </Link>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.averageRating || 0)
                    ? "text-warning-400 fill-current"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            ({(product.averageRating || 0).toFixed(1)})
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-500">
            {product.reviewCount || 0} reviews
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {currency}{product.price?.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                {currency}{product.originalPrice?.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Quick Add Button */}
          <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white p-2 rounded-full shadow-lg">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 transition-opacity duration-300 pointer-events-none ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
};
import { Link } from "react-router-dom";
import { Star, Heart, ShoppingCart, Eye, Zap } from "lucide-react";
import { useState } from "react";

export const ProductCard = ({ product }) => {
  const currency = '₹';
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const truncate = (text, maxLength = 60) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div 
      className="group relative bg-white dark:bg-dark-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100 dark:border-dark-700 card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden rounded-t-3xl">
        <Link to={`/products/${product._id}`}>
          <img
            src={product.image?.[0]}
            alt={product.name}
            className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Action Buttons Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Link
            to={`/products/${product._id}`}
            className="p-4 bg-white/90 hover:bg-white text-gray-800 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-xl backdrop-blur-sm"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-4 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-xl backdrop-blur-sm ${
              isLiked 
                ? 'bg-red-500 text-white' 
                : 'bg-white/90 hover:bg-white text-gray-800'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button className="p-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-xl backdrop-blur-sm">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Bestseller Badge */}
        {product.bestseller && (
          <div className="absolute top-4 left-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-2xl shadow-lg animate-bounce-subtle flex items-center gap-1">
            <Zap className="w-3 h-3" />
            Bestseller
          </div>
        )}

        {/* Discount Badge */}
        {product.originalPrice && (
          <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-2xl shadow-lg">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Category Tags */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
            {product.category}
          </span>
          {product.subCategory && (
            <span className="px-3 py-1 bg-gradient-to-r from-secondary-100 to-secondary-200 dark:from-secondary-900/30 dark:to-secondary-800/30 text-secondary-700 dark:text-secondary-300 text-xs font-medium rounded-full">
              {product.subCategory}
            </span>
          )}
        </div>

        {/* Product Name */}
        <Link
          to={`/products/${product._id}`}
          className="block text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 mb-3 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400"
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
                    ? "text-amber-400 fill-current"
                    : "text-gray-300 dark:text-gray-600"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            ({(product.averageRating || 0).toFixed(1)})
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-500">
            {product.reviewCount || 0} reviews
          </span>
        </div>

        {/* Price Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">
              {currency}{product.price?.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                {currency}{product.originalPrice?.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Quick Add Button */}
          <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white p-3 rounded-2xl shadow-lg hover:shadow-xl">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/5 to-secondary-500/5 transition-opacity duration-300 pointer-events-none ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
      
      {/* Border Glow */}
      <div className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-primary-500/20 to-secondary-500/20 transition-opacity duration-300 pointer-events-none ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
    </div>
  );
};
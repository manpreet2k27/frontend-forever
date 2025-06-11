import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, ShoppingBag } from 'lucide-react';

const bannerImages = [
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1200&auto=format&fit=crop&q=80',
  'https://plus.unsplash.com/premium_photo-1661726457110-c43a88d74567?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1200&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=1200&auto=format&fit=crop&q=80',
];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] overflow-hidden rounded-3xl mx-4 my-8 shadow-2xl">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        {bannerImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              currentIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={src}
              alt={`Banner ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-bounce-subtle">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
          <Star className="w-8 h-8 text-white" />
        </div>
      </div>
      
      <div className="absolute bottom-32 right-32 animate-bounce-subtle" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-500 to-warning-500 flex items-center justify-center shadow-lg">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center container mx-auto px-6">
        <div className="max-w-3xl text-white animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <div className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm border border-white/20">
              <span className="text-sm font-medium">✨ Premium Collection</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-primary-200 to-secondary-200 bg-clip-text text-transparent">
              Discover
            </span>
            <br />
            <span className="text-white">Premium Products</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
            Experience luxury shopping with our curated collection of premium products at unbeatable prices. Quality meets style in every purchase.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <ShoppingBag className="h-6 w-6 group-hover:animate-bounce-subtle" />
              Shop Now
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/bestseller"
              className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Star className="h-6 w-6 group-hover:animate-bounce-subtle" />
              View Bestsellers
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;
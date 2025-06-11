import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Award, Users, ShoppingBag } from 'lucide-react';
import { ProductCard } from '../components/ui/ProductCard';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeroBanner from '../components/ui/HeroBanner';
import OurPolicy from '../components/OurPolicy';
import { fetchBestsellers } from '../context/productSlice';

export const HomePage = () => {
  const dispatch = useDispatch();
  const bestsellers = useSelector((state) => state.product.bestsellers);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    dispatch(fetchBestsellers());
  }, [dispatch]);

  useEffect(() => {
    setFeaturedProducts(bestsellers.slice(0, 4));
  }, [bestsellers]);

  const categories = [
    {
      name: 'Electronics',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80',
      icon: '📱',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?w=600&auto=format&fit=crop&q=80',
      icon: '👗',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      name: 'Home & Living',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=80',
      icon: '🏡',
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  const stats = [
    { icon: Users, value: '50K+', label: 'Happy Customers' },
    { icon: ShoppingBag, value: '100K+', label: 'Products Sold' },
    { icon: Award, value: '4.9', label: 'Average Rating' },
    { icon: TrendingUp, value: '99%', label: 'Satisfaction Rate' }
  ];

  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <HeroBanner />

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-dark-700"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">{value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="h-8 w-8 text-warning-500 fill-current animate-bounce-subtle" />
            <h2 className="text-4xl font-display font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Bestsellers This Week
            </h2>
            <Star className="h-8 w-8 text-warning-500 fill-current animate-bounce-subtle" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our most popular products loved by thousands of customers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/bestseller"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Bestsellers
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-gray-800 dark:text-gray-200 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our diverse range of premium products across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(({ name, image, icon, gradient }, index) => (
            <Link 
              key={index}
              to={`/products?category=${encodeURIComponent(name)}`} 
              className="group relative h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 transform group-hover:translate-y-1 transition-transform duration-300">
                  {name}
                </h3>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-sm font-medium">Explore Collection</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-700 py-20 rounded-3xl mx-4">
        <OurPolicy />
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-display font-bold mb-4">
              Stay in the Loop
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new arrivals, exclusive deals, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-2xl text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20 transition-all duration-300"
              />
              <button className="px-8 py-4 bg-white text-primary-600 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
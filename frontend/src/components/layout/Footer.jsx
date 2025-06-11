import React from "react";
import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-gray-300 mt-20 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-pattern"></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 w-12 h-12 rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 opacity-30 animate-pulse"></div>
              </div>
              <h3 className="text-3xl font-display font-bold gradient-text">
                ForEver
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md text-lg">
              Your premium destination for exceptional shopping experiences. We curate the finest products with unmatched quality and style, delivering excellence in every purchase.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#", color: "hover:text-blue-400", bg: "hover:bg-blue-500/20" },
                { icon: Twitter, href: "#", color: "hover:text-sky-400", bg: "hover:bg-sky-500/20" },
                { icon: Instagram, href: "#", color: "hover:text-pink-400", bg: "hover:bg-pink-500/20" },
                { icon: Youtube, href: "#", color: "hover:text-red-400", bg: "hover:bg-red-500/20" },
              ].map(({ icon: Icon, href, color, bg }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`p-4 rounded-2xl bg-dark-700/50 backdrop-blur-sm border border-dark-600/50 ${color} ${bg} transition-all duration-300 transform hover:scale-110 hover:shadow-2xl group`}
                >
                  <Icon className="w-6 h-6 group-hover:animate-bounce-subtle" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {[
                { to: "/products", label: "Products" },
                { to: "/bestseller", label: "Bestsellers" },
                { to: "/cart", label: "Shopping Cart" },
                { to: "/profile", label: "My Account" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link 
                    to={to} 
                    className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:translate-x-2 transform inline-block group relative"
                  >
                    <span className="relative z-10">{label}</span>
                    <div className="absolute inset-0 w-0 group-hover:w-full h-full bg-gradient-to-r from-primary-500/10 to-transparent transition-all duration-300 rounded"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 relative">
              Support
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {[
                { to: "/faq", label: "FAQ" },
                { to: "/support", label: "Help Center" },
                { to: "/returns", label: "Returns" },
                { to: "/shipping", label: "Shipping Info" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link 
                    to={to} 
                    className="text-gray-400 hover:text-primary-400 transition-all duration-300 hover:translate-x-2 transform inline-block group relative"
                  >
                    <span className="relative z-10">{label}</span>
                    <div className="absolute inset-0 w-0 group-hover:w-full h-full bg-gradient-to-r from-primary-500/10 to-transparent transition-all duration-300 rounded"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-dark-700/50 pt-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "Email Us",
                content: "support@forevershop.com",
                href: "mailto:support@forevershop.com",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: Phone,
                title: "Call Us",
                content: "+1 (555) 123-4567",
                href: "tel:+15551234567",
                gradient: "from-green-500 to-green-600"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: "123 Shopping Street, City, State 12345",
                href: "#",
                gradient: "from-purple-500 to-purple-600"
              },
            ].map(({ icon: Icon, title, content, href, gradient }, index) => (
              <a
                key={index}
                href={href}
                className="group relative p-6 rounded-2xl bg-dark-800/50 backdrop-blur-sm border border-dark-700/50 hover:bg-dark-700/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${gradient} group-hover:shadow-lg transition-all duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-1">{title}</h4>
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{content}</p>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-dark-700/50 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-primary-400 animate-bounce-subtle" />
              <h3 className="text-2xl font-semibold text-white">Stay Updated</h3>
              <Sparkles className="w-8 h-8 text-secondary-400 animate-bounce-subtle" style={{ animationDelay: '0.5s' }} />
            </div>
            <p className="text-gray-400 mb-8 text-lg">Subscribe to get special offers, free giveaways, and exclusive updates delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-2xl bg-dark-700/50 backdrop-blur-sm border border-dark-600/50 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20 transition-all duration-300"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-700/50 pt-8 text-center">
          <p className="text-gray-500 flex items-center justify-center gap-2 text-lg">
            &copy; {new Date().getFullYear()} ForEver. Made with 
            <Heart className="w-5 h-5 text-red-500 fill-current animate-bounce-subtle" /> 
            for amazing shopping experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};
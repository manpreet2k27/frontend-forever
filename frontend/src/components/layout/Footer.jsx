import React from "react";
import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-gray-300 mt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                ForEver
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Your premium destination for exceptional shopping experiences. We curate the finest products with unmatched quality and style, delivering excellence in every purchase.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                { icon: Twitter, href: "#", color: "hover:text-sky-400" },
                { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                { icon: Youtube, href: "#", color: "hover:text-red-400" },
              ].map(({ icon: Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`p-3 rounded-full bg-dark-700 hover:bg-dark-600 ${color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/products", label: "Products" },
                { to: "/bestseller", label: "Bestsellers" },
                { to: "/cart", label: "Shopping Cart" },
                { to: "/profile", label: "My Account" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link 
                    to={to} 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative">
              Support
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/faq", label: "FAQ" },
                { to: "/support", label: "Help Center" },
                { to: "/returns", label: "Returns" },
                { to: "/shipping", label: "Shipping Info" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link 
                    to={to} 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-dark-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Mail,
                title: "Email Us",
                content: "support@forevershop.com",
                href: "mailto:support@forevershop.com"
              },
              {
                icon: Phone,
                title: "Call Us",
                content: "+1 (555) 123-4567",
                href: "tel:+15551234567"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: "123 Shopping Street, City, State 12345",
                href: "#"
              },
            ].map(({ icon: Icon, title, content, href }, index) => (
              <a
                key={index}
                href={href}
                className="flex items-center gap-4 p-4 rounded-2xl bg-dark-800/50 hover:bg-dark-700/50 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-300">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">{title}</h4>
                  <p className="text-gray-400 text-sm">{content}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-dark-700 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">Subscribe to get special offers, free giveaways, and updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-dark-700 border border-dark-600 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-700 pt-8 text-center">
          <p className="text-gray-500 flex items-center justify-center gap-2">
            &copy; {new Date().getFullYear()} ForEver. Made with 
            <Heart className="w-4 h-4 text-error-500 fill-current animate-bounce-subtle" /> 
            for amazing shopping experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};
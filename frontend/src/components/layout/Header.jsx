import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Lock, LogOut, Menu, X, Sparkles } from "lucide-react";
import { SearchBar } from "../ui/SearchBar";
import { ThemeToggle } from "../ui/ThemeToggle";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../context/userSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const authLoading = useSelector((state) => state.user.authLoading);
  const totalCount = useSelector((state) => state.cart.totalCount);

  const isAdmin = user?.isAdmin || false;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-dark-900/80 border-b border-gray-200/20 dark:border-dark-700/20 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-display font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
          >
            <Sparkles className="w-8 h-8 text-primary-600 animate-bounce-subtle" />
            ForEver
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:block flex-1 max-w-2xl mx-8">
            <SearchBar />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <ThemeToggle />
            
            {user ? (
              <Link 
                to="/products?category=All" 
                className="relative group px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 hover:from-primary-500/20 hover:to-secondary-500/20 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
              >
                <span className="relative z-10">Products</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Link>
            ) : (
              <span
                onClick={() => toast.info("Please login to view products")}
                className="px-4 py-2 rounded-full text-gray-400 cursor-not-allowed opacity-50"
              >
                Products
              </span>
            )}

            {user ? (
              <Link to="/cart" className="relative group p-2">
                <div className="relative">
                  <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300" />
                  {totalCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-error-500 to-warning-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce-subtle">
                      {totalCount}
                    </span>
                  )}
                </div>
              </Link>
            ) : (
              <span
                onClick={() => toast.info("Please login to access your cart")}
                className="p-2 text-gray-400 cursor-not-allowed opacity-50"
              >
                <ShoppingCart className="w-6 h-6" />
              </span>
            )}

            {isAdmin && (
              <Link
                to="/admin"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Lock size={16} />
                Admin
              </Link>
            )}

            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-error-500 to-warning-500 text-white hover:from-error-600 hover:to-warning-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <LogOut size={16} />
                Logout
              </button>
            ) : (
              <div className="flex gap-3">
                <Link 
                  to="/login" 
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="px-6 py-2 rounded-full border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl bg-white/90 dark:bg-dark-800/90 backdrop-blur-md border border-gray-200/20 dark:border-dark-700/20 shadow-xl animate-slide-down">
            <div className="space-y-4">
              <SearchBar />
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
              
              {user ? (
                <Link 
                  to="/products" 
                  className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 hover:from-primary-500/20 hover:to-secondary-500/20 text-gray-700 dark:text-gray-300 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>
              ) : (
                <span
                  onClick={() => toast.info("Please login to view products")}
                  className="block w-full text-center py-3 text-gray-400 cursor-not-allowed"
                >
                  Products
                </span>
              )}

              {user ? (
                <Link 
                  to="/cart" 
                  className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-500/10 hover:from-primary-500/20 hover:to-secondary-500/20 text-gray-700 dark:text-gray-300 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Cart ({totalCount})
                </Link>
              ) : (
                <span
                  onClick={() => toast.info("Please login to access your cart")}
                  className="block w-full text-center py-3 text-gray-400 cursor-not-allowed"
                >
                  Cart
                </span>
              )}

              {isAdmin && (
                <Link 
                  to="/admin" 
                  className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin Dashboard
                </Link>
              )}

              {user ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full py-3 rounded-xl bg-gradient-to-r from-error-500 to-warning-500 text-white transition-all duration-300"
                >
                  Logout
                </button>
              ) : (
                <div className="space-y-3">
                  <Link 
                    to="/login" 
                    className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup" 
                    className="block w-full text-center py-3 rounded-xl border-2 border-primary-600 text-primary-600 dark:text-primary-400 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
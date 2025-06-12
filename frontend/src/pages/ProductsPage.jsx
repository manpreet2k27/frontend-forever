import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProductCard } from '../components/ui/ProductCard';
import { fetchProducts } from '../context/productSlice';
import { Filter, Grid, List, SortAsc, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);
  const search = useSelector((state) => state.ui.search);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [sortOrder, setSortOrder] = useState('relevant');
  const [showFilters, setShowFilters] = useState(false);

  const categoriesWithSubcategories = {
    All: [],
    Electronics: ['Mobiles', 'Laptops', 'Accessories'],
    Fashion: ['Men', 'Women', 'Footwear'],
    'Home & Living': ['Furniture', 'Kitchen', 'Lighting'],
    Sports: ['Gym Equipment', 'Sportswear', 'Footwear'],
    Beauty: ['Skincare', 'Makeup', 'Fragrances'],
    Books: ['Fiction', 'Non-Fiction', 'Children's Books'],
  };

  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();

  useEffect(() => {
    const categoryFromURL = query.get('category');
    if (categoryFromURL && categoriesWithSubcategories[categoryFromURL]) {
      setSelectedCategory(categoryFromURL);
    }
  }, []);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(
        (product) =>
          product.category === selectedCategory &&
          (!selectedSubcategory || product.subcategory === selectedSubcategory)
      );
    }

    if (search.trim()) {
      const lower = search.toLowerCase();
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(lower) ||
        product.description?.toLowerCase().includes(lower) ||
        product.subcategory?.toLowerCase().includes(lower)
      );
    }

    if (sortOrder === 'low-high') {
      filtered = [...filtered].sort((a, b) => a.price - b.price || a.name.localeCompare(b.name));
    } else if (sortOrder === 'high-low') {
      filtered = [...filtered].sort((a, b) => b.price - a.price || a.name.localeCompare(b.name));
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, selectedSubcategory, sortOrder, search]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 theme-transition">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-display font-bold gradient-text mb-2">
              {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {filteredProducts.length} products found
              {search && ` for "${search}"`}
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden btn-secondary gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>
            
            <select
              className="input-field min-w-[200px]"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className={`w-80 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Filters</h3>
              </div>
              
              {/* Categories */}
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">Categories</h4>
                <div className="space-y-2">
                  {Object.keys(categoriesWithSubcategories).map((category) => (
                    <div key={category}>
                      <label className="flex items-center p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-dark-700 cursor-pointer transition-colors duration-300">
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={() => {
                            setSelectedCategory(category);
                            setSelectedSubcategory(null);
                          }}
                          className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500 mr-3"
                        />
                        <span className="font-medium text-gray-900 dark:text-gray-100">{category}</span>
                      </label>
                      
                      {/* Subcategories */}
                      {selectedCategory === category &&
                        categoriesWithSubcategories[category].length > 0 && (
                          <div className="ml-8 mt-2 space-y-1">
                            {categoriesWithSubcategories[category].map((subcategory) => (
                              <label key={subcategory} className="flex items-center p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 cursor-pointer transition-colors duration-300">
                                <input
                                  type="radio"
                                  name="subcategory"
                                  value={subcategory}
                                  checked={selectedSubcategory === subcategory}
                                  onChange={() => setSelectedSubcategory(subcategory)}
                                  className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500 mr-3"
                                />
                                <span className="text-gray-700 dark:text-gray-300">{subcategory}</span>
                              </label>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <div className="text-center">
                  <div className="spinner mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-400">Loading products...</p>
                </div>
              </div>
            ) : filteredProducts.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <div className="card p-12 text-center">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
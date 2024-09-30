
import React from 'react';
import { ShoppingCart, Search, Menu, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            Welcome to YourBrand
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover our latest collection of premium products. Shop now for exclusive deals!
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-white mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg">
              <img className="w-full h-48 object-cover" src={`data:image/jpeg;base64,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`} alt={`Product ${item}`} />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">Product Name</h3>
                <p className="text-white opacity-75 mt-1">$99.99</p>
                <button className="mt-4 w-full bg-white text-blue-600 py-2 px-4 rounded hover:bg-opacity-90 transition duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-blue-300">Start shopping today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Get started
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
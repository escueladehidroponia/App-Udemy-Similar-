
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors">
              CoursePlat AI
            </Link>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Categories</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Teach on CoursePlat</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">My Learning</a>
            </div>
          </nav>
          <div className="flex items-center">
             <button className="bg-transparent text-gray-600 font-semibold hover:text-gray-900 py-2 px-4 border border-gray-300 hover:border-gray-400 rounded-md transition-colors">
                 Log In
             </button>
             <button className="ml-2 bg-indigo-600 text-white font-semibold hover:bg-indigo-700 py-2 px-4 border border-indigo-600 rounded-md transition-colors">
                 Sign Up
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#0a0a0a] text-white p-6">
      <h1 className="text-8xl font-extrabold text-indigo-600 mb-4">404</h1>
      <p className="text-2xl mb-2">Oops! Page Not Found</p>
      <p className="text-gray-400 mb-6 text-center max-w-md">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to="/" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-md transition text-lg font-medium shadow-lg">
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
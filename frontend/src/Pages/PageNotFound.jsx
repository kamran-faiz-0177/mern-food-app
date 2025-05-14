import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-16">
      <div className="max-w-3xl text-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ez_Al_wtUji5DxuTsQrRUq-vPLJvWNeuJw&s"
          alt="404 Not Found"
          className="mx-auto mb-8 w-72 h-auto"
        />
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-white bg-orange-500 hover:bg-orange-600 rounded-full transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;

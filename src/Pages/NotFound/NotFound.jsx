import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-12">
      <div className="text-center">
        <div className="text-7xl md:text-8xl mb-4 animate-bounce">🤖</div>
        <h1 className="text-8xl md:text-9xl font-extrabold text-[#34c9b6]">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2 text-base md:text-lg">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 text-white bg-[#34c9b6] hover:bg-teal-500 transition rounded-md shadow-md"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

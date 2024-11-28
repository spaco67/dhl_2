import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Airbnb Clone</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Find your next stay</h2>
          <p className="mb-4">Search deals on hotels, homes, and much more...</p>
          <Link to="/search" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Explore Now
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Host your home</h2>
          <p className="mb-4">Earn extra income and unlock new opportunities</p>
          <Link to="/dashboard" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

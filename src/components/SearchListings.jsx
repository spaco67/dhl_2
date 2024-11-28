import React, { useState } from 'react';
import { searchListings } from '../services/listingService';

const SearchListings = () => {
  const [location, setLocation] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const listings = await searchListings({ location });
      setResults(listings);
    } catch (error) {
      console.error('Error searching listings:', error);
      alert('Failed to search listings. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Search Listings</h2>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="flex-grow px-3 py-2 border rounded-l"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600">
            Search
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((listing) => (
          <div key={listing.id} className="border rounded p-4">
            <h3 className="font-bold text-lg mb-2">{listing.title}</h3>
            <p className="text-gray-600 mb-2">{listing.description}</p>
            <p className="font-semibold">${listing.price} per night</p>
            <p className="text-sm text-gray-500">{listing.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchListings;

import React from 'react';

const nearbyHomes = [
  { id: 1, name: 'Cozy Studio Apartment', price: 75, rating: 4.8, image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 2, name: 'Spacious 2BR with View', price: 120, rating: 4.6, image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 3, name: 'Charming Cottage', price: 95, rating: 4.9, image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  { id: 4, name: 'Modern Loft Downtown', price: 150, rating: 4.7, image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
];

const MapsAndHomes = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Explore Homes Near You</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-300 rounded-lg overflow-hidden" style={{ height: '400px' }}>
              {/* Placeholder for map */}
              <img src="https://placehold.co/800x400?text=Map+View" alt="Map View" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="space-y-6">
            {nearbyHomes.map((home) => (
              <div key={home.id} className="bg-white rounded-lg shadow-md overflow-hidden flex">
                <img src={home.image} alt={home.name} className="w-1/3 object-cover" />
                <div className="p-4 flex-1">
                  <h3 className="font-bold text-lg mb-2">{home.name}</h3>
                  <p className="text-gray-600 mb-2">${home.price} / night</p>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-600">{home.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapsAndHomes;

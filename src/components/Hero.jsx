import React from 'react';
import ReservationForm from './ReservationForm';

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center py-16" style={{backgroundImage: "url('https://images.pexels.com/photos/25287796/pexels-photo-25287796/free-photo-of-view-of-fields-on-a-country.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center text-white mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Find your next stay</h1>
          <p className="text-xl md:text-2xl">Search low prices on hotels, homes, and much more...</p>
        </div>
        <ReservationForm />
      </div>
    </div>
  );
};

export default Hero;

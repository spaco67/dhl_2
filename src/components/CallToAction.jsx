import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-red-500 to-pink-500">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to start your adventure?</h2>
          <p className="text-xl mb-8">Join millions of hosts and travelers around the world and start your journey today.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-red-500 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
              Start hosting
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-red-500 transition duration-300">
              Explore stays
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

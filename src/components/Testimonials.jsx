import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "My stay through Airbnb was absolutely amazing! The host was incredibly welcoming, and the apartment exceeded all my expectations. I'll definitely be using Airbnb for all my future travels.",
    rating: 5
  },
  {
    id: 2,
    name: "Mark Thompson",
    location: "London, UK",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "As a frequent business traveler, I've found Airbnb to be a game-changer. The ability to stay in a home-like environment makes my trips so much more comfortable and productive.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Chen",
    location: "Tokyo, Japan",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    text: "I was hesitant to use Airbnb at first, but after my first experience, I'm completely sold! The unique accommodations and local experiences you can find are unparalleled.",
    rating: 4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Guests Say</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img 
                src={currentTestimonial.image} 
                alt={currentTestimonial.name} 
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
            </div>
            <div className="md:w-2/3 md:pl-8">
              <FaQuoteLeft className="text-4xl text-red-500 mb-4" />
              <p className="text-gray-600 mb-4 italic">{currentTestimonial.text}</p>
              <div className="flex items-center mb-2">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <h3 className="font-bold text-lg">{currentTestimonial.name}</h3>
              <p className="text-gray-500">{currentTestimonial.location}</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button 
              onClick={prevTestimonial}
              className="bg-red-500 text-white rounded-full p-2 mx-2 hover:bg-red-600 transition duration-300"
            >
              <FaChevronLeft />
            </button>
            <button 
              onClick={nextTestimonial}
              className="bg-red-500 text-white rounded-full p-2 mx-2 hover:bg-red-600 transition duration-300"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

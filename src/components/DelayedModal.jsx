import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Confetti from 'react-confetti';

const DelayedModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000); // Stop confetti after 5 seconds
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      {showConfetti && <Confetti />}
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full animate-fade-in-up">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Special Offer!</h2>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gray-600 transition duration-150"
            >
              <FaTimes size={24} />
            </button>
          </div>
          {!isSubmitted ? (
            <>
              <p className="text-gray-600 mb-6">
                Sign up now and get 10% off your first booking! Don't miss out on this limited-time offer.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
                >
                  Claim Offer
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="mb-4">
                <svg className="checkmark mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                  <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
              </div>
              <p className="text-xl font-semibold text-green-600 mb-2">Thank you!</p>
              <p className="text-gray-600">Your offer has been claimed. Check your email for details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DelayedModal;

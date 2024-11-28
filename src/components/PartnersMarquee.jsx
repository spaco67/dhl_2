import React from 'react';

const partners = [
  { name: 'Expedia', logo: 'https://logos-world.net/wp-content/uploads/2021/08/Expedia-Logo-700x394.png' },
  { name: 'Booking.com', logo: 'https://logos-world.net/wp-content/uploads/2021/02/Booking-Logo-700x394.png' },
  { name: 'TripAdvisor', logo: 'https://logos-world.net/wp-content/uploads/2021/08/Tripadvisor-Logo-700x394.png' },
  { name: 'Hilton', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Hilton-Logo-700x394.png' },
  { name: 'Marriott', logo: 'https://logos-world.net/wp-content/uploads/2020/11/Marriott-Logo-700x394.png' },
  { name: 'Kayak', logo: 'https://logos-world.net/wp-content/uploads/2022/07/KAYAK-Logo.png' },
  { name: 'Hotels.com', logo: 'https://logos-world.net/wp-content/uploads/2021/08/Hotelscom-Logo-700x394.png' },
  { name: 'Agoda', logo: 'https://logos-world.net/wp-content/uploads/2022/07/Agoda-Logo.png' },
];

const PartnersMarquee = () => {
  return (
    <div className="bg-gray-100 py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Trusted Partners</h2>
        <div className="relative">
          <div className="flex animate-marquee">
            {partners.concat(partners).map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <img src={partner.logo} alt={partner.name} className="h-16 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersMarquee;

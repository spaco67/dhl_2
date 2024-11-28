import React from 'react';
import { FaTwitter, FaHeart, FaRetweet } from 'react-icons/fa';

const tweets = [
  {
    id: 1,
    username: 'TravelLover',
    handle: '@travellover',
    content: 'Just booked my stay in Paris through Airbnb! Can\'t wait for the Eiffel Tower views! 😍🗼 #TravelGoals',
    likes: 152,
    retweets: 23,
    time: '2h'
  },
  {
    id: 2,
    username: 'DigitalNomad',
    handle: '@digitalnomad',
    content: 'Working remotely from a cozy Airbnb in Bali. The wifi is great and the view is even better! 🌴💻 #DigitalNomadLife',
    likes: 89,
    retweets: 12,
    time: '5h'
  },
  {
    id: 3,
    username: 'FoodieExplorer',
    handle: '@foodieexplorer',
    content: 'Our Airbnb host recommended this amazing local restaurant. Best pasta I\'ve ever had! 🍝👨‍🍳 #FoodieHeaven',
    likes: 207,
    retweets: 31,
    time: '1d'
  }
];

const TwitterFeed = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What People Are Saying</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-400 text-white p-4 flex items-center">
            <FaTwitter className="text-2xl mr-2" />
            <span className="font-bold text-lg">Twitter Feed</span>
          </div>
          <div className="divide-y divide-gray-200">
            {tweets.map((tweet) => (
              <div key={tweet.id} className="p-4">
                <div className="flex items-center mb-2">
                  <img
                    src={`https://placehold.co/40x40?text=${tweet.username[0]}`}
                    alt={tweet.username}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-bold">{tweet.username}</div>
                    <div className="text-gray-500 text-sm">{tweet.handle}</div>
                  </div>
                </div>
                <p className="mb-2">{tweet.content}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <span className="mr-4 flex items-center">
                    <FaHeart className="mr-1 text-red-500" /> {tweet.likes}
                  </span>
                  <span className="mr-4 flex items-center">
                    <FaRetweet className="mr-1 text-green-500" /> {tweet.retweets}
                  </span>
                  <span>{tweet.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwitterFeed;

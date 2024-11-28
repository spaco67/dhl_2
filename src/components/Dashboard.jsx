import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Welcome, {user?.email}</h2>
        <p>This is your dashboard. You can manage your listings and bookings here.</p>
      </div>
    </div>
  );
};

export default Dashboard;



import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        {/* Page content */}
        <h1 className="text-3xl font-bold">Welcome to My Website</h1>
        {/* Add other page content here */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;

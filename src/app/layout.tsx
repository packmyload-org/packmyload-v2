import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          {/* Your header content goes here */}
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto px-4">{children}</div>
      </main>
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          {/* Your footer content goes here */}
        </div>
      </footer>
    </div>
  );
};

export default Layout;

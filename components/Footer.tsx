

const Footer: React.FC = () => {
    return (
      <footer className="bg-blue-500 p-4">
        {/* Footer content */}
        <p className="text-white">© {new Date().getFullYear()} My Website. All rights reserved.</p>
        {/* Add other footer elements here */}
      </footer>
    );
  };
  
  export default Footer;
  
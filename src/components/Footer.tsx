const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6">
        <div className="text-center mb-4">
          <img src="/path/to/logo.png" alt="Logo" className="mx-auto w-20 h-20" />
          <div className="flex justify-center space-x-4 mt-4">
            {/* Add your social icons here */}
            <a href="#" className="text-white">Icon1</a>
            <a href="#" className="text-white">Icon2</a>
            <a href="#" className="text-white">Icon3</a>
          </div>
        </div>
        <div className="text-center text-gray-400">
          © 2024 Your Company. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center space-y-4 md:space-y-0 md:flex md:justify-between md:items-center">
        {/* Brand and Copyright */}
        <div className="text-sm">
          <p>&copy; 2025 Bandage. All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

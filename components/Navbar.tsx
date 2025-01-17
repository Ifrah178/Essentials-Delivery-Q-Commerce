import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-[#0c1a2c] text-white text-sm py-2 px-4 flex justify-between">
        <div className="flex space-x-4">
          <span>(+92) 331-3417127</span>
          <span>farooqiiafra@gmail.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Follow Us</span>
          <FaFacebook className="hover:text-blue-400 cursor-pointer" />
          <FaInstagram className="hover:text-pink-400 cursor-pointer" />
          <FaTwitter className="hover:text-blue-300 cursor-pointer" />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md">
        <h1 className="text-2xl font-bold">Bandage</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-blue-400">Home</Link>
          </li>
          <li>
            <Link href="/Shop" className="hover:text-blue-400">Shop</Link>
          </li>
          <li>
            <Link href="About" className="hover:text-blue-400">About</Link>
          </li>
          <li>
            <Link href="Blog" className="hover:text-blue-400">Blog</Link>
          </li>
          <li>
            <Link href="Contact" className="hover:text-blue-400">Contact</Link>
          </li>
          <li>
            <Link href="Pages" className="hover:text-blue-400">Pages</Link>
          </li>
        </ul>
        <div className="flex space-x-2">
          <FaUser className="text-lg hover:text-blue-400 cursor-pointer" title="Login/Register" />
          <FaHeart className="text-lg hover:text-red-400 cursor-pointer" title="Wishlist" />
          <FaShoppingCart className="text-lg hover:text-green-400 cursor-pointer" title="Cart" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

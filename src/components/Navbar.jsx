import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // lightweight icons
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-[#151E3D]/70 backdrop-blur-md z-50">
      {/* Logo + Name */}
      <div className="flex items-center space-x-3">
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Luxcity Logo" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold text-white">Luxcity</span>
        </Link>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-6">
        <Link to="/talent" className="text-white hover:text-[#0492C2] transition">Talent Academy</Link>
        <Link to="/events" className="text-white hover:text-[#0492C2] transition">Events</Link>
        <Link to="/services" className="text-white hover:text-[#0492C2] transition">Fashion, Modelling & Travel</Link>
        <Link to="/education" className="text-white hover:text-[#0492C2] transition">Education</Link>
        <Link to="/about" className="text-white hover:text-[#0492C2] transition">About Us</Link>
      </div>

      

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#151E3D] flex flex-col items-center space-y-6 py-6 md:hidden shadow-lg">
          <Link onClick={() => setIsOpen(false)} to="/talent" className="text-white hover:text-[#0492C2] transition">Talent Academy</Link>
          <Link onClick={() => setIsOpen(false)} to="/events" className="text-white hover:text-[#0492C2] transition">Events</Link>
          <Link onClick={() => setIsOpen(false)} to="/services" className="text-white hover:text-[#0492C2] transition">Fashion, Modelling & Travel</Link>
          <Link onClick={() => setIsOpen(false)} to="/education" className="text-white hover:text-[#0492C2] transition">Education</Link>
          <Link onClick={() => setIsOpen(false)} to="/about" className="text-white hover:text-[#0492C2] transition">About Us</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

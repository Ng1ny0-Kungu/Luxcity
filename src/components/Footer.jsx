import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-transparent text-white py-8">
      {/* Top separator line */}
      <div className="border-t border-gray-500/50 mb-6"></div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <a
          href="https://facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#1877F2] transition-colors duration-300"
        >
          <FaFacebookF size={22} />
        </a>
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#E4405F] transition-colors duration-300"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#1DA1F2] transition-colors duration-300"
        >
          <FaTwitter size={22} />
        </a>
        <a
          href="https://www.tiktok.com/@holyjoe0?is_from_webapp=1&sender_device=pc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#69C9D0] transition-colors duration-300"
        >
          <FaTiktok size={22} />
        </a>
        <a
          href="https://wa.me/yourwhatsapplink"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[#25D366] transition-colors duration-300"
        >
          <FaWhatsapp size={22} />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-300">
        <p>
          Copyright © 2025 <span className="font-semibold">Luxcity</span> &nbsp;
          <span className="text-gray-400">All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
}

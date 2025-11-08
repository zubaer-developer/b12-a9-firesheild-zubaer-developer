import React from "react";
import {
  FaFacebook,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-10 mt-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-30">
          {/* Column 1 — Brand / About */}
          <div className="col-span-4">
            <h2 className="text-2xl font-bold text-white mb-3">GameHub</h2>
            <p className="text-sm leading-relaxed">
              GameHub is your ultimate gaming destination — discover, explore,
              and play the latest and greatest games from around the world.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="grid col-span-4 justify-center">
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 —  Social */}
          <div className="col-span-4">
            <h3 className="text-lg font-semibold text-white mb-3">
              Stay Updated
            </h3>

            <div className="flex gap-5 mt-5">
              <a href="#" className="hover:text-white text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-white text-xl">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-800 pt-4">
          © {new Date().getFullYear()} GameHub. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Bank BC", href: "#bankbc" },
  { name: "RKCL", href: "#rkcl" },
];

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-md fixed top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="relative w-36 h-10 flex items-center">
          <Image
            src="/images/logo.webp"
            alt="Company Logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100px, (max-width: 1200px) 120px, 150px"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-800 focus:outline-none hover:text-blue-600 transition-colors"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white/95 md:bg-transparent border-t md:border-none shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible md:visible md:opacity-100 md:translate-y-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 text-gray-700 font-semibold text-[15px] tracking-wide">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="relative block px-6 py-3 md:px-0 md:py-0 group transition-all duration-300"
                >
                  <span className="relative z-10 text-gray-800 group-hover:text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-pink-500 to-yellow-500 transition-all duration-300">
                    {item.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}

            {/* ✨ Animated "Order eMitra" Button */}
            <li className="mt-2 md:mt-0">
              <Link target="blank"
                href="https://achariyagroup.in/stationeryOrder.aspx"
                className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-semibold text-white bg-linear-to-r from-blue-600 via-pink-500 to-yellow-500 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse"
              >
                <span className="absolute inset-0 bg-linear-to-r from-blue-500 via-pink-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></span>
                <span className="relative z-10">⚡ Order eMitra</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

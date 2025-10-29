"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone,Youtube, } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 pt-12 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + About */}
        <div>
          <div className="relative w-40 h-12 mb-4 -ms-8">
            <Image
              src="/images/logo.webp"
              alt="Achariya Technologies Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Achariya Technologies Pvt. Ltd. — A leading organization in
            e-Governance, e-Mitra, RKCL, and Digital Services empowering India’s
            digital transformation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
        <ul className="flex flex-col gap-3  text-gray-700 font-semibold text-[15px] tracking-wide">
  {[
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Bank BC", href: "#bankbc" },
    { name: "RKCL", href: "#rkcl" },
  ].map((item) => (
    <li key={item.name} className="relative group inline">
      <Link
        href={item.href}
        className="relative  py-3 md:px-0 md:py-0 group transition-all duration-300 inline"
      >
        <span className="relative inline z-10 text-gray-800 group-hover:text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-pink-500 to-yellow-500 transition-all duration-300">
          {item.name}
        </span>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-500 via-pink-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  ))}
</ul>

        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-600" />
              <a href="tel: +918901903333" className="hover:text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-pink-500 to-yellow-500 transition-all duration-300">
                +91 890-190-3333
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-600" />
              <a href="tel:+919034040243" className="hover:text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-pink-500 to-yellow-500 transition-all duration-300">
                +91 903-404-0243
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-600" />
              <a href="tel:+919587887702" className="hover:text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-pink-500 to-yellow-500 transition-all duration-300">
                +91 958-788-7702
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-600" />
              <a href="mailto:info@Achariyagroup.com" className="hover:text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-pink-500 to-yellow-500 transition-all duration-300">
                info@Achariyagroup.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/myachariya"
              target="_blank"
              className="p-2 rounded-full bg-white shadow hover:bg-blue-600 hover:text-white transition"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/Achariyagroup/"
              target="_blank"
              className="p-2 rounded-full bg-white shadow hover:bg-pink-600 hover:text-white transition"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://x.com/Achariyagroup"
              target="_blank"
              className="p-2 rounded-full bg-white shadow hover:bg-sky-500 hover:text-white transition"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/Achariyagroup"
              target="_blank"
              className="p-2 rounded-full bg-white shadow hover:bg-blue-700 hover:text-white transition"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCS-2gyn-Fon-QUyO61HPtCA"
              target="_blank"
              className="p-2 rounded-full bg-white shadow hover:bg-red-600 hover:text-white transition"
            >
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-300"></div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {currentYear} Achariya Technologies Pvt. Ltd. — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

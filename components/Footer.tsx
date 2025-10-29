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
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-blue-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#bankbc" className="hover:text-blue-600 transition-colors">
                Bank BC
              </Link>
            </li>
            <li>
              <Link href="#rkcl" className="hover:text-blue-600 transition-colors">
                RKCL
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-blue-600" />
              <a href="tel:+911234567890" className="hover:text-blue-600">
                +91 12345 67890
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-600" />
              <a href="mailto:info@achariya.in" className="hover:text-blue-600">
                info@achariya.in
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

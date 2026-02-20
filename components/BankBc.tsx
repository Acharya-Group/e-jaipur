"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Banknote, Users, Handshake } from "lucide-react";

const BankBc = () => {
  return (
    <section id="bankbc" className="relative py-12 lg:py-14 bg-linear-to-b from-white via-[#f5f8ff] to-[#eaf1ff] text-gray-800 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-blue-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="relative container mx-auto px-6 text-center">
        {/* Section Heading */}
           <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-blue-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent"
        >
          Become a Bank BC Partner
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl mx-auto text-gray-600 mb-6"
        >
          Join our mission to empower financial inclusion across India. As a certified Bank BC partner, 
          you’ll earn commissions, serve your community, and grow your business with RajPay.
        </motion.p>

        {/* Highlight Panels (not cards — subtle glassmorphism style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mb-6 lg:mb-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/60 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-100"
          >
            <div className="flex justify-center mb-4">
              <Banknote className="h-10 w-10 text-yellow-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Earn Attractive Commissions
            </h3>
            <p className="text-gray-600 text-sm">
              Get rewarded for every transaction and service you deliver as a Business Correspondent.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/60 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-100"
          >
            <div className="flex justify-center mb-4">
              <Users className="h-10 w-10 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Empower Your Community
            </h3>
            <p className="text-gray-600 text-sm">
              Help citizens access essential banking, insurance, and government financial services.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/60 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-blue-100"
          >
            <div className="flex justify-center mb-4">
              <Handshake className="h-10 w-10 text-indigo-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Build Trusted Partnerships
            </h3>
            <p className="text-gray-600 text-sm">
              Partner directly with recognized banks and work under authorized institutions.
            </p>
          </motion.div>
        </div>
         <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            href="https://achariyagroup.in/kiosk-banking"
            className="bg-linear-to-r from-indigo-500 to-pink-500 text-white px-10 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all"
          >
               Apply for Bank BC
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BankBc;

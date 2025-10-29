"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Laptop, BookOpenCheck, GraduationCap } from "lucide-react";

const Rkcl = () => {
  return (
    <section id="rkcl" className="relative py-12 lg:py-14 bg-linear-to-b from-white via-[#f7faff] to-[#e7f0ff] text-gray-800 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl -z-10"></div>

      <div className="relative container mx-auto px-6 text-center">
        {/* Custom Heading */}
  
           <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-blue-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent"
        >
            Empower Digital Learning with
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-2xl mx-auto text-gray-600 mb-6"
        >
          Join Rajasthan Knowledge Corporation Limited (RKCL) and offer globally
          recognized digital education programs. Help empower learners with
          essential IT and digital skills under the RajPay initiative.
        </motion.p>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mb-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/60 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-indigo-100"
          >
            <div className="flex justify-center mb-4">
              <Laptop className="h-10 w-10 text-indigo-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Modern IT Education
            </h3>
            <p className="text-gray-600 text-sm">
              Deliver digital courses and practical computer training for all
              age groups.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/60 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-indigo-100"
          >
            <div className="flex justify-center mb-4">
              <BookOpenCheck className="h-10 w-10 text-pink-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Recognized Certification
            </h3>
            <p className="text-gray-600 text-sm">
              Students receive government-approved RKCL certificates upon
              completion of courses.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/60 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-indigo-100"
          >
            <div className="flex justify-center mb-4">
              <GraduationCap className="h-10 w-10 text-yellow-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Skill Empowerment
            </h3>
            <p className="text-gray-600 text-sm">
              Enable youth and professionals to upgrade skills and enhance
              employability through digital education.
            </p>
          </motion.div>
        </div>

        {/* Apply Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link
            href="https://achariyagroup.in/RKCL.aspx"
            className="bg-linear-to-r from-indigo-500 to-pink-500 text-white px-10 py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-lg transition-all"
          >
            Apply for RKCL Center
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Rkcl;

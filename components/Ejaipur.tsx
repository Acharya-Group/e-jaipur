"use client";

import { motion } from "framer-motion";
import { Building2, Globe2, Award, Lightbulb } from "lucide-react";

const Ejaipur = () => {
  return (
    <section id="about" className="relative py-12 lg:py-14 bg-linear-to-b from-white to-gray-50 text-gray-800 overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-pink-200/40 rounded-full blur-3xl -z-10"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-blue-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent"
        >
          About eJaipur — Achariya Technologies Pvt. Ltd.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl mx-auto text-gray-600 mb-6 leading-relaxed"
        >
          Achariya Technologies Private Limited commenced its operations in 2008. 
          Since then, the company has evolved with an innovative and integrated communication 
          approach—covering environment scanning, research & analytics, perception mapping, 
          strategic image building, media relations, advocacy, digital innovation, and 
          government partnerships.
        </motion.p>

        {/* Highlights / Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-6">
          {[
            {
              icon: <Building2 className="h-10 w-10 text-blue-500" />,
              title: "15+ Years of Legacy",
              desc: "Leading digital transformation and technology innovation since 2008.",
            },
            {
              icon: <Globe2 className="h-10 w-10 text-pink-500" />,
              title: "Nationwide Presence",
              desc: "Trusted provider of e-Governance, e-Mitra, G2C, B2C, and Banking Services.",
            },
            {
              icon: <Award className="h-10 w-10 text-yellow-500" />,
              title: "Trusted & Certified",
              desc: "Recognized for quality, transparency, and client satisfaction.",
            },
            {
              icon: <Lightbulb className="h-10 w-10 text-purple-500" />,
              title: "Innovation Driven",
              desc: "We blend technology with human expertise to create meaningful change.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-4 bg-gray-50 rounded-full">{item.icon}</div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="max-w-3xl mx-auto text-gray-600 leading-relaxed"
        >
          Over the years, we have strategically aligned our processes to meet client objectives, 
          ensuring high-quality delivery, transparency, and innovation. Our success is built on 
          trust, technology, and customer satisfaction—making us a preferred partner for 
          individuals, businesses, and governments across India.
        </motion.p>
      </div>
    </section>
  );
};

export default Ejaipur;

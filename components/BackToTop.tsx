"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scroll > 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6 z-50"
    >
      <button
        onClick={scrollToTop}
        className="bg-linear-to-r from-blue-600 via-pink-500 to-yellow-500 text-white shadow-lg rounded-full p-3 md:p-4 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300"
        aria-label="Back to Top"
      >
        <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    </motion.div>
  );
};

export default BackToTop;

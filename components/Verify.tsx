"use client";
import { motion } from "framer-motion";

const VerifyApply = () => {
  const cardsData = [
    {
      id: 1,
      title: "Verify e-Mitra",
      link: "/verify-emitra",
      icon: "✅",
    },
    {
      id: 2,
      title: "Apply For New e-Mitra",
      link: "/contact",
      icon: "📝",
    },
    {
      id: 3,
      title: "Join Telegram Channel",
      link: "https://t.me/myAchariya",
      icon: "📢",
      external: true,
    },
    {
      id: 4,
      title: "SSO Sign In",
      link: "/sso-signin",
      icon: "🔐",
    },
  ];

  return (
    <section className="relative py-20 bg-transition-to-b from-white via-[#f7faff] to-[#eaf3ff] text-gray-800 overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl -z-10"></div>

      <div className="relative container mx-auto px-6">
        {/* Custom Heading */}
        <div className="text-center mb-6">
       
            <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-blue-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent"
        >
            Verify & Apply
        </motion.h2>
       
            <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl mx-auto text-gray-600 mb-4 leading-relaxed"
        >
        Access all verification, application, and update services quickly and
            securely with RajPay.
        </motion.p>
          <div className="w-24 h-1 bg-linear-to-r from-indigo-500 via-pink-500 to-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {cardsData.map((card) => (
            <motion.a
              key={card.id}
              href={card.link}
              target={card.external ? "_blank" : "_self"}
              rel={card.external ? "noopener noreferrer" : ""}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-md p-8 shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl text-center mb-4 transition-transform duration-300 group-hover:scale-125">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg text-center font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                {card.title}
              </h3>

              {/* Subtle hover glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerifyApply;

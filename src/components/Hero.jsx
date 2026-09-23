import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="bg-black text-white min-h-screen flex items-center py-20 px-5 sm:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="uppercase tracking-[5px] sm:tracking-[8px] text-pink-500 text-xs sm:text-sm mb-4">
            UGC CREATOR • BEAUTY • LIFESTYLE
          </p>

          <h1 className="font-serif font-semibold leading-tight mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Creating content that sells,
            <br />
            not just looks pretty.
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0 mb-8">
            I help brands turn scroll-stopping ideas into content that actually
            converts. Short-form video, photography and creative strategy — all
            in one place.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={scrollToContact}
              className="bg-pink-500 hover:bg-pink-400 transition-all duration-300 px-8 py-4 rounded-full font-medium"
            >
              Work With Me
            </button>

            {/* <button
              onClick={scrollToPortfolio}
              className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 px-8 py-4 rounded-full font-medium"
            >
              View Portfolio
            </button> */}
          </div>

          {/* IMAGE BELOW BUTTONS (ONLY MOBILE & TABLET) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center mt-12 lg:hidden"
          >
            <div className="absolute w-64 h-64 bg-pink-600 rounded-full blur-[100px] opacity-30"></div>

            <img
              src="/Image/images.jfif"
              alt="UGC Creator"
              className="relative w-[260px] sm:w-[320px] rounded-[30px] object-cover border border-pink-500/20 shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* IMAGE ON THE RIGHT (LAPTOP & DESKTOP ONLY) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden lg:flex justify-center relative"
        >
          <div className="absolute w-[420px] h-[420px] bg-pink-600 rounded-full blur-[120px] opacity-30"></div>

          <img
            src="/Image/images.jfif"
            alt="UGC Creator"
            className="relative w-[420px] h-[560px] rounded-[32px] object-cover border border-pink-500/20 shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
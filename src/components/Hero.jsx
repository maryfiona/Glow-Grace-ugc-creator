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
      className="min-h-screen bg-black text-white flex items-center py-16 md:py-24 px-5 sm:px-8 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-pink-500 text-xs sm:text-sm mb-4">
            UGC CREATOR • BEAUTY • LIFESTYLE
          </p>

          <h1 className="font-serif leading-tight font-semibold mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Creating content that sells,
            <br className="hidden sm:block" />
            <span className="block">not just looks pretty.</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-7 max-w-xl mx-auto lg:mx-0 mb-8">
            I help brands turn scroll-stopping ideas into content that actually
            converts. Short-form video, photography and creative strategy — all
            in one place.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={scrollToContact}
              className="bg-pink-500 hover:bg-pink-400 transition-all duration-300 px-7 py-4 rounded-full font-medium w-full sm:w-auto"
            >
              Work With Me
            </button>

            <button
              onClick={scrollToPortfolio}
              className="border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transition-all duration-300 px-7 py-4 rounded-full font-medium w-full sm:w-auto"
            >
              View Portfolio
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="order-1 lg:order-2 flex justify-center relative"
        >
          {/* Pink Glow */}
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-pink-600 rounded-full blur-[90px] md:blur-[120px] opacity-30"></div>

          {/* Hero Image */}
          <img
            src="/Image/images.jfif"
            alt="UGC Creator"
            className="relative w-[260px] h-[340px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[500px] lg:w-[430px] lg:h-[560px] object-cover rounded-[30px] shadow-2xl border border-pink-500/20"
          />
        </motion.div>

      </div>
    </section>
  );
}
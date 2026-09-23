import { motion } from "framer-motion";


export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-16 py-20 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[8px] text-pink-500 text-sm mb-4">
            UGC CREATOR • BEAUTY • LIFESTYLE
          </p>

          <h1 className="text-5xl md:text-7xl  font-serif leading-tight mb-6">
            Creating content that sells,
            <br />
            not just looks pretty.
          </h1>

          <p className="text-gray-400 text-lg leading-8 max-w-lg mb-8">
I help brands turn scroll-stopping ideas into content that actually converts. 
Short-form video, photography and creative strategy — all in one place.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={scrollToContact}
              className="bg-pink-500 hover:bg-pink-400 transition-all px-8 py-4 rounded-full font-medium"
            >
              Work With Me
            </button>
{/* 
            <button
              onClick={() =>
                document.getElementById("portfolio")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="border border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white transition-all px-8 py-4 rounded-full font-medium"
            >
              View Portfolio
            </button> */}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Pink Glow */}
          <div className="absolute w-72 h-72 md:w-[420px] md:h-[420px] bg-pink-600 rounded-full blur-[120px] opacity-30"></div>

          {/* Hero Image */}
          <img
            src="/Image/images.jfif"
            alt="UGC Creator"
            className="relative w-full max-w-md rounded-[32px] object-cover shadow-2xl border border-pink-500/20"
          />
        </motion.div>

      </div>
    </section>
  );
}
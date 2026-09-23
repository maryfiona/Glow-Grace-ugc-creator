import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Fenty Beauty",
    review:
      "Grace created authentic content that increased engagement across our campaign. We loved working with her.",
  },
  {
    name: "Rare Beauty",
    review:
      "Beautiful UGC videos with a premium aesthetic. Delivery was fast and professional.",
  },
  {
    name: "Glow Recipe",
    review:
      "Her content felt natural and converted really well for our social ads.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black py-28 px-8">
      <p className="uppercase tracking-[6px] text-pink-500 mb-4">
        Testimonials
      </p>

      <h2 className="text-5xl font-serif mb-14">
        Loved by brands.
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-[#111111] rounded-[28px] p-8 border border-pink-500/20"
          >
            <p className="text-pink-500 text-xl mb-5">★★★★★</p>

            <p className="text-gray-300 leading-7 mb-6">
              "{item.review}"
            </p>

            <h3 className="font-semibold text-white">
              {item.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
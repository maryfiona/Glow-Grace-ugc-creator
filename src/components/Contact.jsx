import { FaInstagram, FaTiktok, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-8 bg-gradient-to-b from-[#090909] to-black"
    >
      <p className="uppercase tracking-[6px] text-pink-500 mb-4">
        Contact
      </p>

      <h2 className="text-5xl font-serif mb-6">
        Let's create together.
      </h2>

      <p className="text-gray-400 mb-12 max-w-xl">
        Ready to work together? Replace these links with your client's details.
      </p>

      <div className="space-y-6 text-lg">
        <a
          href="mailto:hello@email.com"
          className="flex items-center gap-4 hover:text-pink-500"
        >
          <FaEnvelope size={22} />
          hello@email.com
        </a>

        <a
          href="https://instagram.com"
          className="flex items-center gap-4 hover:text-pink-500"
        >
          <FaInstagram size={22} />
          @yourhandle
        </a>

        <a
          href="https://tiktok.com"
          className="flex items-center gap-4 hover:text-pink-500"
        >
          <FaTiktok size={22} />
          @yourhandle
        </a>

        <a
          href="https://wa.me/2348000000000"
          className="flex items-center gap-4 hover:text-pink-500"
        >
          <FaWhatsapp size={22} />
          +234 800 000 0000
        </a>
      </div>

      <button className="mt-12 bg-pink-500 hover:bg-pink-400 transition px-8 py-4 rounded-full text-white">
        Book a Collaboration
      </button>
    </section>
  );
}
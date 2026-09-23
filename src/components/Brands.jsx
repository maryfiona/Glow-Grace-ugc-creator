import { useEffect, useState } from "react";

export default function Brands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    loadBrands();

    // Update immediately when admin saves a brand
    window.addEventListener("storage", loadBrands);

    return () => window.removeEventListener("storage", loadBrands);
  }, []);

  function loadBrands() {
    const saved = JSON.parse(localStorage.getItem("brands")) || [];
    setBrands(saved);
  }

  return (
    <section
      id="brands"
      className="scroll-mt-28 bg-[#080808] py-28 px-8 text-white"
    >
      <p className="uppercase tracking-[6px] text-pink-500 mb-3">
        Trusted By
      </p>

      <h2 className="text-5xl font-serif mb-16">
        Brands I've Worked With
      </h2>

      {brands.length === 0 ? (
        <p className="text-gray-500">No brands added yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 justify-items-center">

          {brands.map((brand, index) => (
            <div key={index} className="text-center">

              <div className="relative w-40 h-40 rounded-full overflow-hidden border border-gray-500">

                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/35"></div>

                {/* BIG BOLD NAME IN THE MIDDLE */}
                <div className="absolute inset-0 flex items-center justify-center px-3">
                  <h3 className="text-white font-black text-xl uppercase text-center leading-tight drop-shadow-lg">
                    {brand.name}
                  </h3>
                </div>

              </div>

            </div>
          ))}

        </div>
      )}
    </section>
  );
}
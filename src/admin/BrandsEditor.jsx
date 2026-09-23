import { useState, useEffect } from "react";

export default function BrandsEditor() {
  const [brands, setBrands] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [brandLogo, setBrandLogo] = useState("");

  // Load saved brands
  useEffect(() => {
    const savedBrands = JSON.parse(localStorage.getItem("brands")) || [];
    setBrands(savedBrands);
  }, []);

  // Upload logo
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setBrandLogo(reader.result);
    };

    reader.readAsDataURL(file);
  };

  // Save brand
  const saveBrand = () => {
    if (!brandName || !brandLogo) {
      alert("Please upload a logo and enter a brand name.");
      return;
    }

    const updated = [
      ...brands,
      {
        name: brandName.toUpperCase(),
        logo: brandLogo,
      },
    ];

    setBrands(updated);
    localStorage.setItem("brands", JSON.stringify(updated));

    setBrandName("");
    setBrandLogo("");
  };

  // Delete brand
  const deleteBrand = (index) => {
    const updated = brands.filter((_, i) => i !== index);
    setBrands(updated);
    localStorage.setItem("brands", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-5">

      <div className="max-w-2xl mx-auto">

        <p className="text-pink-500 uppercase tracking-[4px] text-sm mb-2">
          Admin Panel
        </p>

        <h1 className="text-4xl font-bold mb-8">
          Brands Editor
        </h1>

        {/* Upload Card */}
        <div className="bg-[#111] rounded-3xl p-6 border border-pink-500/20">

          <input
            type="text"
            placeholder="Brand Name (e.g. Medicube)"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            className="w-full bg-[#1d1d1d] rounded-xl p-4 mb-5 text-white outline-none"
          />

          {/* Upload Button */}
          <label className="inline-block cursor-pointer bg-pink-500 hover:bg-pink-400 transition px-6 py-3 rounded-full font-semibold">
            Upload Brand Logo

            <input
              hidden
              type="file"
              accept="image/*"
              onChange={handleUpload}
            />
          </label>

          {/* Preview */}
          {brandLogo && (
            <div className="flex justify-center mt-8">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-pink-500">

                <img
                  src={brandLogo}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h2 className="text-white font-black text-xl uppercase text-center px-2">
                    {brandName}
                  </h2>
                </div>

              </div>
            </div>
          )}

          <button
            onClick={saveBrand}
            className="mt-8 w-full bg-pink-500 hover:bg-pink-400 py-3 rounded-full font-semibold"
          >
            Save Brand
          </button>

        </div>

        {/* Saved Brands */}
        <h2 className="text-3xl font-bold mt-12 mb-6">
          Saved Brands
        </h2>

        <div className="grid grid-cols-2 gap-6">

          {brands.map((brand, index) => (
            <div key={index} className="text-center">

              <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border border-gray-500">

                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                  <h3 className="text-white font-black text-lg uppercase text-center px-2 leading-tight">
                    {brand.name}
                  </h3>
                </div>

              </div>

              <button
                onClick={() => deleteBrand(index)}
                className="mt-3 text-red-400 hover:text-red-300 text-sm"
              >
                Delete
              </button>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}
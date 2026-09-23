import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function Videos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    const { data, error } = await supabase
      .from("videos")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setVideos(data);
    }
  }

  // Always show at least 4 cards
  const totalCards = Math.max(videos.length, 4);

  return (
    <section
      id="portfolio"
      className="bg-black text-white py-20 px-4 sm:px-6 lg:px-12"
    >
      {/* Heading */}
      <p className="uppercase tracking-[5px] text-pink-500 text-xs sm:text-sm mb-3">
      Video Projects
      </p>

      

      <p className="text-gray-400 max-w-xl text-sm sm:text-base mb-12">
        A selection of short-form concepts designed for attention, trust and
        action.
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Array.from({ length: totalCards }).map((_, index) => {
          const item = videos[index];

          return (
            <div key={index} className="w-full">

              {/* Phone Frame */}
              <div className="bg-[#24244A] p-[4px] rounded-[28px] shadow-xl">

                <div className="relative bg-[#05061C] rounded-[24px] overflow-hidden aspect-[9/16]">

                  {/* Speaker */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-1.5 rounded-full bg-gray-500 z-20"></div>

                  {item ? (
                    <video
                      src={item.video_url}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#05061C] flex items-center justify-center">
                      <p className="text-gray-600 text-[10px] uppercase tracking-[2px]">
                        Coming Soon
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Title */}
              <p className="mt-3 text-center uppercase text-[11px] sm:text-xs font-semibold tracking-[2px]">
                {item ? item.title : "Coming Soon"}
              </p>

            </div>
          );
        })}
      </div>
    </section>
  );
}
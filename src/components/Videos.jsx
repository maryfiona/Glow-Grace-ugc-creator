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

  const totalCards = Math.max(videos.length, 4);

  return (
    <section
      id="videos"
      className="bg-black text-white py-24 px-6 md:px-10"
    >
      <p className="uppercase tracking-[6px] text-pink-500 mb-3">
      Videos Project
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
        {/* <h2 className="text-5xl md:text-7xl font-serif leading-none">
          Made to move.
        </h2> */}

        <p className="text-gray-400 max-w-sm">
          A selection of short-form concepts designed for attention, trust and action.
        </p>
      </div>

      <div className="flex gap-7 overflow-x-auto pb-6 no-scrollbar">

        {Array.from({ length: totalCards }).map((_, index) => {
          const item = videos[index];

          return (
            <div key={index} className="min-w-[230px]">

              {/* Phone Frame */}
              <div className="rounded-[38px] bg-[#26264D] p-[5px] shadow-xl">

                <div className="relative rounded-[34px] overflow-hidden bg-[#05061C] h-[500px]">

                  {/* Speaker */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 w-20 h-2 rounded-full bg-gray-500"></div>

                  {item ? (
                    <video
                      src={item.video_url}
                      controls
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#05061C]" />
                  )}

                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="uppercase tracking-[2px] text-sm font-semibold">
                  {item ? item.title : "Coming Soon"}
                </p>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}
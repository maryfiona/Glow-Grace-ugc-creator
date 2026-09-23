import { useState, useEffect } from "react";
import { supabase } from "../supabase";

export default function VideosEditor() {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  // Load all videos
  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    const { data, error } = await supabase
      .from("videos")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setVideos(data);
  }

  function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    setVideoFile(file);
    setPreview(URL.createObjectURL(file));
  }

  async function saveVideo() {
    if (!title || !videoFile) {
      alert("Please enter a title and upload a video.");
      return;
    }

    setLoading(true);

    const fileName = `${Date.now()}-${videoFile.name}`;

    // Upload video to Storage bucket
    const { error: uploadError } = await supabase.storage
      .from("videos")
      .upload(fileName, videoFile);

    if (uploadError) {
      alert(uploadError.message);
      setLoading(false);
      return;
    }

    // Get public URL
    const { data } = supabase.storage
      .from("videos")
      .getPublicUrl(fileName);

    // Save URL in database
    const { error: dbError } = await supabase.from("videos").insert([
      {
        title,
        video_url: data.publicUrl,
      },
    ]);

    if (dbError) {
      alert(dbError.message);
      setLoading(false);
      return;
    }

    alert("Video uploaded successfully!");

    setTitle("");
    setVideoFile(null);
    setPreview("");
    setLoading(false);

    getVideos();
  }

  async function deleteVideo(video) {
    const fileName = video.video_url.split("/").pop();

    await supabase.storage.from("videos").remove([fileName]);
    await supabase.from("videos").delete().eq("id", video.id);

    getVideos();
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      <div className="max-w-xl mx-auto">

        <p className="uppercase tracking-[5px] text-pink-500 text-sm mb-2">
          Admin Panel
        </p>

        <h1 className="text-4xl font-bold mb-8">
          Videos Editor
        </h1>

        <div className="bg-[#111] rounded-3xl p-6 border border-pink-500/20">

          <input
            type="text"
            placeholder="Video Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#1D1D1D] rounded-xl p-4 mb-5 outline-none"
          />

          <label className="cursor-pointer inline-block bg-pink-500 hover:bg-pink-400 px-6 py-3 rounded-full font-semibold">
            Upload Video
            <input
              hidden
              type="file"
              accept="video/*"
              onChange={handleUpload}
            />
          </label>

          {preview && (
            <div className="mt-6 flex justify-center">
              <video
                src={preview}
                controls
                className="w-[180px] h-[320px] rounded-2xl object-cover"
              />
            </div>
          )}

          <button
            onClick={saveVideo}
            disabled={loading}
            className="w-full mt-6 bg-pink-500 hover:bg-pink-400 py-3 rounded-full font-semibold disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Save Video"}
          </button>

        </div>

        <h2 className="text-3xl font-bold mt-10 mb-6">
          Saved Videos ({videos.length})
        </h2>

        <div className="space-y-5">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-[#111] rounded-2xl p-4 flex gap-4 items-start"
            >
              <video
                src={video.video_url}
                controls
                className="w-[120px] h-[210px] rounded-xl object-cover"
              />

              <div className="flex-1">
                <p className="uppercase font-semibold mb-3">
                  {video.title}
                </p>

                <button
                  onClick={() => deleteVideo(video)}
                  className="text-red-400 text-sm"
                >
                  Delete Video
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
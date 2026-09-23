import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import { FaUpload, FaTrash } from "react-icons/fa";
import BackButton from "../admin/BackButton";

export default function VideosEditor() {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch videos when page loads
  useEffect(() => {
    getVideos();
  }, []);

  async function getVideos() {
    const { data, error } = await supabase
      .from("videos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    setVideos(data || []);
  }

  // Choose video
  function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    setVideoFile(file);
    setPreview(URL.createObjectURL(file));
  }

  // Save video
  async function saveVideo() {
    if (!title.trim() || !videoFile) {
      alert("Please enter a title and choose a video.");
      return;
    }

    setLoading(true);

    try {
      const fileName = `${Date.now()}-${videoFile.name}`;

      // Upload video to Storage bucket
      const { error: uploadError } = await supabase.storage
        .from("Nora-ugc-creator")
        .upload(fileName, videoFile);

      if (uploadError) throw uploadError;

      // Generate public URL
      const { data: urlData } = supabase.storage
        .from("Nora-ugc-creator")
        .getPublicUrl(fileName);

      const publicUrl = urlData.publicUrl;

      // Save into database
      const { error: insertError } = await supabase.from("videos").insert({
        title: title.trim(),
        video_url: publicUrl,
      });

      if (insertError) throw insertError;

      alert("Video uploaded successfully!");

      // Reset
      setTitle("");
      setVideoFile(null);
      setPreview("");

      // Refresh list
      getVideos();
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  // Delete video
  async function deleteVideo(video) {
    const fileName = video.video_url.split("/").pop();

    try {
      await supabase.storage
        .from("Nora-ugc-creator")
        .remove([fileName]);

      await supabase
        .from("videos")
        .delete()
        .eq("id", video.id);

      getVideos();
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-black text-white px-5 py-10">
      <BackButton/>
      <div className="max-w-6xl mx-auto">

        <p className="uppercase tracking-[5px] text-pink-500 text-xs mb-2">
          Admin Panel
        </p>

        <h1 className="text-4xl font-serif mb-8">
          Videos Editor
        </h1>

        {/* Upload Card */}
        <div className="bg-[#161616] rounded-[30px] border border-pink-500/20 p-6 mb-12">

          <input
            type="text"
            placeholder="Enter Video Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#242424] rounded-xl p-4 outline-none mb-5"
          />

          <label className="flex items-center justify-center gap-3 bg-pink-500 hover:bg-pink-400 rounded-full py-3 cursor-pointer font-semibold transition">
            <FaUpload />
            Choose Video

            <input
              hidden
              type="file"
              accept="video/*"
              onChange={handleUpload}
            />
          </label>

          {/* Preview */}
          {preview && (
            <div className="flex justify-center mt-6">
              <video
                src={preview}
                controls
                className="w-[180px] h-[320px] rounded-[22px] object-cover border border-pink-500"
              />
            </div>
          )}

          <button
            onClick={saveVideo}
            disabled={loading}
            className="w-full mt-6 bg-pink-500 hover:bg-pink-400 py-3 rounded-full font-semibold disabled:opacity-50 transition"
          >
            {loading ? "Uploading..." : "Save Video"}
          </button>

        </div>

        {/* Uploaded Videos */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-serif">
            Uploaded Videos
          </h2>

          <span className="text-pink-400 text-sm">
            {videos.length} Video(s)
          </span>
        </div>

        {videos.length === 0 ? (
          <div className="bg-[#161616] rounded-[30px] border border-pink-500/10 py-16 text-center text-gray-500">
            No videos uploaded yet.
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-[#161616] rounded-[24px] border border-pink-500/10 p-3"
              >
                <video
                  src={video.video_url}
                  controls
                  className="w-full aspect-[9/16] rounded-[18px] object-cover"
                />

                <p className="mt-3 text-center uppercase text-[11px] font-semibold tracking-[2px] line-clamp-2">
                  {video.title}
                </p>

                <button
                  onClick={() => deleteVideo(video)}
                  className="mt-3 w-full flex items-center justify-center gap-2 bg-red-500/10 text-red-400 py-2 rounded-xl hover:bg-red-500/20 transition"
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
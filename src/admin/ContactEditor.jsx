import { useEffect, useState } from "react";
import { supabase } from "../supabase";
import BackButton from "./BackButton";
import { FaSave, FaTrash } from "react-icons/fa";

export default function ContactEditor() {
  const [rowId, setRowId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [contact, setContact] = useState({
    email: "",
    phone: "",
    whatsapp: "",
    instagram: "",
    tiktok: "",
    location: "",
  });

  useEffect(() => {
    fetchContact();
  }, []);

  // Get contact info
  async function fetchContact() {
    const { data, error } = await supabase
      .from("contact")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(1);

    if (error) {
      console.error(error);
      return;
    }

    if (data.length > 0) {
      const info = data[0];

      setRowId(info.id);

      setContact({
        email: info.email || "",
        phone: info.phone || "",
        whatsapp: info.whatsapp || "",
        instagram: info.instagram || "",
        tiktok: info.tiktok || "",
        location: info.location || "",
      });
    }
  }

  function handleChange(e) {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  }

  // Save Contact
  async function saveContact() {
    setLoading(true);

    try {
      let error;

      if (rowId) {
        ({ error } = await supabase
          .from("contact")
          .update(contact)
          .eq("id", rowId));
      } else {
        const { data, error: insertError } = await supabase
          .from("contact")
          .insert([contact])
          .select();

        error = insertError;

        if (data && data.length > 0) {
          setRowId(data[0].id);
        }
      }

      if (error) throw error;

      alert("Contact information updated successfully!");
      fetchContact();
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Delete Contact
  async function deleteContact() {
    if (!rowId) {
      alert("No contact information found.");
      return;
    }

    const confirmDelete = window.confirm(
      "Delete all contact information?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("contact")
      .delete()
      .eq("id", rowId);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Contact information deleted.");

    setRowId(null);

    setContact({
      email: "",
      phone: "",
      whatsapp: "",
      instagram: "",
      tiktok: "",
      location: "",
    });
  }

  return (
    <div className="min-h-screen bg-black text-white py-10 px-5">
      <div className="max-w-4xl mx-auto">

        <BackButton />

        <p className="uppercase tracking-[5px] text-pink-500 text-xs mb-2">
          Admin Panel
        </p>

        <h1 className="text-4xl font-serif mb-8">
          Contact Information
        </h1>

        <div className="bg-[#161616] rounded-[30px] border border-pink-500/20 p-6 space-y-5">

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={contact.email}
            onChange={handleChange}
            className="w-full bg-[#242424] p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={contact.phone}
            onChange={handleChange}
            className="w-full bg-[#242424] p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            name="whatsapp"
            placeholder="WhatsApp Number (2348012345678)"
            value={contact.whatsapp}
            onChange={handleChange}
            className="w-full bg-[#242424] p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            name="instagram"
            placeholder="Instagram Username (without @)"
            value={contact.instagram}
            onChange={handleChange}
            className="w-full bg-[#242424] p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            name="tiktok"
            placeholder="TikTok Username (without @)"
            value={contact.tiktok}
            onChange={handleChange}
            className="w-full bg-[#242424] p-4 rounded-xl outline-none"
          />

          <input
            type="text"
            name="location"
            placeholder="Location (e.g. Lagos, Nigeria)"
            value={contact.location}
            onChange={handleChange}
            className="w-full bg-[#242424] p-4 rounded-xl outline-none"
          />

          <div className="flex flex-col sm:flex-row gap-4 pt-4">

            <button
              onClick={saveContact}
              disabled={loading}
              className="flex-1 bg-pink-500 hover:bg-pink-400 py-4 rounded-full font-semibold flex items-center justify-center gap-3"
            >
              <FaSave />
              {loading ? "Saving..." : "Save Contact"}
            </button>

            <button
              onClick={deleteContact}
              className="flex-1 bg-red-600 hover:bg-red-500 py-4 rounded-full font-semibold flex items-center justify-center gap-3"
            >
              <FaTrash />
              Delete Contact
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
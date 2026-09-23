import Sidebar from "./Sidebar";
import { NavLink } from "react-router-dom";
import {
  FaVideo,
  FaBuilding,
  FaStar,
  FaUser,
  FaChartBar,
  FaEnvelope,
} from "react-icons/fa";

export default function Dashboard() {
  const cards = [
    {
      title: "VIDEOS",
      icon: <FaVideo className="text-3xl text-pink-400" />,
      path: "/admin/videos",
      desc: "Upload and manage videos",
    },
    {
      title: "BRANDS",
      icon: <FaBuilding className="text-3xl text-pink-400" />,
      path: "/admin/brands",
      desc: "Add and edit brand logos",
    },
    {
      title: "HERO",
      icon: <FaUser className="text-3xl text-pink-400" />,
      path: "/admin/hero",
      desc: "Change homepage hero section",
    },
    {
      title: "RESULTS & SERVICES",
      icon: <FaChartBar className="text-3xl text-pink-400" />,
      path: "/admin/results",
      desc: "Edit campaign results and services",
    },
    {
      title: "TESTIMONIALS",
      icon: <FaStar className="text-3xl text-pink-400" />,
      path: "/admin/testimonials",
      desc: "Manage client testimonials",
    },
    {
      title: "CONTACT",
      icon: <FaEnvelope className="text-3xl text-pink-400" />,
      path: "/admin/contact",
      desc: "Update contact information",
    },
  ];

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">

        <p className="uppercase tracking-[5px] text-pink-500 text-xs mb-2">
          Admin Panel
        </p>

        <h1 className="text-4xl md:text-5xl font-serif mb-3">
          Dashboard
        </h1>

        <p className="text-gray-400 mb-10">
          Welcome to your Glow & Grace content management system.
        </p>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.map((card) => (
            <NavLink
              key={card.title}
              to={card.path}
              className="bg-[#111111] border border-pink-500/10 rounded-[28px] p-6 hover:border-pink-400 hover:bg-[#181818] transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="mb-5">{card.icon}</div>

              <h2 className="text-pink-300 uppercase tracking-[3px] text-sm mb-2">
                {card.title}
              </h2>

              <p className="text-gray-400 text-sm leading-6">
                {card.desc}
              </p>
            </NavLink>
          ))}
        </div>

        {/* Quick Message */}
        <div className="mt-12 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/20 rounded-[28px] p-6">
          <h2 className="text-2xl font-serif text-pink-200 mb-3">
            Quick Tip
          </h2>

          <p className="text-gray-300 leading-7">
            Click any card above to edit that section of your portfolio. Any
            changes you save in the admin panel will automatically appear on your
            website.
          </p>
        </div>

      </div>
    </div>
  );
}
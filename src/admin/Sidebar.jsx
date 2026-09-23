import { Link } from "react-router-dom";
import { FaVideo,FaStar,FaUser,FaBuilding,FaEnvelope,FaSignOutAlt } from "react-icons/fa";

export default function Sidebar(){

return(

<aside className="bg-[#111] w-64 min-h-screen p-8">

<h1 className="text-pink-500 text-2xl font-serif mb-10">
Glow & Grace
</h1>

<nav className="space-y-6">

<Link to="/admin/videos" className="flex items-center gap-3 text-white">
<FaVideo/> Videos
</Link>

<Link to="/admin/brands" className="flex items-center gap-3 text-white">
<FaBuilding/> Brands
</Link>

<Link to="/admin/hero" className="flex items-center gap-3 text-white">
<FaUser/> Hero
</Link>

<Link to="/admin/testimonials" className="flex items-center gap-3 text-white">
<FaStar/> Testimonials
</Link>

<Link to="/admin/contact" className="flex items-center gap-3 text-white">
<FaEnvelope/> Contact
</Link>

<button
onClick={()=>{
localStorage.removeItem("admin");
window.location="/admin/login";
}}
className="flex items-center gap-3 text-pink-500 mt-10"
>
<FaSignOutAlt/> Logout
</button>

</nav>

</aside>

)

}
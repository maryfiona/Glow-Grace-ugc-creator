import Sidebar from "./Sidebar";

export default function Dashboard(){

return(

<div className="flex bg-black text-white">

<Sidebar/>

<div className="flex-1 p-10">

<h1 className="text-5xl font-serif mb-8">
Dashboard
</h1>

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#111] p-6 rounded-[24px]">
<h2 className="text-pink-500 text-sm">VIDEOS</h2>
<p className="text-4xl mt-4">12</p>
</div>

<div className="bg-[#111] p-6 rounded-[24px]">
<h2 className="text-pink-500 text-sm">BRANDS</h2>
<p className="text-4xl mt-4">8</p>
</div>

<div className="bg-[#111] p-6 rounded-[24px]">
<h2 className="text-pink-500 text-sm">TESTIMONIALS</h2>
<p className="text-4xl mt-4">15</p>
</div>

</div>

</div>

</div>

)

}
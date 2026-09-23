import { useState } from "react";

export default function TestimonialsEditor(){

const [reviews,setReviews]=useState([]);
const [review,setReview]=useState("");

function addReview(){

setReviews([...reviews,review]);

setReview("");

}

return(

<div className="bg-black text-white min-h-screen p-10">

<h1 className="text-5xl font-serif mb-8">
Testimonials
</h1>

<textarea
value={review}
onChange={(e)=>setReview(e.target.value)}
className="w-full h-36 bg-[#111] rounded-xl p-5 mb-5"
/>

<button
onClick={addReview}
className="bg-pink-500 px-8 py-4 rounded-full"
>
Add Testimonial
</button>

<div className="space-y-4 mt-10">

{reviews.map((item,index)=>(

<div
key={index}
className="bg-[#111] p-6 rounded-[24px]"
>
{item}
</div>

))}

</div>

</div>

)

}
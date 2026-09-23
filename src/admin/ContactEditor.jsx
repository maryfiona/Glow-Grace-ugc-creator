import { useState } from "react";

export default function ContactEditor(){

const [contact,setContact]=useState({
instagram:"",
tiktok:"",
email:"",
whatsapp:""
})

return(

<div className="bg-black text-white min-h-screen p-10">

<h1 className="text-5xl font-serif mb-10">
Contact Information
</h1>

{Object.keys(contact).map((field)=>(

<input
key={field}
placeholder={field}
value={contact[field]}
onChange={(e)=>setContact({
...contact,
[field]:e.target.value
})}
className="w-full bg-[#111] p-4 rounded-xl mb-5"
/>

))}

<button className="bg-pink-500 px-8 py-4 rounded-full">
Save Contact
</button>

</div>

)

}
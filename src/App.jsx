import { BrowserRouter,Routes,Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Dashboard from "./admin/Dashboard";
import VideosEditor from "./admin/VideosEditor";
import BrandsEditor from "./admin/BrandsEditor";
import TestimonialsEditor from "./admin/TestimonialEditor";
import ContactEditor from "./admin/ContactEditor";

import Login from "./admin/Login";

import ProtectedRoute from "./components/ProtectedRoute";

export default function App(){

return(

<BrowserRouter>
<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/admin/login" element={<Login/>}/>

<Route path="/admin" element={
<ProtectedRoute>
<Dashboard/>
</ProtectedRoute>
}/>

<Route path="/admin/videos" element={
<ProtectedRoute>
<VideosEditor/>
</ProtectedRoute>
}/>

<Route path="/admin/brands" element={
<ProtectedRoute>
<BrandsEditor/>
</ProtectedRoute>
}/>

<Route path="/admin/testimonials" element={
<ProtectedRoute>
<TestimonialsEditor/>
</ProtectedRoute>
}/>

<Route path="/admin/contact" element={
<ProtectedRoute>
<ContactEditor/>
</ProtectedRoute>
}/>

</Routes>

</BrowserRouter>

)

}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const navigate=useNavigate();

  function login(e){
    e.preventDefault();

    // Temporary login
    if(email==="admin@email.com" && password==="123456"){
      localStorage.setItem("admin","true");
      navigate("/admin");
    }else{
      alert("Wrong email or password");
    }
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">

      <form
      onSubmit={login}
      className="bg-[#111] p-10 rounded-[32px] w-full max-w-md border border-pink-500/20">

        <h1 className="text-4xl font-serif mb-2 text-white">
          Admin Login
        </h1>

        <p className="text-gray-400 mb-8">
          Welcome back.
        </p>

        <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="w-full mb-5 bg-[#1d1d1d] p-4 rounded-xl text-white"/>

        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className="w-full mb-6 bg-[#1d1d1d] p-4 rounded-xl text-white"/>

        <button className="w-full bg-pink-500 rounded-full py-4">
          Login
        </button>

      </form>

    </main>
  )
}
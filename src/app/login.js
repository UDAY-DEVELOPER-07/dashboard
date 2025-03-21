"use client"
import { Input } from "@/components/ui/input"
import "./globals.css";
import { useState } from "react";
import React from "react";


export default function Login() {
  const [email, setemail ]=useState("")
  const [password, setpassword ]=useState("")
const handleemailchange = (e) => {
  setemail(e.target.value)
}

const handlepasswordchange = (e) => {
  setpassword(e.target.value)
}

  return (
    <div className="bg-linear-to-r/shorter from-indigo-500 to-teal-400 h-screen w-screen flex items-center justify-center">
      <div className="bg-[#d8bccc] p-8 rounded-none shadow-lg h-87 w-96 flex flex-col items-center justify-center sm:rounded-4xl"> 
        <h1 className="text-3xl text-[#00264d] font-extrabold mb-4">Login</h1>
        <div className="h-12 bg-[#00264d] mt-5 mb-4 w-60">
          <Input 
          className= "h-12 rounded-none text-white font-bold" 
          type="email" placeholder="Email" 
          value={email} 
          onChange = {handleemailchange} 
          required
          />
        </div>
        
        <div className="h-12 bg-[#00264d] font-bold w-60">
          <Input type="password" 
          className= "h-12 text-white rounded-none" 
          placeholder="Password" 
          value = {password} 
          onChange = {handlepasswordchange}
          required
          />
        </div>
        <button 
          className="bg-[#00264d] text-white font-bold mt-8 px-4 py-2 rounded-lg" 
          onClick = {() => {if (password.length < 6) {
          alert("Password must be greater than 6 characters")
          }}}
          >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

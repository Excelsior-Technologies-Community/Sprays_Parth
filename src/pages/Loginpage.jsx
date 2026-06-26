import React, { useState } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="min-h-screen py-16 px-4 flex flex-col justify-center items-center bg-white font-sans antialiased">
      
      {/* Back to Home Action */}
      <div className="flex items-center gap-3 mb-8 group">
        <a 
          href="/" 
          className="border border-neutral-200 rounded-full p-2.5 hover:bg-neutral-50 transition-colors duration-200"
          aria-label="Back to Home"
        >
          <MoveLeft size={14} className="text-neutral-600 group-hover:-translate-x-0.5 transition-transform" />
        </a>
        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
          Back to Home
        </span>
      </div>

      {/* Primary Page Header */}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-10 text-center">
        Already Registered?
      </h1>

      {/* Main Login Card */}
      <div className="w-full max-w-[650px] border border-neutral-200 rounded-xl bg-white shadow-sm overflow-hidden">
        
        {/* Card Header */}
        <div className="border-b border-neutral-200 bg-neutral-50/50 px-6 py-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-800">
            Already Registered?
          </h2>
        </div>

        {/* Form Container */}
        <form onSubmit={handleLogin} className="flex flex-col">
          
          <div className="p-6 md:p-8">
            <span className="block text-base font-semibold text-neutral-900 mb-6">
              I am a returning customer
            </span>

            {/* Inputs Layout Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
              
              {/* Email Input Field */}
              <div className="flex flex-col gap-2"> 
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Email<span className="text-red-500 ml-0.5">*</span> :
                </label>
                <input 
                  type="email" 
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address" 
                  required 
                  className="px-4 py-3 border border-neutral-200 rounded-lg outline-none text-sm placeholder-neutral-400 focus:border-neutral-400 transition-colors"
                />
              </div>

              {/* Password Input Field */}
              <div className="flex flex-col gap-2"> 
                <label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                  Password<span className="text-red-500 ml-0.5">*</span> :
                </label>
                <input 
                  type="password" 
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password" 
                  required 
                  className="px-4 py-3 border border-neutral-200 rounded-lg outline-none text-sm placeholder-neutral-400 focus:border-neutral-400 transition-colors"
                />
              </div>

            </div>
          </div>

          {/* Form Actions (Forgot Password & Submit) */}
          <div className="mx-6 md:mx-8 py-5 border-t border-neutral-200 flex items-center justify-end gap-6">
            <a 
              href="/forgot-password" 
              className="text-xs font-semibold text-red-500 hover:text-red-600 underline underline-offset-4 transition-colors"
            >
              Forgot Password?
            </a>
            <button 
              type="submit"
              className="flex items-center gap-2 bg-black hover:bg-neutral-800 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all group duration-200"
            >
              Login 
              <MoveRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Bottom Register Redirection Banner */}
          <div className="bg-neutral-50 px-6 py-5 border-t border-neutral-200 flex flex-col sm:flex-row gap-3 items-center justify-center">
            <span className="text-xs font-medium text-neutral-500">
              If you don't have an account
            </span>
            <a 
              href="/register" 
              className="flex items-center gap-2 bg-neutral-900 hover:bg-black text-white px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
            >
              Register 
              <MoveRight size={12} />
            </a>
          </div>

        </form>
      </div>

    </div>
  );
}
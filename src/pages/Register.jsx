import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Account Data:', formData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 font-sans selection:bg-slate-200">
      
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-10 text-center">
        Create account
      </h1>
      
      {/* Form Card Container */}
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-[650px] border border-gray-200 rounded-lg bg-white shadow-sm"
      >
        
        {/* Section 1: Personal Details */}
        <div className="p-8">
          <h2 className="text-lg text-black mb-6">
            Your <span className="font-bold">Personal Details</span>
          </h2>
          
          {/* Name Row */}
          <div className="flex flex-col sm:flex-row gap-6 mb-5">
            <div className="flex flex-col flex-1">
              <label htmlFor="firstName" className="text-sm font-semibold text-black mb-2.5">
                First Name<span className="text-red-500 ml-0.5">*</span> :
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 border border-gray-200 rounded-md text-base placeholder-black outline-none focus:border-gray-400 transition-colors"
              />
            </div>
            
            <div className="flex flex-col flex-1">
              <label htmlFor="lastName" className="text-sm font-semibold text-black mb-2.5">
                Last Name<span className="text-red-500 ml-0.5">*</span> :
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 border border-gray-200 rounded-md text-base placeholder-black outline-none focus:border-gray-400 transition-colors"
              />
            </div>
          </div>

          {/* Email Row */}
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-sm font-semibold text-black mb-2.5">
              E-mail<span className="text-red-500 ml-0.5">*</span> :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 border border-gray-200 rounded-md text-base placeholder-black outline-none focus:border-gray-400 transition-colors"
            />
          </div>
        </div>

        {/* Section 2: Password Details */}
        <div className="p-8 border-t border-gray-200">
          <h2 className="text-lg text-black mb-6">
            Your <span className="font-bold">Password</span>
          </h2>
          
          <div className="flex flex-col w-full">
            <label htmlFor="password" className="text-sm font-semibold text-black mb-2.5">
              Password<span className="text-red-500 ml-0.5">*</span> :
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3.5 border border-gray-200 rounded-md text-base placeholder-black outline-none focus:border-gray-400 transition-colors"
            />
          </div>
        </div>

        {/* Form Footer Action */}
        <div className="px-8 py-6 border-t border-gray-200 flex justify-end">
          <button 
            type="submit" 
            className="bg-black hover:bg-neutral-800 text-white font-semibold px-9 py-3 rounded-full text-base flex items-center gap-2 transition-colors duration-200 group"
          >
            Create <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
          </button>
        </div>

      </form>
    </div>
  );
};

export default Register;
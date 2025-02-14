import React from 'react';

const Join = () => {
  return (
    <div className="bg-[#F9F9F9] py-10 flex justify-center items-center">
      <div className="bg-white w-full max-w-6xl px-6 sm:px-12 py-8 rounded-lg shadow-md">
        {/* Heading */}
        <h1 className="text-center text-2xl lg:text-3xl font-medium text-[#2A254B] mb-6">
          Join the club and get the benefits
        </h1>
        {/* Subtext */}
        <p className="text-center text-base sm:text-lg md:text-xl text-[#2A254B] mb-8">
          Sign up for our newsletter and receive exclusive offers on new <br className="hidden sm:block" /> ranges, sales, pop-up stores, and more.
        </p>
        {/* Input Field */}
        <div className="flex justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md px-4 py-3 border rounded-lg border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#4E4D93] focus:border-transparent"
          />
          <button className="px-6 py-3 bg-[#4E4D93] text-white rounded-lg hover:bg-[#3C366B]">
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;

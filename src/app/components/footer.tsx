import React from "react";


const Footer = () => {
  return (
    <footer className="bg-[#2A254B] text-white py-10">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">Menu</h3>
          <ul className="space-y-2">
            <li>New arrivals</li>
            <li>Best sellers</li>
            <li>Recently viewed</li>
            <li>Popular this week</li>
            <li>All products</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>Crockery</li>
            <li>Furniture</li>
            <li>Homeware</li>
            <li>Plant pots</li>
            <li>Chairs</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Our Company</h3>
          <ul className="space-y-2">
            <li>About us</li>
            <li>Vacancies</li>
            <li>Contact us</li>
            <li>Privacy</li>
            <li>Returns policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-normal text-base mb-2">Join our mailing list</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              className="p-2 rounded-l-md w-full bg-[#3C366B] placeholder-gray-400"
            />
            <button className="bg-white text-[#2A254B] px-8 py-2 rounded-r-md font-light">
              Sign up
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6">
        <div className="text-center text-sm text-gray-400 mb-4">
          Copyright 2022 Avion LTD
        </div>
       </div>
    </footer>
  );
};

export default Footer;

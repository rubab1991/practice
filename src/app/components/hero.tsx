import React from "react";
import Image from "next/image";
import Popular from "./Popular";
import Join from "./join";
import Link from "next/link";
import Products from "./products";

export default function Hero() {
  return (
    <div className="py-5">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 flex flex-col lg:flex-row items-stretch">
        {/* Left Section */}
        <div className="bg-[#2A254B] flex flex-col justify-between p-12 w-full lg:flex-[2] xl:w-[960px]">
          <h2 className="text-xl xl:text-3xl text-white mb-3">
            The furniture brand for the <br /> future, with timeless designs
           
          </h2>


          
          <button className="px-6 py-3 md:w-52 bg-[#4E4D93] text-white rounded hover:bg-gray-700">
            View Collection
          </button>
          <p className="text-white text-sm mt-10 leading-relaxed">
            A new era in eco-friendly furniture with Avion, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center flex-grow bg-white lg:flex-[1]">
          <Image
            src="/images/p1.png"
            alt="Chair"
            width={385}
            height={300}
            className="object-contain h-full max-h-[430px]"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 text-[#2A254B]">
        <h3 className="text-lg font-semibold text-center">
          What makes our brand different
        </h3>
        <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              img: "/images/img1.png",
              title: "Next day as standard",
              desc: "Order before 3pm and get your order the next day as standard.",
            },
            {
              img: "/images/img2.png",
              title: "Made by true artisans",
              desc: "Handmade crafted goods made with real passion and craftsmanship.",
            },
            {
              img: "/images/img3.png",
              title: "Unbeatable prices",
              desc: "For our materials and quality, you won’t find better prices anywhere.",
            },
            {
              img: "/images/img4.png",
              title: "Recycled packaging",
              desc: "We use 100% recycled packaging to ensure our footprint is manageable.",
            },
          ].map((feature, index) => (
            <div key={index}>
              <Image
                src={feature.img}
                alt={`Feature: ${feature.title}`}
                width={40}
                height={40}
              />
              <h3 className="text-lg mb-2 mt-4">{feature.title}</h3>
              <p className="text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <h2 className="text-xl lg:text-3xl font-semibold text-[#2A254B] mb-8 ml-20 py-4">
        New Ceramics Collection
      </h2>

      <Products />

<div className="flex justify-center mt-9">
  <Link href="/allproducts">
    <button className="text-[#2A254B] w-full md:w-40 py-4 bg-gray-200">
      View Collection
    </button>
  </Link>
</div>

      <Popular />
      <Join />
    </div>
  );
}

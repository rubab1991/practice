import React from "react";
import Image from "next/image";
import Link from "next/link";

const Popular = () => {
  return (
    <div className="container mx-auto py-14 stripe-pattern">
      {/* Heading */}
      <h2 className="text-[#2A254B] text-center text-xl md:text-2xl font-medium mb-10">
        Our Popular Products
      </h2>

      {/* Product List */}
      <div className="flex flex-col md:flex-row w-full justify-center gap-8 px-4">
        {/* Sofa image - Larger width */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/sofa.png"
            alt="Sofa"
            width={600}
            height={600}
            className="rounded-lg object-contain"
          />
          <p className="mt-4 font-medium text-lg">The Popular Suede Sofa</p>
          <p className="text-sm text-gray-600">£980</p>
        </div>

        {/* Other products */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/p1.png"
            alt="Rustic Vase Set"
            width={315}
            height={315}
            className="rounded-lg object-contain"
          />
          <p className="mt-4 font-medium text-lg">Rustic Vase Set</p>
          <p className="text-sm text-gray-600">£155</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/Parent3.png"
            alt="The Silky Vase"
            width={285}
            height={285}
            className="rounded-lg object-contain"
          />
          <p className="mt-4 font-medium text-lg">The Silky Vase</p>
          <p className="text-sm text-gray-600">£125</p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
       <Link href="/allproducts">
        <button className="text-[#2A254B] px-8 py-4 bg-gray-200 hover:bg-gray-300 rounded-md font-medium">
          View Collection
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Popular;

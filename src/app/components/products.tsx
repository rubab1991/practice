"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { allProducts } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);


  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Please try again later.");
      }
    }
    fetchProducts();
  }, []);


  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault()
    Swal.fire({
      position:"top-right",
      icon:"success",
    title :`${product.name} added to cart`,
    showConfirmButton :false,
    timer : 1000
      
    })


    addToCart(product)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Our Latest Products</h1>

      {error && <p className="text-red-500 text-lg">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            {product.slug?.current ? (
              <Link href={`/product/${product.slug.current}`}>
                <ProductCard product={product} />
              </Link>
            ) : (
              <ProductCard product={product} />
            )}


<button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
    onClick={(e) => handleAddToCart (e,product)}>
Add To Cart
    </button>

          </div>
        ))}
      </div>
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => (
  <>
    {product.image && (
      <Image
        src={urlFor(product.image).url()}
        alt={product.name}
        width={200}
        height={200}
        className="w-full h-48 object-cover rounded-md"
      />
    )}
    <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
    <p className="text-gray-500 mt-2">
      {product.price ? `$${product.price}` : "Price not available"}
    </p>
  
  </>
);

export default Products;


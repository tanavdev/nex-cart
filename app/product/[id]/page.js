"use client";
import About from "@/components/about";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { Star } from 'react-feather';

export default function Home({ params }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${params.id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <nav className="flex bg-gray-100 py-2 border pl-[2vw]" aria-label="Breadcrumb">
        <a className="font-semibold text-blue-500 underline" href="/">Home</a>
        <p className="mx-2 text-gray-400">/</p>
        <a className="font-semibold text-blue-500 underline" href={`/product/${params.id}`}>{params.id}</a>
      </nav>

      <div className="w-screen relative select-none flex">

        <div className="w-[50vw] pl-[2vw] pr-[1vw] border pt-5">

          {product["images"] ? (product["images"].map((image) => (
            <img
            src={image}
            className="mb-1 w-full border"
          />
          ))) : "loading"}

        </div>

        <div className="w-[50vw] pl-[1vw] pr-[2vw] border pt-5">
          <h2 className="text-4xl font-semibold mb-2">{product["title"]}</h2>
          <p className="text-2xl text-gray-700 mb-2">{product["description"]}</p>

          <p className="text-xl font-semibold flex items-center content-center rounded-lg bg-gray-100 border border-gray-600 border-3 w-fit px-2 mb-2">
            <Star color="orange" className="mr-1" /> {product["rating"]}
          </p>
          <p className="text-xl font-semibold text-blue-500 mb-2">
            ${product["price"]}
            {product["discountPercentage"] && <span className="skew-x-12 ml-4 bg-red-500 px-2 text-white">{product["discountPercentage"]}% off</span>}
          </p>

          <button className="bg-blue-500 mr-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition">
            Add to Cart
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition">
            Buy Now
          </button>
        </div>


      </div>
      <About />
    </>
  );
};
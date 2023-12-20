"use client";
import About from "@/components/about"
import ProductCard from "../components/card"
import Navbar from "../components/navbar"
import { useState, useEffect } from "react";

export default function Home() {

  const [products, setProducts] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Navbar />
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-screen p-[4vw]">
    
    {products["products"] ? (products["products"].map((product) => (
        <ProductCard product={product} />
      ))) : "loading"}


    </main>
    <About />
    </>
  )
}

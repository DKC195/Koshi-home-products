"use client";

import { useEffect, useMemo, useState } from "react";
import ProductList from "@/components/ProductList";
import { products } from "./product_list";

function getCategoryFromHash() {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash; // e.g. "#category=Shoes"
  const m = hash.match(/category=([^&]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

export default function ProductsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => setSelectedCategory(getCategoryFromHash());
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const categories = useMemo(
    () => Array.from(new Set(products.map((p) => p.category))),
    []
  );

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const setCategory = (category: string | null) => {
    if (!category) {
      window.location.hash = "";
      setSelectedCategory(null);
    } else {
      window.location.hash = `category=${encodeURIComponent(category)}`;
      setSelectedCategory(category);
    }
  };

  return (
    <section className="bg-neutral-100 p-10">
      <main className="mx-auto max-w-screen-xl flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4">Our Products</h1>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <button
            className={`px-4 py-2 rounded ${
              !selectedCategory ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setCategory(null)}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded ${
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <ProductList products={filteredProducts} />
      </main>
    </section>
  );
}

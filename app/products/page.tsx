// app/page.tsx (or app/products/page.tsx)
"use client";
import { useState } from "react";
import ProductList from "@/components/ProductList";
import { products } from "./product_list";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories from the product list
  const categories = Array.from(new Set(products.map((product) => product.category)));

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <section className="bg-neutral-100 p-10">
      <main className=" mx-auto max-w-screen-xl flex flex-col items-center justify-between px-6 py-4">
        <h1 className="text-5xl font-bold mb-4 text-center p-4">Our Products</h1>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <button
            className={`px-4 py-2 rounded ${!selectedCategory ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded ${
                selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product List */}
        <ProductList products={filteredProducts} />
      </main>
    </section>
  );
}
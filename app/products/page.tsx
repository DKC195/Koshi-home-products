"use client";

import { useSearchParams, useRouter } from "next/navigation";
import ProductList from "@/components/ProductList";
import { products } from "./product_list";

export default function HomePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedCategory = searchParams.get("category");

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const setCategory = (category: string | null) => {
    if (!category) {
      router.push("/products"); // removes query param
    } else {
      router.push(`/products?category=${encodeURIComponent(category)}`);
    }
  };

  return (
    <section className="bg-neutral-100 p-10">
      <main className="mx-auto max-w-screen-xl flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4">Our Products</h1>

        {/* Category Buttons */}
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

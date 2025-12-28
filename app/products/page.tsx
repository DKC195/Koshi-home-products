"use client";

import { useEffect, useMemo, useState } from "react";
import ProductList from "@/components/ProductList";
import { products } from "./product_list";
import AboutUs from "@/components/AboutUs";

function getCategoryFromHash() {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash; // e.g. "#category=Shoes&productId=123"
  const m = hash.match(/category=([^&]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

function getProductIdFromHash() {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash; // e.g. "#category=Shoes&productId=123"
  const m = hash.match(/productId=([^&]+)/);
  return m ? decodeURIComponent(m[1]) : null;
}

const STORAGE_KEY = "clickedProductId";

export default function ProductsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [clickedProductId, setClickedProductId] = useState<string | null>(null);

  // Initialize clicked product from hash or sessionStorage
  useEffect(() => {
    const updateProductId = () => {
      const productIdFromHash = getProductIdFromHash();
      if (productIdFromHash) {
        // Store in sessionStorage and state
        sessionStorage.setItem(STORAGE_KEY, productIdFromHash);
        setClickedProductId(productIdFromHash);
        // Scroll to top to show the clicked product
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Check sessionStorage for previously clicked product
        const storedProductId = sessionStorage.getItem(STORAGE_KEY);
        if (storedProductId) {
          setClickedProductId(storedProductId);
        }
      }
    };

    updateProductId();
    window.addEventListener("hashchange", updateProductId);
    return () => window.removeEventListener("hashchange", updateProductId);
  }, []);

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

  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory
      ? products.filter((p) => p.category === selectedCategory)
      : products;

    // Reorder to put clicked product first
    if (clickedProductId) {
      const clickedProduct = filtered.find((p) => p.id === clickedProductId);
      if (clickedProduct) {
        filtered = [
          clickedProduct,
          ...filtered.filter((p) => p.id !== clickedProductId),
        ];
      }
    }

    return filtered;
  }, [selectedCategory, clickedProductId]);

  const setCategory = (category: string | null) => {
    if (!category) {
      // Preserve productId in hash if it exists
      const productId = clickedProductId || getProductIdFromHash();
      if (productId) {
        window.location.hash = `productId=${encodeURIComponent(productId)}`;
      } else {
        window.location.hash = "";
      }
      setSelectedCategory(null);
    } else {
      // Preserve productId in hash if it exists
      const productId = clickedProductId || getProductIdFromHash();
      if (productId) {
        window.location.hash = `category=${encodeURIComponent(category)}&productId=${encodeURIComponent(productId)}`;
      } else {
        window.location.hash = `category=${encodeURIComponent(category)}`;
      }
      setSelectedCategory(category);
    }
  };

  return (
    <>
    <section className="bg-neutral-100 p-10">
      <main className="mx-auto max-w-screen-xl flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4">Our Products</h1>

        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <button
            className={`px-4 py-2 rounded ${
              !selectedCategory ? "bg-[#3D348B] text-white font-bold" : "bg-gray-200"
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
    <AboutUs/>
    </>
  );
}

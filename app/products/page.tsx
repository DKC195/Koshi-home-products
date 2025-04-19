// app/page.tsx (or app/products/page.tsx)

import ProductList from "@/components/ProductList";
import { products } from "./product_list";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-screen-xl flex items-center justify-between px-6 py-4">
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center p-4">Our Products</h1>
      <ProductList products={products} />
    </main>
    </section>
  );
}
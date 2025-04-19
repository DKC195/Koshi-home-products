"use client"

import { Product } from "@/types/product_list_type";
import ProductCard from "@/components/productCard";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {products.map((product) => (
      <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
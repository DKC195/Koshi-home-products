import { Product } from "@/types/product_list_type";
import { products } from "@/app/products/product_list";

export interface SearchResult {
  type: "product";
  id: string;
  title: string;
//   description: string;
  url: string;
  image?: string;
  category?: string;
}

/**
 * Simple text search that matches query against product names, descriptions, and categories.
 */
export function searchContent(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  // Search products
  products.forEach((product) => {
    const searchableText = [
      product.name,
      product.description,
      product.category,
    ]
      .join(" ")
      .toLowerCase();

    if (searchableText.includes(lowerQuery)) {
      results.push({
        type: "product",
        id: product.id,
        title: product.name,
        // description: product.description || product.category,
        url: `/products#category=${encodeURIComponent(product.category)}&productId=${encodeURIComponent(product.id)}`,
        image: product.image,
        category: product.category,
      });
    }
  });

  return results;
}


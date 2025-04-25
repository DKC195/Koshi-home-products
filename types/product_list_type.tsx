// types/product_list_type.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string
  sizes: string[]
  category: string; // 👈 Add category here
}
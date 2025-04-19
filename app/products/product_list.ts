// components/product_list.ts

import { Product } from "@/types/product_list_type";

export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    price: 999,
    image: "https://www.apple.com/v/home/cd/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_mediumtall_2x.jpg",
    description: "The latest iPhone with A17 chip and advanced camera system.",
    sizes: ["128GB", "256GB", "512GB"], // 👈 Add sizes here
  },
  {
    id: "2",
    name: "Samsung Galaxy S24",
    price: 899,
    image: "https://www.apple.com/v/home/cd/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_mediumtall_2x.jpg",
    description: "The latest Galaxy with Exynos 2400 chip and advanced camera system.",
    sizes: ["128GB", "256GB"],
  },
  {
    id: "3",
    name: "Google Pixel 8",
    price: 799,
    image: "https://www.apple.com/v/home/cd/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_mediumtall_2x.jpg",
    description: "The latest Pixel with Tensor G4 chip and advanced camera system.",
    sizes: ["128GB", "256GB", "512GB"],
  },
];
import { Category } from "./category.model";
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stockQuantity: number;
    images: string[];
    category: Category;
  }
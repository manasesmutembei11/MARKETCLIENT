import { Product } from "./product.model";
export interface Category {
    id: number;
    name: string;
    parentCategory?: Category;
    subcategories?: Category[];
    products: Product[];
  }
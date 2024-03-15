interface Category {
    id: number;
    name: string;
    parentCategory?: Category;
    subcategories?: Category[];
    products: Product[];
  }
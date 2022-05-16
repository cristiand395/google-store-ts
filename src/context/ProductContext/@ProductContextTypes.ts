export type ProductSpecs = {
  cpu: string;
  ram: string;
  storage: string;
  battery: string;
  frontalCamera: string;
  rearCamera: string;
  display: string;
  os: string;
}

export interface Product {
  id: string;
  name: string;
  type: string;
  price: number;
  currency: string;
  image: string;
  specs: ProductSpecs;
}
export interface CartItem  {
  id: string;
  name: string;
  image: string;
  price: number;
  currency: string;
  quantity: number;
}

export type ProductContextType = {  
  products: Product[];
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  filteredProducts: Product[];
  cart: CartItem[];
}

export type SearchValue = string;


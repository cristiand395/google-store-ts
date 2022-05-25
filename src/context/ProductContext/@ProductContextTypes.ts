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
  imgUrl: string;
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
  setProducts: any;
  searchValue: string;
  setSearchValue: any;
  filteredProducts: Product[];
  cart: CartItem[];
}

export type SearchValue = string;


import { createContext, FC, ReactNode, useEffect, useState} from "react";
import { ProductContextType, Product, CartItem } from './@ProductContextTypes'
import useInitialProductsState from '../../hooks/useInitialProductsState';

import PRODUCTS_DATA from '../../utils/firebase/Products'
import { addCollectionAndDocuments } from "../../utils/firebase/firebase.utils";

interface MyContext {
  children?: ReactNode;
}

export const ProductContext = createContext<ProductContextType | null>(null)

const ProductProvider: FC<MyContext> = ({ children }) => {
  const products: Product[] = useInitialProductsState()
  const [searchValue, setSearchValue] = useState('')
  let filteredProducts: Product[] = []
  let cart: CartItem[] = []

  // useEffect(() => {
  //   addCollectionAndDocuments('products', PRODUCTS_DATA)
  // },[])

  if (searchValue.length === 0) {
    filteredProducts = products
  } else {
    products.filter(product => {
      const productName = product.name.toLowerCase()
      const searchText = searchValue.toLowerCase();
      if (productName.includes(searchText)){  
        filteredProducts.push(product)
      };
      return filteredProducts
    });
  }

  enum CartActionKind {
    ADD = 'ADD',
    REMOVE = 'REMOVE'
  }

  interface CartAction {
    type: CartActionKind;
    payload: CartItem;
  }


  return (
    <ProductContext.Provider value={{
      products,
      searchValue,
      setSearchValue,
      filteredProducts,
      cart,
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;

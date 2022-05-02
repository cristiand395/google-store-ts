import { createContext, FC, ReactNode, useState, Reducer } from "react";
import { ProductContextType, Product, CartItem } from './@types'
import useInitialProductsState from '../../hooks/useInitialProductsState';

interface MyContext {
  children?: ReactNode;
}

export const ProductContext = createContext<ProductContextType | null>(null)

const ProductProvider: FC<MyContext> = ({ children }) => {
  const products: Product[] = useInitialProductsState()
  const [searchValue, setSearchValue] = useState('')
  let filteredProducts: Product[] = []
  let cart: CartItem[] = []

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



  function cartReducer(state: CartItem[], action: CartAction)  {
    const { type, payload } = action
    switch (type) {
      case CartActionKind.ADD:
        if (state.length === 0) {
          state.push(payload)
        } else {
          state.map(item => {
            if (item.name === payload.name) {
              item.quantity += 1
            }
          })}
        return state
      default:
        return state
    }
  }

  return (
    <ProductContext.Provider value={{
      products,
      searchValue,
      setSearchValue,
      filteredProducts,
      cart,
      cartReducer
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;

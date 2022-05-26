import { createContext, FC, ReactNode, useEffect, useReducer } from "react";
import { ProductContextType, Product } from './@ProductContextTypes'

import PRODUCTS_DATA from '../../utils/firebase/Products'
import { addCollectionAndDocuments, getProductsAndDocuments } from "../../utils/firebase/firebase.utils";

interface MyContext {
  children?: ReactNode;
}

export const ProductContext = createContext<ProductContextType | null>(null)

const INITIAL_STATE: ProductContextType = {
  products: [],
  setProducts: null,
  searchValue: '',
  setSearchValue: null,
  filteredProducts: [],
  cart: []
}

const PRODUCT_ACTION_TYPES = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  SET_SEARCH_VALUE: 'SET_SEARCH_VALUE',
}

const ProductReducer = (state = INITIAL_STATE, action:any) => {
  const { type, payload } = action
  switch (type) {
    case PRODUCT_ACTION_TYPES.SET_PRODUCTS:
      return {
        ...state,
        products: payload
      }
    case PRODUCT_ACTION_TYPES.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: payload,
      }
    default:
      throw new Error(`${type} is not a Product Action Type`)
    }
}

const ProductProvider: FC<MyContext> = ({ children }) => {
  // UPDATE DATA TO FIREBASE
  // useEffect(() => {
  //   addCollectionAndDocuments('products', PRODUCTS_DATA)
  // },[])


  const [ state, dispatch ] = useReducer(ProductReducer, INITIAL_STATE)

  const { products, searchValue, cart } = state
  let { filteredProducts } = state

  const setSearchValue = (searchValue:string) =>{
    dispatch({
      type: PRODUCT_ACTION_TYPES.SET_SEARCH_VALUE,
      payload: searchValue,
    })
  }

  const setProducts = (products:Product[]) =>{
    dispatch({
      type: PRODUCT_ACTION_TYPES.SET_PRODUCTS,
      payload: products,
    })
  }

  useEffect(() => {
    const getProducts = async () => {
      const products = await getProductsAndDocuments()
      setProducts(products)
    }
    getProducts()
  },[])

  let newFilteredProducts:any = []
  if (searchValue.length === 0) {
    filteredProducts = products
  } else {
    products.filter((product: Product) => {
      const productName = product.name.toLowerCase()
      const searchText = searchValue.toLowerCase();
      if (productName.includes(searchText)){
        console.log(`${productName} includes ${searchText}`)
        
        newFilteredProducts.push(product)
      };
      console.log('new ', newFilteredProducts)
      return filteredProducts = newFilteredProducts
    });
  }


  return (
    <ProductContext.Provider value={{
      products,
      setProducts,
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

import { createContext, FC, ReactNode, useEffect, useState} from "react";
import { Product } from "../ProductContext/@ProductContextTypes";
import { CartContextType, CartItem } from './@CartContextTypes';

interface MyContext {
  children?: ReactNode;
}
const addCartItem = (cartItems: CartItem[], productToAdd: Product) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find( 
    cartTiem => cartTiem.id === productToAdd.id)
    
  // if found, increment quantity
  if(existingCartItem){
    return cartItems.map(cartItem => 
      cartItem.id === productToAdd.id
      ? {...cartItem, quantity: cartItem.quantity + 1}
      :cartItem
  )}

  return [...cartItems, {...productToAdd, quantity: 1}]
}
export const CartContext = createContext<CartContextType | null>(null)

const CartProvider: FC<MyContext> = ({ children }) => {
  const [ cartItems, setCartItems ] = useState([])
  const [ cartCountItems, setCartCountItems ] = useState(0)
  const [ cartCountPrice, setCartCountPrice ] = useState(0)

  useEffect(() => {
    const cartItemsCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCountItems(cartItemsCount)
    const cartPriceCount = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
    setCartCountPrice(cartPriceCount)
  }, [cartItems])

  const addItemToCart = (ProductToAdd:Product) => {
    setCartItems(addCartItem(cartItems, ProductToAdd))
  }
  return (
    <CartContext.Provider value={{
      cartItems,
      addItemToCart,
      cartCountItems,
      cartCountPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
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

const removeCartItem = (cartItems: CartItem[], cartItemToRemove: Product) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id)

  // check if quantity is equal to1,if it is remove that item from the cart
  if(existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  // neturn back cantitems with matching cant item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ?{... cartItem,quantity:cartItem.quantity-1}
      :cartItem
  )
};

const clearCartItem = (cartItems: CartItem[], cartItemToClear: Product) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)
}

export const CartContext = createContext<CartContextType | null>(null)

const CartProvider: FC<MyContext> = ({ children }) => {
  const [ cartItems, setCartItems ] = useState([])
  const [ cartCountItems, setCartCountItems ] = useState(0)
  const [ cartCountPrice, setCartCountPrice ] = useState(0)
  const [ cartTotal, setCartTotal ] = useState(0)

  useEffect(() => {
    const cartItemsCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
    setCartCountItems(cartItemsCount)
    const cartPriceCount = cartItems.reduce((total, cartItem) => total + cartItem.price * cartItem.quantity, 0)
    setCartCountPrice(cartPriceCount)
  }, [cartItems])

  useEffect(() => {
    const cartTotal = cartItems.reduce((total, cartItem) => 
    total + cartItem.quantity * cartItem.price, 0)
    setCartTotal(cartTotal)
  }, [cartItems])


  const addItemToCart = (ProductToAdd:Product) => {
    setCartItems(addCartItem(cartItems, ProductToAdd))
  }

  const removeItemFromCart = (carItemToRemove:Product) => {
    setCartItems(removeCartItem(cartItems, carItemToRemove))
  }

  const clearCartItems = (cartItemToRemove:Product) => {
    setCartItems(clearCartItem(cartItems, cartItemToRemove))
  }
  return (
    <CartContext.Provider value={{
      cartItems,
      addItemToCart,
      removeItemFromCart,
      clearCartItems,
      cartCountItems,
      cartCountPrice,
      cartTotal,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;
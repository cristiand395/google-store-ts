export type CartItem = {
  id: string;
  imgUrl: string;
  name: string;
  price: number;
  currency: string;
  quantity: number;
}


export interface CartContextType {
  cartItems: CartItem[],
  addItemToCart: any,
  removeItemFromCart: any,
  clearCartItems: any,
  cartCountItems: number,
  cartCountPrice: number,
  cartTotal: number,
}

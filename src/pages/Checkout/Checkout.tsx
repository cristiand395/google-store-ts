import { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import { CartContext } from "../../context/CartContext/CartContext";

import './Checkout.styles.css'

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div
      className='checkout-page'>
        <div className='checkout-container'>
          {
            cartItems.map(cartItem => (
              <CheckoutItem 
                key={cartItem.id} 
                cartItem={cartItem} />
            ))
          }
        </div>
    </div>
  );
}

export default Checkout;
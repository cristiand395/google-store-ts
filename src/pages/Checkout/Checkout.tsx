import { useContext } from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";
import { CartContext } from "../../context/CartContext/CartContext";

import './Checkout.styles.css'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div
      className='checkout-page'>
        { cartItems.length === 0
          ? <h3>Your cart its empty</h3>
          :
          <div className='checkout-container'>
          {
            cartItems.map(cartItem => (
              <CheckoutItem 
                key={cartItem.id} 
                cartItem={cartItem} />
            ))
          }
          <div className='total-container'>
            <h4><strong>Total: </strong>${cartTotal}</h4>
          </div>
          <div className='payButton-container'>
            <button 
              className='payButton'>
              Pay
            </button>
          </div>
        </div>
        }
    </div>
  );
}

export default Checkout;
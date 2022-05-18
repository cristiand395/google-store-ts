import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import { CartContextType } from '../../context/CartContext/@CartContextTypes';
import CartModalItem from "./CartModalItem";
import './CartModal.styles.css'
import { useNavigate } from 'react-router-dom';

const CartModal = () => {
  const { cartItems, cartCountPrice } = useContext(CartContext) as CartContextType;
  const navigate = useNavigate()
  const goToCheckout = () => {
    navigate('/checkout')
    console.log('goToCheckout')
  }
  return (
    <div className='cartModal'>
      <div className='cartModalContent'>
        <h4 className='title'>Shopping Cart</h4>
        {cartItems.length === 0 ? <p className='emptyCart'>Your cart is empty</p> : (
          <>
            {cartItems.map(item => (
              <CartModalItem
                key={item.id}
                item={item}
                />
            ))}
            
            <h5 className='total'>Total: ${cartCountPrice}</h5>
            
            <div className='payButtonContainer'>
              <button 
                className='payButton'
                onClick={goToCheckout}>
                Pay
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;
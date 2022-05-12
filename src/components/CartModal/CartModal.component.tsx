import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductContext';
import { ProductContextType } from '../../context/ProductContext/@types';
import CartModalItem from "./CartModalItem";
import './CartModal.styles.css'

const CartModal = () => {
  const { cart } = useContext(ProductContext) as ProductContextType;



  return (
    <div className='cartModal'>
      <div className='cartModalContent'>
        <h4 className='title'>Shopping Cart</h4>
        {cart.length === 0 ? <p className='emptyCart'>Your cart is empty</p> : (
          <>
            {cart.map(item => (
              <CartModalItem
                key={item.id}
                imgUrl={item.image}
                name={item.name}
                price={item.price}
                />
            ))}
            
            <h5 className='total'>Total: $1499</h5>
            
            <div className='payButtonContainer'>
              <button className='payButton'>Pay</button>
            </div>
          </>
        )}

        {cart.map(item => (
          <CartModalItem
            key={item.id}
            imgUrl={item.image}
            name={item.name}
            price={item.price}
            />
        ))}
        
        <h5 className='total'>Total: $1499</h5>
        
        <div className='payButtonContainer'>
          <button className='payButton'>Pay</button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
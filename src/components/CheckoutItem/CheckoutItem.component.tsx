import CounterButton from '../CounterButton/CounterButton.component';
import { IconContext } from 'react-icons'
import { AiFillDelete } from 'react-icons/ai';

import './CheckoutItem.styles.css'
import { CartContext } from '../../context/CartContext/CartContext';
import { useContext } from 'react';

const CheckoutItem = ({cartItem}:any) => {
  const { name, imgUrl, price, quantity } = cartItem
  const { removeItemFromCart } = useContext(CartContext)

  const handleRemoveItemFromCart = () => {
    removeItemFromCart(cartItem)
  }

  return (
    <div className='checkoutItem-container'>
        <div className='checkoutItem-data-container'>
          <img
            className='checkoutItem-img'
            alt={name}
            src={imgUrl}/>
          <p className='checkoutItem-name'><strong>{name}</strong> (${price})</p>
        </div>
        <div className='checkoutItem-actions-container'>
          <CounterButton
            sign='-'
            type='decrease'
            item={cartItem}/>
          <p className='checkoutItem-quantity'>{quantity}</p>
          <CounterButton
            sign='+'
            type='add'
            item={cartItem}/>
          <p className='checkoutItem-price'>${price*quantity}</p>
          <IconContext.Provider 
            value={{ color: "red", className: 'iconDelete' }}
            > 
            <AiFillDelete
              onClick={handleRemoveItemFromCart}/>
          </IconContext.Provider>
        </div>
    </div>
  );
}

export default CheckoutItem;
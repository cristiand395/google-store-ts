import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import './CounterButton.styles.css'

const CounterButton = (props:any) => {
  const { sign, type, item } = props;
  const { addItemToCart, removeItemFromCart } = useContext(CartContext)

  const handleQuantity = () => {
    if (type=== 'add') {
      addItemToCart(item)
    } else {
      removeItemFromCart(item)
    }
  }
  return (
    <button 
      className='counterButton'
      onClick={handleQuantity}>
      {sign}
    </button>
  );
}

export default CounterButton;
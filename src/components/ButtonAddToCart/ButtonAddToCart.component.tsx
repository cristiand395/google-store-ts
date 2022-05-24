import { useContext } from 'react';
import { CartContext } from '../../context/CartContext/CartContext';
import './ButtonAddToCart.styles.css';

const ButtonAddToCard = ({...props}) => {
  const { addItemToCart} = useContext(CartContext)
  const addProductToCart = () => addItemToCart(props.product)
  return (
    <button
      className='buttonAddToCard' 
      type='button'
      onClick={addProductToCart}
      >
      ADD
      </button>
  );
}

export default ButtonAddToCard;
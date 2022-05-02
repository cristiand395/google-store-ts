import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext/ProductContext';

import './ButtonAddToCart.styles.css';

const ButtonAddCard = ({...props}) => {
  // const { handleAddToCart, cart } = useContext(ProductContext);

  // const handleButtonAddToCart = () => {
  //   handleAddToCart(props.itemName)
  //   console.log(cart)
  // }

  return (
    <button
      className='buttonAddToCard' 
      type='button'
      // onClick={handleButtonAddToCart}
      >
      ADD
      </button>
  );
}

export default ButtonAddCard;
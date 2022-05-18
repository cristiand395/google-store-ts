import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/CartContext';
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart.component';
import  './Card.styles.css'

const Card = ({product}:any) => {
  const { name, price, imgUrl } = product;
  const { addItemToCart} = useContext(CartContext)

  const addProductToCart = () => addItemToCart(product)

  return (
    <div className='card'>
      <Link 
        to={`/devices/${name}`}>
        <div
          className='imageContainer'>
          <img
          src={imgUrl}
          alt={name}
          width={200}
          height={200}
          />
          
        </div>
        <p className='itemTitle'>{name}</p>
      </Link>
      <div className='bottomCard'>
        <p className='price'>${price}</p>
        <ButtonAddToCart
          addToCart={addProductToCart} 
          itemName={name}/>
      </div>
    </div>
  );
}

export default Card;
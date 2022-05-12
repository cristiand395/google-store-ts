import { Link } from 'react-router-dom';
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart.component';

import  './Card.styles.css'

const Card = ({...props}) => {

  return (
    <div className='card'>
      <Link 
        to={`/devices/${props.name}`}>
        <div
          className='imageContainer'>
          <img
          src={props.image}
          alt={props.name}
          width={200}
          height={200}
          />
          
        </div>
        <p className='itemTitle'>{props.name}</p>
      </Link>
      <div className='bottomCard'>
        <p className='price'>${props.price}</p>
        <ButtonAddToCart 
          itemName={props.name}/>
      </div>
    </div>
  );
}

export default Card;
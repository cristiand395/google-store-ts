import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart.component';

import  './Card.styles.css'

const Card = ({...props}) => {

  return (
    <div className='card'>
      <a 
        className='imageContainer'
        href='/'>
        <img
        src={props.image}
        alt={props.name}
        width={200}
        height={200}
        />
        <p className='itemName'>{props.name}</p>
      </a>
      <div className='bottomCard'>
        <p className='price'>${props.price}</p>
        <ButtonAddToCart 
          itemName={props.name}/>
      </div>
    </div>
  );
}

export default Card;
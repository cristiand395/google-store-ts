import './ButtonAddToCart.styles.css';

const ButtonAddToCard = ({...props}) => {
  return (
    <button
      className='buttonAddToCard' 
      type='button'
      onClick={props.addToCart}
      >
      ADD
      </button>
  );
}

export default ButtonAddToCard;
import './CartModalItem.styles.css'
import CounterButton from '../CounterButton/CounterButton.component';

const CartModalItem = ({item}:any) => {
const { imgUrl, name, price, quantity } = item;

  return (
    <div className='cartModalItem'>
      <img
        src={imgUrl}
        width={70}
        height={70}
        alt={name}/>
      <p className='itemName'>{name}</p>
      <div className='cartModalCounter'>
        <CounterButton
          mode='-'/>
        <p>{quantity}</p>
        <CounterButton
          mode='+'/>
        <span>${price*quantity}</span>
      </div>
    </div>
  );
}

export default CartModalItem;
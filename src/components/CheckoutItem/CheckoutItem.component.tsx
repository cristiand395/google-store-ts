import './CheckoutItem.styles.css'
import CounterButton from '../CounterButton/CounterButton.component';

const CheckoutItem = ({cartItem}:any) => {
  const { name, imgUrl, price, quantity } = cartItem;
  return (
    <div className='checkoutItem-container'>
        <div className='checkoutItem-img-container'>
          <img
            className='checkoutItem-img'
            alt={name}
            src={imgUrl}/>
        </div>
        <div className='checkoutItem-info'>
          <p className='checkoutItem-name'>{name}</p>
          <CounterButton
            mode='-'/>
          <p className='checkoutItem-quantity'>{quantity}</p>
          <CounterButton
            mode='+'/>
        </div>
    </div>
  );
}

export default CheckoutItem;
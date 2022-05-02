
import './CartModalItem.styles.css'

const CartModalItem = (props:any) => {
  const { imgUrl, name, price, cart } = props;

  return (
    <div className='cartModalItem'>
      <img
        src={imgUrl}
        width={70}
        height={70}
        alt={name}/>
      <p className='itemName'>{name}</p>
      <div className='cartModalCounter'>
        <button className='counterButton'>-</button>
        <p>{cart}</p>
        <button className='counterButton'>+</button>
      </div>
    </div>
  );
}

export default CartModalItem;
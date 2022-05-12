import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from "../../context/ProductContext/ProductContext";
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart.component';

import './DeviceInfo.styles.css'

const DeviceInfo = () => {
  const productName = useParams()
  const context = useContext(ProductContext)
  const product = context?.products.filter(product => product.name === productName.deviceName)[0]

  return (
    <div className="DeviceInfo">
      <div>
        <img
          alt={product?.name} 
          src={product?.image}/>
      </div>
      <div className='deviceInfoBox'> 
        <div>
          <h2 className='title'>{product?.name}</h2>
          <p><strong>CPU: </strong>{product?.specs?.cpu}</p>
          <p><strong>Display: </strong>{product?.specs?.display}</p>
          <p><strong>Battery: </strong>{product?.specs?.battery}</p>
          <p><strong>Front Camera: </strong>{product?.specs?.frontalCamera}</p>
          <p><strong>Rear Camera: </strong>{product?.specs?.rearCamera}</p>
          <p><strong>RAM: </strong>{product?.specs?.ram}</p>
          <p><strong>Storage: </strong>{product?.specs?.storage}</p>
          <p><strong>OS: </strong>{product?.specs?.os}</p>
          <div className="buttonContainer">
            <ButtonAddToCart/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceInfo
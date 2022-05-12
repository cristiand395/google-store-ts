import { useContext } from 'react';
import { ProductContext } from "../../context/ProductContext/ProductContext";
import ButtonAddToCart from '../ButtonAddToCart/ButtonAddToCart.component';

import './DeviceInfo.styles.css'

const DeviceInfo = () => {
  const context = useContext(ProductContext)
  const device = context?.products[0]
  console.log(device)
  return (
    <div className="DeviceInfo">
      <div>
        <img
          alt={device?.name} 
          src={device?.image}/>
      </div>
      <div className='deviceInfoBox'> 
        <div>
          <h2 className='title'>{device?.name}</h2>
          <p><strong>CPU: </strong>{device?.specs?.cpu}</p>
          <p><strong>Display: </strong>{device?.specs?.display}</p>
          <p><strong>Battery: </strong>{device?.specs?.battery}</p>
          <p><strong>Front Camera: </strong>{device?.specs?.frontalCamera}</p>
          <p><strong>Rear Camera: </strong>{device?.specs?.rearCamera}</p>
          <p><strong>RAM: </strong>{device?.specs?.ram}</p>
          <p><strong>Storage: </strong>{device?.specs?.storage}</p>
          <p><strong>OS: </strong>{device?.specs?.os}</p>
          <div className="buttonContainer">
            <ButtonAddToCart/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceInfo
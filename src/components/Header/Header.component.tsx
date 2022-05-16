import { useState, useContext } from "react";
import { IconContext } from "react-icons";
import { BsFillCartFill } from "react-icons/bs";
import CartModal from '../CartModal/CartModal.component';
import { ProductContext } from '../../context/ProductContext/ProductContext';
import { ProductContextType } from '../../context/ProductContext/@ProductContextTypes';
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserContext";
import { UserContextType } from "../../context/UserContext/@UserContextTypes";

import './Header.styles.css';

const Header = () => {
  const { cart } = useContext(ProductContext) as ProductContextType;
  const [showCartModal, setShowCartModal] = useState(false);
  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  }
  const { userName } = useContext(UserContext) as UserContextType;

  return (
    <div className='header'>
      <div className='icon'>
        <img
          src="https://storage.googleapis.com/mannequin/blobs/cd0710fe-8cb8-4892-993f-4e05ef21b7cb.svg"
          alt="Device"
          width={50}
          height={50}
        />
      </div>
      <Link
        to='/'
        className='title'>Google Store</Link>
      <div className='cartSection'
        onClick={toggleCartModal}>
        {userName === ''
          ?
            <Link
            to='/sign-in'
            className='loginLink'>Sign In</Link>
          :
            <p className='user-name'>Hi, {userName}</p>
        }
        
        <IconContext.Provider value={{ color: "gray", className:'iconCart' }}> 
          <BsFillCartFill />
        </IconContext.Provider>
        {
          cart.length >=1 && <div className='cartCounter'>{cart.length}</div>
          }

        {showCartModal && <CartModal />}
      </div>
    </div>
  );
}

export default Header;
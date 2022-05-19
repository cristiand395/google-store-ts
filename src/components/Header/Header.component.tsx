import { useState, useContext } from "react";
import { IconContext } from "react-icons";
import { BsFillCartFill } from "react-icons/bs";
import CartModal from '../CartModal/CartModal.component';
import { CartContext } from '../../context/CartContext/CartContext';
import { CartContextType } from '../../context/CartContext/@CartContextTypes';
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserContext";
import { UserContextType } from "../../context/UserContext/@UserContextTypes";

import './Header.styles.css';
import { signOutUser } from "../../utils/firebase/firebase.utils";

const UserName = ({userName}:any) => {
  return (
    <>
      {(userName.includes(' ')) 
        ?
        <p className='user-name'>Hi, {userName.split(' ')[0]}</p>
        :
        <p className='user-name'>Hi, {userName}</p>
      }
    </>
  )
}

const Header = () => {
  const { cartItems } = useContext(CartContext)
  const [showCartModal, setShowCartModal] = useState(false);
  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  }
  console.log(showCartModal)
  const { currentUser, userName } = useContext(UserContext) as UserContextType;


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
      <div className='userCartSection'>
        {currentUser === null
          ?
            <Link
            to='/sign-in'
            className='loginLink'>Sign In</Link>
          :
            <UserName
              userName={userName}/>
        }
        <div 
          className='cartSection'
          onClick={toggleCartModal}>
          <IconContext.Provider value={{ color: "gray", className:'iconCart' }}
            > 
            <BsFillCartFill />
          </IconContext.Provider>
          {
            cartItems.length >=1 && <div className='cartCounter'>{cartItems.length}</div>
          }
          {showCartModal && <CartModal />}      
        </div>
        {currentUser !== null 
            &&
          <p 
            className='logout'
            onClick={signOutUser}
            >Sign Out</p> 
        }
      </div>
    </div>
  );
}

export default Header;
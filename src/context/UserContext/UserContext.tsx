import { createContext, FC, ReactNode, useState} from "react";
import { useNavigate } from "react-router-dom";
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { UserContextType } from './@UserContextTypes';

interface MyContext {
  children?: ReactNode;
}

export const UserContext = createContext<UserContextType | null>(null)

const UserProvider: FC<MyContext> = ({ children }) => {
  const [userName, setUserName] = useState('')
  let navigate = useNavigate()

  const loginWithGoogle = async()=> {
    const { user } = await signInWithGooglePopup()
    console.log('user: ',user)
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log('userName: ', user.displayName)
    console.log('userDocRef: ', userDocRef)
    const fullName = user.displayName
    const firstName = fullName.split(' ')[0] 
    setUserName(firstName)
    navigate('/')
  }

  return (
    <UserContext.Provider value={{
      userName,
      loginWithGoogle,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
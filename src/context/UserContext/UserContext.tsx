import { createContext, FC, ReactNode, useEffect, useState} from "react";
import { UserContextType } from './@UserContextTypes';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../../utils/firebase/firebase.utils';

interface MyContext {
  children?: ReactNode;
}

export const UserContext = createContext<UserContextType | null>(null)

const UserProvider: FC<MyContext> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user:any)=> {
      if(user){
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  return (
    <UserContext.Provider value={{
      currentUser,
      setCurrentUser,
      userName,
      setUserName
    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;
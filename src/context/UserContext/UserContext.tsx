import { createContext, FC, ReactNode, useEffect, useReducer, useState} from "react";
import { UserContextType } from './@UserContextTypes';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../../utils/firebase/firebase.utils';

interface MyContext {
  children?: ReactNode;
}

const USER_INITIAL_STATE: UserContextType = {
  currentUser : null,
  setCurrentUser: null,
  userName: '',
  setUserName: null,
}

export const UserContext = createContext<UserContextType | null>(null)

const UserReducerTypes = {
  SET_USER: 'SET_USER',
  SET_USER_NAME: 'SET_USER_NAME',
}

const userReducer = (state = USER_INITIAL_STATE, action:any) => {
  const { type, payload } = action

  switch (type) {
    case UserReducerTypes.SET_USER:
      return {
        ...state,
        currentUser: payload,
      }
      case UserReducerTypes.SET_USER_NAME:
      return {
        ...state,
        userName: payload,
      }
    default:
      throw new Error(`${type} is not a User Action Type`)
    }
}

const UserProvider: FC<MyContext> = ({ children }) => {
  const [state, dispatch ] = useReducer(userReducer, USER_INITIAL_STATE)

  const { currentUser, userName } = state

  const setCurrentUser = (user:any) =>{
    dispatch({
      type: UserReducerTypes.SET_USER,
      payload: user,
    })
  }

  const setUserName = (userName:string) =>{
    dispatch({
      type: UserReducerTypes.SET_USER_NAME,
      payload: userName,
    })
  }

  //const [currentUser, setCurrentUser] = useState(null)
  //const [userName, setUserName] = useState('')

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
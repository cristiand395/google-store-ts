import { useLocation } from 'react-router-dom';
import SignIn from '../../components/SignInSignUp/SignIn.component';
import SignUp from '../../components/SignInSignUp/Signup.component';

import './SignInSignUp.css'

const SignInSignUp = () => {
  const params = useLocation()
  const route = params.pathname

  return (
    <div className='LoginPage'>
      {route === '/sign-in'
        ? 
          <SignIn/> 
        : 
          <SignUp/>
      }
    </div>
  );
}

export default SignInSignUp;
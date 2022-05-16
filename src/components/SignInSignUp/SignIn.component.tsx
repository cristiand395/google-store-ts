import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserContext';
import './SignInSignUp.styles.css'

const SignIn = ()  => {
  const { loginWithGoogle } = useContext(UserContext)
  
  return (
    <div className='formContainer'>
      <input
        className='formInput'
        placeholder='Email'></input>
      <input
        className='formInput'
        placeholder='Password'></input>
      <button
        className='buttonEnter'>Enter </button>
      <button
        className="buttonGoogle"
        onClick={loginWithGoogle}>Login With Google </button>
      <Link
        to='/sign-up'
        className='signup-option'>Create an account</Link>
      <Link
        to='/'
        className='go-store-option'>Go to Store{' >>'}</Link>
    </div>
  );
}

export default SignIn;
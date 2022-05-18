import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserContext';
import { 
  signInAuthUserWithEmailAndPassword, 
  signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import './SignInSignUp.styles.css'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignIn = ()  => {
  const { setUserName } = useContext(UserContext)
  let navigate = useNavigate()

  const SignInWithGoogle = async () => {
    const {user} = await signInWithGooglePopup()
    setUserName(user.displayName)
    navigate('/')
  }

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormfields = ()  => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    try {
      await signInAuthUserWithEmailAndPassword(
        email, 
        password
      )
      resetFormfields()
      navigate('/')
    } catch (error:any) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('User not found')
          break
        case 'auth/wrong-password':
          alert('Wrong password')
          break
        default:
          console.log('error: ', error)
          break
      }
    }
  }


  const handleChange = (event:any) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='formContainer'>
      <input
        className='formInput'
        placeholder='Email'
        type='text'
        name='email'
        value={email}
        onChange={handleChange}
        required></input>

      <input
        className='formInput'
        placeholder='Password'
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
        required></input>

      <button
        className='buttonEnter'
        type='submit'>Enter</button>
      <button
        className="buttonGoogle"
        onClick={SignInWithGoogle}
        type='button'>Login With Google </button>
      <Link
        to='/sign-up'
        className='signup-option'>Create an account</Link>
      <Link
        to='/'
        className='go-store-option'>Go to Store{' >>'}</Link>
    </form>
  );
}

export default SignIn;
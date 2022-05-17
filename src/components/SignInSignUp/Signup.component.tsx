import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreateAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup} from '../../utils/firebase/firebase.utils';
import './SignInSignUp.styles.css'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = ()  => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const SignInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }

  const resetFormfields = ()  => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    try {
      const { user } = await CreateAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      resetFormfields()
    } catch (error:any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          alert('Email already in use')
          break
        case 'auth/invalid-email':
          alert('Invalid email')
          break
        case 'auth/weak-password':
          alert('Password is too weak')
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
        placeholder='Name'
        className='formInput'
        type='text'
        name='displayName'
        value={displayName}
        onChange={handleChange}
        required
        ></input>

      <input
        placeholder='Email'
        className='formInput'
        type='email'
        name='email'
        value={email}
        onChange={handleChange}
        required
        ></input>

      <input
        placeholder='Password'
        className='formInput'
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
        required
        ></input>

      <input
        placeholder='Confirm Password'
        className='formInput'
        type='password'
        name='confirmPassword'
        value={confirmPassword}
        onChange={handleChange}
        required
        ></input>

      <button
        type='submit'
        className='buttonEnter'>Sign Up</button>
      <button
          className="buttonGoogle"
          onClick={SignInWithGoogle}
          type='button'>Sign Up With Google </button>
      <Link
        to='/sign-in'
        className='signup-option'>Are you already have an account?</Link>
      <Link
        to='/'
        className='go-store-option'>Go to Store{' >>'}</Link>
    </form>
  );
}

export default SignUp;
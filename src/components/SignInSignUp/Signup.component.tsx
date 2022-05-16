import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreateAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
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

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    try {
      // const { user } = await CreateAuthUserWithEmailAndPassword(email, password)
      // await user.updateProfile({ displayName })
      // setFormFields(defaultFormFields)
    } catch (error) {
      console.log('error: ', error)
    }
  }


  const handleChange = (event:any) => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <form
      onSubmit={() => {}}
      className='formContainer'>
      <input
        className='formInput'
        placeholder='Name'
        type='text'
        name='displayName'
        value={displayName}
        onChange={handleChange}
        required
        ></input>

      <input
        className='formInput'
        placeholder='Email'
        type='email'
        name='email'
        value={email}
        onChange={handleChange}
        required
        ></input>

      <input
        className='formInput'
        placeholder='Password'
        type='password'
        name='password'
        value={password}
        onChange={handleChange}
        required
        ></input>

      <input
        className='formInput'
        placeholder='Confirm Password'
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
          className="buttonGoogle">Sign Up With Google </button>
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
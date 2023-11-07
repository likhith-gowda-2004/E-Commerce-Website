import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './AuthPage.css'

const SignUp = () => {
  return (
    <div className='auth-page'>
        <Navbar />
        <div className='auth-container'>
            <form className='auth-form'>
                <h1>Sign Up</h1>
                <div className='form-group-row'>
                    <div classname='form-group'>
                        <label htmlFor='fname'>First Name</label>
                        <input type='text' id='username' placeholder='Enter first name' />
                    </div>
                    <div classname='form-group'>
                        <label htmlFor='lname'>Last Name</label>
                        <input type='text' id='username' placeholder='Enter last name' />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' placeholder='Enter email' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' placeholder='Enter password' />
                </div>
                <div className='form-group'>
                    <label htmlFor='confirm-password'>Confirm Password</label>
                    <input type='password' id='password' placeholder='Enter password again' />
                </div>
                <Link to='/login' className='stylenone'>
                    <p>Already have an account?</p>
                </Link>
                <Link to='/signup' className='stylenone'>
                    <button className='btn'>Sign Up</button>
                </Link>
                
            </form>  
        </div>
    </div>
  )
}
export default SignUp
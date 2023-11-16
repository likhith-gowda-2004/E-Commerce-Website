import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './AuthPage.css'

const ForgotPassword = () => {
  return (
    <div className='auth-page'>
        <Navbar reloadnavbar={false}/>
        <div className='auth-container'>
            <form className='auth-form'>
                <h1>Forgot Password</h1>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' placeholder='Enter email' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' placeholder='Enter password' />
                </div>
                <div className='form-group'>
                    <label htmlFor='confirm-password'>Confirm New Password</label>
                    <input type='password' id='password' placeholder='Enter password again' />
                </div>
                <Link to='/login' className='stylenone'>
                    <p>Try login again?</p>
                </Link>
                <Link to='/home' className='stylenone'>
                    <button className='btn'>Verify</button>
                </Link>
                
            </form>  
        </div>
    </div>
  )
}
export default ForgotPassword
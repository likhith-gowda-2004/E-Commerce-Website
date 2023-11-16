import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import './AuthPage.css'

const Login = () => {
  return (
    <div className='auth-page'>
        <Navbar reloadnavbar={false}/>
        <div className='auth-container'>
            <form className='auth-form'>
                <h1>Login</h1>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' placeholder='Enter email' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' placeholder='Enter password' />
                </div>
                <Link to='/forgotpassword' className='stylenone'>
                    <p>Forgot Password?</p>
                </Link>
                <Link to='/' className='stylenone'>
                    <button className='btn'>Login</button>
                </Link>
                <h2 className='or'>OR</h2>
                <Link to='/signup' className='stylenone'>
                    <button className='btn'>Sign Up</button>
                </Link>
                
            </form>  
        </div>
    </div>
  )
}

export default Login
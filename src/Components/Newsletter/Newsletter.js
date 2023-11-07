import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Enter your email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter

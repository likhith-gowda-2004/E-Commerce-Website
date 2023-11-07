import React from 'react'
import payment from '../../Assets/Pay.png'
import logo from '../../Assets/Logo.jpg'
import social from '../../Assets/Social.png'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='description'>
          <img src={logo} alt='logo' className='logo'/>
          <p>Shopify is a leading E Commerce Website in the India. We provide a wide range of products and services to help you grow your online presence.</p>
          <img src={social} alt='social' className='social'/>
        </div>
        <div className='about'>
          <h3>About</h3>
          <Link to="/about" className='stylenone'>
            <p>About Us</p>
          </Link>
        </div>
        <div className='about'>
          <h3>Our Information</h3>
          <Link to="/FAQ" className='stylenone'>
            <p>FAQ</p>
          </Link>
          <Link to="/privacypolicy" className='stylenone'>
            <p>Privacy Policy</p>
          </Link>
        </div>
      </div>
      <div className='bottom'>
          <h3>© Copyright 2023 Shopify, Inc. All rights reserved</h3>
          <img src={payment} alt='payment' />
      </div>
    </div>
  )
}

export default Footer
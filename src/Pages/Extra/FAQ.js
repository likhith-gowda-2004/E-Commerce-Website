import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import faq from '../../Assets/FAQ.jpg'
import SingleBanner from '../../Components/Banners/SingleBanner'
import Footer from '../../Components/Footer/Footer'
import './ExtraPages.css'

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <Navbar />
        <SingleBanner
          heading="FAQs"
          bannerimage={faq} />
        <div className='pg-content'>
          <h3>What should I do if my order is approved but hasn't been shipped yet?</h3>
          <p>Sellers usually ship orders 1 - 2 business days before the delivery date so that they reach you on time. In case your order 
          hasn't been shipped within this time please contact our Customer Support so that we can look into it.</p>
        </div>
        <div className='pg-content'>
          <h3>How quickly can I get my order delivered?</h3>
          <p>Orders will be delivered by the date you see on the product page for your location.</p>
        </div>
        <div className='pg-content'>
          <h3>How can I trust that the groceries that will be delivered are quality checked and fresh?</h3>
          <p>Groceries on Shopify are available from top brands such as HUL, P&G, ITC etc. which are renowned for their quality products.
          Seller also checks the freshness of groceries when they receive the stock from vendors and before the dispatch of items in order to ensure that only the best produce and packaged groceries reach you.</p>
        </div>
        <div className='pg-content'>
          <h3>How quickly can I get my order delivered?</h3>
          <p>Orders will be delivered by the date you see on the product page for your location.</p>
        </div>
        <div className='pg-content'>
          <h3>I have a complaint about the courier executive who came to deliver my order.</h3>
          <p>You can contact our Customer Support team with the details and we will get in touch with the courier service provider to resolve your complaint.</p>
        </div>
        <div className='pg-content'>
          <h3>I have forgotten the password for my account?</h3>
          <p>You can change your password using Forgot Password option</p>
        </div>
        <Footer />
    </div>
  )
}

export default FAQ
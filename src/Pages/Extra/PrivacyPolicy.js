import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import privacypolicy from '../../Assets/PrivacyPolicy.jpg'
import SingleBanner from '../../Components/Banners/SingleBanner'
import Footer from '../../Components/Footer/Footer'

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <Navbar reloadnavbar={false}/>
        <SingleBanner
          heading="Privacy Policy"
          bannerimage={privacypolicy} />
        <div className='pg-content'>
          <h3>Collection of Your Information</h3>
          <p>When you use our Platform, we collect and store your information which is provided by you from time to time. In general, you can browse the Platform without
            telling us who you are or revealing any personal information about yourself. Once you give us your personal information, you are not anonymous to us. Where 
            possible, we indicate which fields are required and which fields are optional. You always have the option to not provide information by choosing not to use 
            a particular service, product or feature on the Platform.</p>
          <p>We may track your buying behavior, preferences, and other information that you choose to provide on our Platform. We use this information to do internal 
            research on our users' demographics, interests, and behavior to better understand, protect and serve our users. This information is compiled and analyzed on 
            an aggregated basis. This information may include the URL that you just came from (whether this URL is on our Platform or not), which URL you next go to 
            (whether this URL is on our Platform or not), your computer browser information, and your IP address.</p>
          <p>We may collect personal information (such as email address, delivery address, name, phone number, credit card/debit card and other payment instrument 
            details) from you when you set up an account or transact with us or participate in any event or contest. While you can browse some sections of our Platform 
            without being a registered member, certain activities (such as placing an order or consuming our online content or services) do require registration. We use 
            your contact information to send you offers based on your previous orders and your interests.</p>
          <p>If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or 
            postings on the Platform, we may collect such information into a file specific to you.</p>
        </div>
        <div className="pg-content">
          <h3>Use of Demographic / Profile Data / Your Information</h3>
          <p>
          We use your personal information to provide the product and services you request. To the extent we use your personal information to market to you, we will 
          provide you the ability to opt-out of such uses. We use your personal information to assist sellers and business partners in handling and fulfilling orders; 
          enhancing customer experience; resolve disputes; troubleshoot problems; help promote a safe service; collect money; measure consumer interest in our products 
          and services; inform you about online and offline offers, products, services, and updates; customize and enhance your experience; detect and protect us 
          against error, fraud and other criminal activity; enforce our terms and conditions; and as otherwise described to you at the time of collection of information.
          </p>
          <p>
          In our efforts to continually improve our product and service offerings, we and our affiliates collect and analyze demographic and profile data about our 
          users' activity on our Platform. We identify and use your IP address to help diagnose problems with our server, and to administer our Platform. Your IP 
          address is also used to help identify you and to gather broad demographic information.
          </p>
        </div>
        <Footer />
    </div>
  )
}

export default PrivacyPolicy
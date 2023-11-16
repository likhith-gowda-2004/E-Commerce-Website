import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import SingleBanner from '../../Components/Banners/SingleBanner'
import about from '../../Assets/About_Banner.jpg'
import delivery from '../../Assets/Delivery.jpg'
import support from '../../Assets/Customer_Support.jpg'
import Footer from '../../Components/Footer/Footer.js'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='extra-page'>
      <Navbar reloadnavbar={false}/>
      <SingleBanner heading="About Us" bannerimage={about} />
      <div>
        <h1>Who are we?</h1>
      </div>
      <div className='pg-left pg-common'>
        <img src={delivery} />
        <h1>Last Mile Delivery</h1>
        <p>Transforming lives of thousands of delivery partners, our last mile operations has helped reach customers in 100% of India’s serviceable pin codes, along 
          with creating hundreds of thousands of jobs in a variety of different ways. Our delivery partners have gained more respect in their communities, and are being 
          able to walk with their heads held high. The experience has been moving, exciting, humbling, heartening, and so much more.</p>
      </div>
      <div className='pg-right pg-common'>
        <img src={support} />
        <h1>Customer Care Support</h1>
        <p>Our Help Centre helps you out to solve various types of issues that you may have encountered so that you can go back to 
          shopping online. For example, you can get more information regarding order tracking, delivery date changes, help with 
          returns (and refunds), and much more. You can get the Flipkart Help Centre number or even access Flipkart Help Centre support 
          if you are in need professional help regarding various topics. The support executive will ensure speedy assistance so that 
          your shopping experience is positive and enjoyable. You can even inform your loved ones about this so that they can 
          properly get their grievances addressed as well. Once you have all your queries addressed, you can pull out your shopping 
          list and shop for all your essentials in one place. You can shop during festive sales to get your hands on some unbelievable 
          deals online. </p>
      </div>
      <Footer />
    </div>

  )
}

export default About
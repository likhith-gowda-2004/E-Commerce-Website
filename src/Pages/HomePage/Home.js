import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import BannerSlider from '../../Components/Banners/BannerSlider'
import Footer from '../../Components/Footer/Footer'
import Newsletter from '../../Components/Newsletter/Newsletter'

const Home = () => {
  return (
    <div>
        <Navbar />
        <BannerSlider />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Home
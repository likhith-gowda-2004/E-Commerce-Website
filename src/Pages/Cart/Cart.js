import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import SingleBanner from '../../Components/Banners/SingleBanner'
import cartbanner from '../../Assets/Cart_Banner.jpeg'

const Cart = () => {
  const [cartdata, setcartdata] = useState([])
  const [subtotal, setsubtotal] = useState(0)
  const [shipping, setshipping] = useState(0)
  const [tax, settax] = useState(0)

  const getcartitemsfromlocalstorage = () => {
    let cart = JSON.parse(localStorage.getItem('cart'))
    if(cart)
    {
      console.log(cart)
      setcartdata(cart)
    }
    else
    {
      console.log('Cart not found')
    }
  }
  React.useEffect(() => {getcartitemsfromlocalstorage()}, [])
  return (
    <div>
      <Navbar reloadnavbar={false}/>
      <SingleBanner bannerimage={cartbanner} heading="My cart" />
      <Footer />
    </div>

  )
}

export default Cart
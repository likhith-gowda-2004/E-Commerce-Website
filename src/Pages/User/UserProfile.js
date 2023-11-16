import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const UserProfile = () => {
  const {activepage} = useParams()
  return (
    <div>
        <Navbar reloadnavbar={false}/>
        <Footer />
    </div>
  )
}

export default UserProfile
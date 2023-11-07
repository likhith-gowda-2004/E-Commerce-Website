import React from 'react'
import './SingleBanner.css'

const SingleBanner = ({bannerimage, heading}) => {
  return (
    <div className='single-banner'>
      <div className='banner-image-filter'></div>
      <img className='banner-image' src={bannerimage} />
      <div className='banner-heading'>
        <h1>{heading}</h1>
      </div>
    </div>
  )
}

export default SingleBanner
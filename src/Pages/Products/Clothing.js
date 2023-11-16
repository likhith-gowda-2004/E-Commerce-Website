import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Clothing.css'
import Item from '../../Components/Item/Item';
import women from '../../Assets/womens';
import men from '../../Assets/mens';
import kid from '../../Assets/kids';
import mens_banner from'../../Assets/banner_mens.jpg';
import kid_banner from '../../Assets/banner_kids.jpg';
import women_banner from '../../Assets/banner_women.jpg';
import Footer from '../../Components/Footer/Footer'

const Clothing = () => {
  return (
    <div>
        <Navbar reloadnavbar={false}/>
        <div className ="mens">
          <h1>
            Men's wear
          </h1>
          <hr/>
          <img className='banner' src={mens_banner} />
          <div className = "collections">
          {men.map((item, i) => (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}  
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
              ))}
          </div>
          
        </div>
    
        <div className = 'womens'>
            <h1>
              Women's wear
            </h1>
            <hr/>
            <img className='banner' src={women_banner} />
            <div className = "collections">
            {women.map((item, i) => (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}  
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
              ))}
        </div>
        </div>
        <div className='kids'>
        <h1>
              kids's wear
            </h1>
            <hr/>
            <img className='banner' src={kid_banner} />
            <div className = "collections">
            {kid.map((item, i) => (
                  <Item
                    key={i}
                    id={item.id}
                    name={item.name}  
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
              ))}
         </div>
         </div>
         </div>)
  
}

export default Clothing

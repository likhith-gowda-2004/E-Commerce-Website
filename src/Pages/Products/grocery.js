import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import './Product.css';
import Item from '../../Components/Item/Item';
import grocery from '../../Assets/g_01';
import grocery3_banner from '../../Assets/grocery3_banner.jpg';

const Grocery = () => {
  return (
    <div>
        <Navbar reloadnavbar={false}/>
        <div className ="grocery">
          <h1>
            Today's deals
          </h1>
          <hr/>
          <img className='banner' src={grocery3_banner} />
          <div className = "collections">
          {grocery.map((item, i) => (
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
    
      
    </div>
  )
}

export default Grocery

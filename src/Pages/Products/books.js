import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './books.css'
import Item from '../../Components/Item/Item';
import science from '../../Assets/science';
import travel from '../../Assets/travel';
import business from '../../Assets/business';
import fiction from '../../Assets/fiction';
import books3_banner from '../../Assets/books3_banner.jpg';
import books5_banner from '../../Assets/books5_banner.jpg';
import books4_banner from '../../Assets/books4_banner.jpg';
import books7_banner from '../../Assets/books7_banner.jpg';

const Book = ()=> {
  return (
    <div >
        <Navbar reloadnavbar={false}/>
        <div className ="travel">
          <h1>
            Travel
          </h1>
          <hr/>
          <img className='banner' src={books5_banner} />
          <div className = "collections">
          {travel.map((item, i) => (
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
    
        <div className = 'fiction'>
            <h1>
              Fiction
            </h1>
            <hr/>
            <img className='banner' src={books3_banner} />
            <div className = "collections">
            {fiction.map((item, i) => (
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
        <div className='science'>
        <h1>
              Science
            </h1>
            <hr/>
            <img className='banner' src={books7_banner} />
            <div className = "collections">
            {science.map((item, i) => (
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
    <div className='business'>
        <h1>
            Business
            </h1>
            <hr/>
            <img className='banner' src={books4_banner} />
            <div className = "collections">
            {business.map((item, i) => (
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
   ) ;
  
}

export default Book

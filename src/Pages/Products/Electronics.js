import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Electronics.css';
import Item from '../../Components/Item/Item';
import mobile from '../../Assets/mobile'; // Assuming this is an array of mobile phones
import laptop from '../../Assets/laptop'; // Assuming this is an array of laptops
import smartwatch from '../../Assets/smartwatch'; // Assuming this is an array of smartwatches
import headphone from '../../Assets/headphone'; // Assuming this is an array of headphones and speakers
import laptop_banner from '../../Assets/laptop_banner.jpg';
import phone_banner from '../../Assets/Phone_Banner.jpg';
import smartwatch_banner from '../../Assets/smartwatch_banner.jpg';
import headphone_banner from '../../Assets/headphones_banner.gif';

const Electronics = () => {
  return (
    <div>
      <Navbar reloadnavbar={false}/>
      <div className="mobile"> {/* Corrected class name */}
        <h1>Smart Phones</h1>
        <hr />
        <img className='banner' src={phone_banner} />
        <div className="collections">
        {mobile.map((item, i) => (
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

      <div className="laptop">
        <h1>Laptops</h1>
        <hr />
        <img className='banner' src={laptop_banner} />
        <div className="collections">
        {laptop.map((item, i) => (
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

      <div className="smartwatch"> {/* Corrected class name */}
        <h1>Smart Watches</h1>
        <hr />
        <img className='banner' src={smartwatch_banner} />
        <div className="collections">
        {smartwatch.map((item, i) => (
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

      <div className="headphone">
        <h1>Speakers and Headphones</h1>
        <hr />
        <img className='banner' src={headphone_banner} />
        <div className="collections">
          {headphone.map((item, i) => {
            return (
              <Item
                key={i}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Electronics;

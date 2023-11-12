import React from 'react';
import './Item.css';
import ShopIcon from '@mui/icons-material/Shop';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Item = (props) => {
  const [show, setshow] = React.useState(false)
  const [qty, setqty] = React.useState(1)
  const addtocart = () => {
    let cart = JSON.parse(localStorage.getItem('cartQuantity'))
    
  }
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${props.new_price}
        </div>
        <div className="item-price-old">
          {props.old_price}
        </div>
        <div className="item-buttons">
      <button className="add-to-cart-button">+</button>
      <button className="buy-now-button"></button>
       
      </div>

      </div>
     
    </div>
  );
};

export default Item;

